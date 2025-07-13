const ramos = [
  // 1er Año - Semestre I
  { id: 'fund_bio_med', nombre: 'Fundamentos Biológicos de la Medicina', requisitos: [] },
  { id: 'matematica', nombre: 'Matemática', requisitos: [] },
  { id: 'quimica', nombre: 'Química General y Orgánica', requisitos: [] },
  { id: 'morfologia_i', nombre: 'Morfología I', requisitos: [] },
  { id: 'com_oral_i', nombre: 'Comunicación Oral y Escrita I', requisitos: [] },
  { id: 'idioma_ext_i', nombre: 'Idioma Extranjero I', requisitos: [] },

  // 1er Año - Semestre II
  { id: 'fisica', nombre: 'Física', requisitos: ['matematica'] },
  { id: 'morfologia_ii', nombre: 'Morfología II', requisitos: ['morfologia_i'] },
  { id: 'neuroanatomia', nombre: 'Neuroanatomía', requisitos: ['morfologia_i'] },
  { id: 'intro_med', nombre: 'Introducción a la Medicina', requisitos: [] },
  { id: 'com_oral_ii', nombre: 'Comunicación Oral y Escrita II', requisitos: ['com_oral_i'] },
  { id: 'idioma_ext_ii', nombre: 'Idioma Extranjero II', requisitos: ['idioma_ext_i'] },

  // 2do Año - Semestre III
  { id: 'fisiologia_i', nombre: 'Fisiología Médica I', requisitos: ['morfologia_ii', 'fund_bio_med'] },
  { id: 'bioestadistica', nombre: 'Bioestadística', requisitos: ['matematica'] },
  { id: 'microbio_parasito', nombre: 'Microbiología y Parasitología', requisitos: ['fund_bio_med'] },
  { id: 'genetica_med', nombre: 'Genética Médica', requisitos: ['fund_bio_med'] },
  { id: 'deportivo_i', nombre: 'Deportivo I', requisitos: [] },
  { id: 'bioetica', nombre: 'Bioética', requisitos: [] },
  { id: 'proc_clin_bas', nombre: 'Procedimientos Clínicos Básicos', requisitos: ['morfologia_ii'] },
  { id: 'autogestion', nombre: 'Autogestión del Aprendizaje', requisitos: [] },
  { id: 'idioma_ext_iii', nombre: 'Idioma Extranjero III', requisitos: ['idioma_ext_ii'] },

  // 2do Año - Semestre IV
  { id: 'fisiologia_ii', nombre: 'Fisiología Médica II', requisitos: ['fisiologia_i'] },
  { id: 'epidemiologia', nombre: 'Epidemiología', requisitos: ['bioestadistica'] },
  { id: 'taller_anatomia', nombre: 'Taller de Anatomía Clínica', requisitos: ['fisiologia_i', 'neuroanatomia', 'morfologia_ii'] },
  { id: 'patologia_i', nombre: 'Patología Integrada I', requisitos: ['fisiologia_i', 'neuroanatomia', 'morfologia_ii', 'fund_bio_med'] },
  { id: 'mic_i', nombre: 'MIC - I', requisitos: ['fisiologia_i', 'neuroanatomia', 'morfologia_ii', 'fund_bio_med'] },
  { id: 'educacion_salud', nombre: 'Educación en Salud', requisitos: ['intro_med'] },
  { id: 'trabajo_equipo', nombre: 'Trabajo en Equipo y Desarrollo de Habilidades Sociales', requisitos: ['autogestion'] },
  { id: 'idioma_ext_iv', nombre: 'Idioma Extranjero IV', requisitos: ['idioma_ext_iii'] },

  // 3er Año - Semestre V
  { id: 'patologia_ii', nombre: 'Patología Integrada II', requisitos: ['patologia_i'] },
  { id: 'preclinicos_integrados', nombre: 'Preclínicos Integrados', requisitos: ['patologia_i', 'taller_anatomia', 'fisiologia_ii'] },
  { id: 'farmacologia_general', nombre: 'Farmacología General', requisitos: ['mic_i', 'fisiologia_ii'] },
  { id: 'comp_contextos_sociales', nombre: 'Comprensión de Contextos Sociales', requisitos: ['com_oral_ii'] },
  { id: 'idioma_ext_v', nombre: 'Idioma Extranjero V', requisitos: ['idioma_ext_iv'] },

  // 3er Año - Semestre VI
  { id: 'med_interna_i', nombre: 'Medicina Interna I', requisitos: ['farmacologia_general', 'preclinicos_integrados'] },
  { id: 'farmacologia_clinica', nombre: 'Farmacología Clínica', requisitos: ['farmacologia_general', 'patologia_ii'] },
  { id: 'psicologia_med', nombre: 'Psicología Médica', requisitos: ['intro_med'] },
  { id: 'med_familiar', nombre: 'Medicina Familiar', requisitos: ['educacion_salud'] },
  { id: 'salud_publica', nombre: 'Salud Pública', requisitos: ['epidemiologia'] },
  { id: 'electivo_medico_i', nombre: 'Electivo Médico I', requisitos: [] },
  { id: 'comp_contextos_cult', nombre: 'Comprensión de Contextos Culturales', requisitos: ['comp_contextos_sociales'] },
  { id: 'idioma_ext_vi', nombre: 'Idioma Extranjero VI', requisitos: ['idioma_ext_v'] },

  // 4to Año - Semestre VII
  { id: 'med_interna_ii', nombre: 'Medicina Interna II', requisitos: ['med_interna_i'] },
  { id: 'neurociencias', nombre: 'Neurociencias', requisitos: ['farmacologia_clinica', 'med_interna_i', 'neuroanatomia'] },
  { id: 'med_fisica', nombre: 'Medicina Física', requisitos: ['med_familiar'] },
  { id: 'psicopatologia', nombre: 'Psicopatología', requisitos: ['psicologia_med'] },
  { id: 'manejo_estres', nombre: 'Manejo del Estrés y Calidad de Vida', requisitos: ['psicologia_med'] },
  { id: 'especialidades_i', nombre: 'Especialidades I', requisitos: ['med_interna_i'] },
  { id: 'etica_res_social', nombre: 'Ética y Responsabilidad Social', requisitos: ['comp_contextos_cult', 'trabajo_equipo'] },

  // 4to Año - Semestre VIII
  { id: 'cirugia', nombre: 'Cirugía', requisitos: ['med_interna_ii'] },
  { id: 'especialidades_ii', nombre: 'Especialidades II', requisitos: ['especialidades_i', 'med_interna_ii'] },
  { id: 'investigacion_i', nombre: 'Investigación I', requisitos: ['bioetica', 'bioestadistica'] },
  { id: 'psiquiatria', nombre: 'Psiquiatría', requisitos: ['psicopatologia'] },
  { id: 'responsabilidad_social', nombre: 'Responsabilidad Social', requisitos: ['etica_res_social'] },

  // 5to Año - Semestre IX
  { id: 'gineco_obstetricia', nombre: 'Ginecología y Obstetricia', requisitos: ['cirugia', 'med_interna_ii'] },
  { id: 'mic_ii', nombre: 'MIC - II', requisitos: ['especialidades_ii', 'cirugia'] },
  { id: 'electivo_medico_ii', nombre: 'Electivo Médico II', requisitos: ['cirugia'] },
  { id: 'investigacion_ii', nombre: 'Investigación II', requisitos: ['investigacion_i'] },
  { id: 'etica_medica', nombre: 'Ética Médica', requisitos: ['cirugia', 'bioetica'] },
  { id: 'medicina_basada_evidencia', nombre: 'Medicina Basada en la Evidencia', requisitos: ['salud_publica', 'med_interna_i'] },
  { id: 'deportivo_ii', nombre: 'Deportivo II', requisitos: ['deportivo_i'] },

  // 5to Año - Semestre X
  { id: 'taller_imagenologia', nombre: 'Taller de Imagenología', requisitos: ['especialidades_ii', 'cirugia'] },
  { id: 'pediatria', nombre: 'Pediatría', requisitos: ['cirugia', 'med_interna_ii'] },
  { id: 'cirugia_infantil', nombre: 'Cirugía Infantil', requisitos: ['cirugia'] },
  { id: 'med_legal', nombre: 'Medicina Legal', requisitos: ['etica_medica', 'cirugia'] },
  { id: 'geriatria', nombre: 'Geriatría', requisitos: ['med_interna_ii'] },
  { id: 'administracion_salud', nombre: 'Administración en Salud', requisitos: ['salud_publica'] },
  { id: 'medicinas_complementarias', nombre: 'Medicinas Complementarias', requisitos: ['cirugia'] },

  // 6to Año - Semestre XI (Internados)
  { id: 'internado_med_interna', nombre: 'Internado Medicina Interna', requisitos: [
    'medicinas_complementarias', 'administracion_salud', 'geriatria', 'med_legal', 'cirugia_infantil',
    'pediatria', 'taller_imagenologia', 'deportivo_ii', 'medicina_basada_evidencia', 'investigacion_ii',
    'electivo_medico_ii', 'mic_ii', 'gineco_obstetricia', 'responsabilidad_social', 'psiquiatria',
    'manejo_estres', 'med_fisica', 'neurociencias', 'idioma_ext_vi', 'electivo_medico_i',
    'proc_clin_bas', 'genetica_med'
  ] },
  { id: 'internado_cirugia', nombre: 'Internado Cirugía', requisitos: [
    'medicinas_complementarias', 'administracion_salud', 'geriatria', 'med_legal', 'cirugia_infantil',
    'pediatria', 'taller_imagenologia', 'deportivo_ii', 'medicina_basada_evidencia', 'investigacion_ii',
    'electivo_medico_ii', 'mic_ii', 'gineco_obstetricia', 'responsabilidad_social', 'psiquiatria',
    'manejo_estres', 'med_fisica', 'neurociencias', 'idioma_ext_vi', 'electivo_medico_i',
    'proc_clin_bas', 'genetica_med'
  ] },

  // 6to Año - Semestre XII
  { id: 'internado_pediatria', nombre: 'Internado Pediatría', requisitos: [
    'medicinas_complementarias', 'administracion_salud', 'geriatria', 'med_legal', 'cirugia_infantil',
    'pediatria', 'taller_imagenologia', 'deportivo_ii', 'medicina_basada_evidencia', 'investigacion_ii',
    'electivo_medico_ii', 'mic_ii', 'gineco_obstetricia', 'responsabilidad_social', 'psiquiatria',
    'manejo_estres', 'med_fisica', 'neurociencias', 'idioma_ext_vi', 'electivo_medico_i',
    'proc_clin_bas', 'genetica_med'
  ] },
  { id: 'internado_electivo_i', nombre: 'Internado Electivo I', requisitos: [
    'medicinas_complementarias', 'administracion_salud', 'geriatria', 'med_legal', 'cirugia_infantil',
    'pediatria', 'taller_imagenologia', 'deportivo_ii', 'medicina_basada_evidencia', 'investigacion_ii',
    'electivo_medico_ii', 'mic_ii', 'gineco_obstetricia', 'responsabilidad_social', 'psiquiatria',
    'manejo_estres', 'med_fisica', 'neurociencias', 'idioma_ext_vi', 'electivo_medico_i',
    'proc_clin_bas', 'genetica_med'
  ] },

  // 7mo Año - Semestre XIII
  { id: 'internado_gineco_obstetricia', nombre: 'Internado Ginecología y Obstetricia', requisitos: [
    'medicinas_complementarias', 'administracion_salud', 'geriatria', 'med_legal', 'cirugia_infantil',
    'pediatria', 'taller_imagenologia', 'deportivo_ii', 'medicina_basada_evidencia', 'investigacion_ii',
    'electivo_medico_ii', 'mic_ii', 'gineco_obstetricia', 'responsabilidad_social', 'psiquiatria',
    'manejo_estres', 'med_fisica', 'neurociencias', 'idioma_ext_vi', 'electivo_medico_i',
    'proc_clin_bas', 'genetica_med'
  ] },
  { id: 'internado_investigacion', nombre: 'Internado Investigación', requisitos: ['investigacion_ii'] },
];

const malla = document.getElementById('malla');

function nombreDeId(id) {
  const ramo = ramos.find(r => r.id === id);
  return ramo ? ramo.nombre : id;
}

// Crear los cuadros
ramos.forEach(ramo => {
  const div = document.createElement('div');
  div.classList.add('ramo');
  div.id = ramo.id;
  div.innerHTML = `
    <h3>${ramo.nombre}</h3>
    <small>Requisitos: ${ramo.requisitos.length ? ramo.requisitos.map(nombreDeId).join(', ') : 'Ninguno'}</small>
  `;
  if (ramo.requisitos.length > 0) div.classList.add('locked');
  malla.appendChild(div);
});

// Evento click para aprobar y desbloquear
malla.addEventListener('click', e => {
  const target = e.target.closest('.ramo');
  if (!target || target.classList.contains('locked') || target.classList.contains('approved')) return;
  target.classList.add('approved');

  ramos.forEach(ramo => {
    const ramoDiv = document.getElementById(ramo.id);
    if (!ramoDiv.classList.contains('locked')) return;
    const requisitosCumplidos = ramo.requisitos.every(req => {
      return document.getElementById(req).classList.contains('approved');
    });
    if (requisitosCumplidos) {
      ramoDiv.classList.remove('locked');
    }
  });
});
