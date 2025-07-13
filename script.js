const malla = document.getElementById('malla');

const mallaDatos = [
  {
    anio: "Primer Año",
    semestres: [
      {
        semestre: "Semestre I",
        ramos: [
          { id: 'fund_bio_med', nombre: 'Fundamentos Biológicos de la Medicina', requisitos: [] },
          { id: 'matematica', nombre: 'Matemática', requisitos: [] },
          { id: 'quimica_gen_org', nombre: 'Química General y Orgánica', requisitos: [] },
          { id: 'morfologia_i', nombre: 'Morfología I', requisitos: [] },
          { id: 'com_oral_1', nombre: 'Comunicación Oral y Escrita I', requisitos: [] },
          { id: 'idioma_ext_1', nombre: 'Idioma Extranjero I', requisitos: [] },
        ]
      },
      {
        semestre: "Semestre II",
        ramos: [
          { id: 'fisica', nombre: 'Física', requisitos: ['matematica'] },
          { id: 'morfologia_ii', nombre: 'Morfología II', requisitos: ['morfologia_i'] },
          { id: 'neuroanatomia', nombre: 'Neuroanatomía', requisitos: ['morfologia_i'] },
          { id: 'intro_med', nombre: 'Introducción a la Medicina', requisitos: [] },
          { id: 'com_oral_2', nombre: 'Comunicación Oral y Escrita II', requisitos: ['com_oral_1'] },
          { id: 'idioma_ext_2', nombre: 'Idioma Extranjero II', requisitos: ['idioma_ext_1'] },
        ]
      }
    ]
  },
  {
    anio: "Segundo Año",
    semestres: [
      {
        semestre: "Semestre III",
        ramos: [
          { id: 'fisiologia_med_i', nombre: 'Fisiología Médica I', requisitos: ['morfologia_ii','fund_bio_med'] },
          { id: 'bioestadistica', nombre: 'Bioestadística', requisitos: ['matematica'] },
          { id: 'microbiologia_parasitologia', nombre: 'Microbiología y Parasitología', requisitos: ['fund_bio_med'] },
          { id: 'genetica_medica', nombre: 'Genética Médica', requisitos: ['fund_bio_med'] },
          { id: 'deportivo_i', nombre: 'Deportivo I', requisitos: [] },
          { id: 'bioetica', nombre: 'Bioética', requisitos: [] },
          { id: 'proc_clin_bas', nombre: 'Procedimientos Clínicos Básicos', requisitos: ['morfologia_ii'] },
          { id: 'autogestion_aprend', nombre: 'Autogestión del Aprendizaje', requisitos: [] },
          { id: 'idioma_ext_3', nombre: 'Idioma Extranjero III', requisitos: ['idioma_ext_2'] },
        ]
      },
      {
        semestre: "Semestre IV",
        ramos: [
          { id: 'fisiologia_med_ii', nombre: 'Fisiología Médica II', requisitos: ['fisiologia_med_i'] },
          { id: 'epidemiologia', nombre: 'Epidemiología', requisitos: ['bioestadistica'] },
          { id: 'taller_anatomia_clinica', nombre: 'Taller de Anatomía Clínica', requisitos: ['fisiologia_med_i', 'neuroanatomia', 'morfologia_ii'] },
          { id: 'patologia_integrada_i', nombre: 'Patología Integrada I', requisitos: ['fisiologia_med_i', 'neuroanatomia', 'morfologia_ii', 'fund_bio_med'] },
          { id: 'mic_i', nombre: 'MIC - I', requisitos: ['fisiologia_med_i', 'neuroanatomia', 'morfologia_ii', 'fund_bio_med'] },
          { id: 'educacion_salud', nombre: 'Educación en Salud', requisitos: ['intro_med'] },
          { id: 'trabajo_equipo_habilidades', nombre: 'Trabajo en Equipo y Desarrollo de Habilidades Sociales', requisitos: ['autogestion_aprend'] },
          { id: 'idioma_ext_4', nombre: 'Idioma Extranjero IV', requisitos: ['idioma_ext_3'] },
        ]
      }
    ]
  },
  // Puedes seguir agregando más años y semestres siguiendo este formato.
];

// Función para crear la malla en el DOM
function crearMalla() {
  mallaDatos.forEach(anio => {
    const divAnio = document.createElement('div');
    divAnio.classList.add('anio');

    const tituloAnio = document.createElement('h2');
    tituloAnio.textContent = anio.anio;
    divAnio.appendChild(tituloAnio);

    anio.semestres.forEach(semestre => {
      const divSemestre = document.createElement('div');
      divSemestre.classList.add('semestre');

      const tituloSem = document.createElement('h3');
      tituloSem.textContent = semestre.semestre;
      divSemestre.appendChild(tituloSem);

      semestre.ramos.forEach(ramo => {
        const divRamo = document.createElement('div');
        divRamo.classList.add('ramo');
        divRamo.id = ramo.id;
        divRamo.textContent = ramo.nombre;

        if (ramo.requisitos.length > 0) {
          divRamo.classList.add('locked');
        }

        divSemestre.appendChild(divRamo);
      });

      divAnio.appendChild(divSemestre);
    });

    malla.appendChild(divAnio);
  });
}

// Función para manejar el clic y desbloquear
function setupEventos() {
  malla.addEventListener('click', e => {
    const target = e.target.closest('.ramo');
    if (!target || target.classList.contains('locked') || target.classList.contains('approved')) return;

    target.classList.add('approved');

    // Revisa si con este aprobado se pueden desbloquear otros ramos
    mallaDatos.forEach(anio => {
      anio.semestres.forEach(semestre => {
        semestre.ramos.forEach(ramo => {
          const ramoDiv = document.getElementById(ramo.id);
          if (!ramoDiv.classList.contains('locked')) return;

          const requisitosCumplidos = ramo.requisitos.every(reqId => {
            const reqDiv = document.getElementById(reqId);
            return reqDiv && reqDiv.classList.contains('approved');
          });

          if (requisitosCumplidos) {
            ramoDiv.classList.remove('locked');
          }
        });
      });
    });
  });
}

// Inicializar
crearMalla();
setupEventos();
