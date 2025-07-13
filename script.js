
const ramos = [
  {
    id: 'matematica',
    nombre: 'Matemática',
    requisitos: []
  },
  {
    id: 'fisica',
    nombre: 'Física',
    requisitos: ['matematica']
  },
  {
    id: 'bioestadistica',
    nombre: 'Bioestadística',
    requisitos: ['matematica']
  },
  // Agrega aquí el resto de los ramos con sus ids y requisitos
];

const malla = document.getElementById('malla');

ramos.forEach(ramo => {
  const div = document.createElement('div');
  div.classList.add('ramo');
  div.id = ramo.id;
  div.innerHTML = `<h3>${ramo.nombre}</h3><small>Requisitos: ${ramo.requisitos.join(', ') || 'Ninguno'}</small>`;
  if (ramo.requisitos.length > 0) div.classList.add('locked');
  malla.appendChild(div);
});

malla.addEventListener('click', e => {
  const target = e.target.closest('.ramo');
  if (!target || target.classList.contains('locked')) return;
  target.classList.add('approved');

  ramos.forEach(ramo => {
    if (!document.getElementById(ramo.id).classList.contains('locked')) return;
    const requisitosCumplidos = ramo.requisitos.every(req => {
      return document.getElementById(req).classList.contains('approved');
    });
    if (requisitosCumplidos) {
      const desbloquear = document.getElementById(ramo.id);
      desbloquear.classList.remove('locked');
    }
  });
});
