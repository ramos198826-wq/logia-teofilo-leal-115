const frasesLocales = [
  "La verdadera sabiduría comienza con el dominio de uno mismo.",
  "El trabajo constante pule la piedra bruta del ser humano.",
  "La fraternidad une lo que el ego separa.",
  "La luz se encuentra en la búsqueda sincera de la verdad.",
  "Cada paso con disciplina fortalece el templo interior.",
  "La verdad se honra con obras, no solo con palabras.",
  "El estudio y la rectitud elevan el carácter del hombre."
];

let indiceActual = 0;

function mostrarFrase() {
  const contenedor = document.getElementById("mensaje");
  if (!contenedor) return;

  contenedor.style.opacity = 0;

  setTimeout(() => {
    contenedor.innerHTML = `<em>"${frasesLocales[indiceActual]}"</em>`;
    contenedor.style.opacity = 1;

    indiceActual++;
    if (indiceActual >= frasesLocales.length) {
      indiceActual = 0;
    }
  }, 400);
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarFrase();
  setInterval(mostrarFrase, 7000);
});

// función que cambia el color del fondo cada 3 segundos
let ultimoColor = "";

function cambiarColorFondo() {
  const colores = [
    "#f4f1ea",
    "#ece7dc",
    "#e6dfd1",
    "#f8f6f1",
    "#ddd6c4"
  ];

  let nuevoColor;

  do {
    nuevoColor = colores[Math.floor(Math.random() * colores.length)];
  } while (nuevoColor === ultimoColor);

  document.body.style.backgroundColor = nuevoColor;
  ultimoColor = nuevoColor;
}

setInterval(cambiarColorFondo, 8000);
