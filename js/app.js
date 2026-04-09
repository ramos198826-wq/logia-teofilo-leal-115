
const frasesLocales = [
  "La verdadera sabiduría comienza con el dominio de uno mismo.",
  "El trabajo constante pule la piedra bruta del ser humano.",
  "La fraternidad une lo que el ego separa.",
  "La luz se encuentra en la búsqueda sincera de la verdad.",
  "Cada paso con disciplina fortalece el templo interior.",
  "La verdad se honra con obras, no solo con palabras.",
  "El estudio y la rectitud elevan el carácter del hombre."
];

function mostrarFrase() {
  const contenedorMensaje = document.getElementById("mensaje");
  if (!contenedorMensaje) return;

  const indice = Math.floor(Math.random() * frasesLocales.length);
  contenedorMensaje.innerHTML = `<em>"${frasesLocales[indice]}"</em>`;
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarFrase();

  const btn = document.getElementById("btn-cambiar");

  if (btn) {
    btn.addEventListener("click", mostrarFrase);
  }
});


