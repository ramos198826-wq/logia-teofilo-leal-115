// Función para traer la información
const obtenerFrase = () => {
    const contenedorMensaje = document.getElementById("mensaje");
    
    // Feedback visual inmediato (UX)
    contenedorMensaje.innerHTML = "<em>Buscando inspiración en los archivos...</em>";

    // Usamos una API alternativa muy estable de consejos/frases
  fetch('https://allorigins.win' + encodeURIComponent('https://adviceslip.com'))
    .then(response => {
        if (response.ok) return response.json();
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Como usamos un proxy, la respuesta viene envuelta en "contents"
        const datosReales = JSON.parse(data.contents);
        contenedorMensaje.innerHTML = `<em>"${datosReales.slip.advice}"</em>`;
    })
    .catch(error => {
        console.error("Error de conexión:", error);
        contenedorMensaje.innerText = "La sabiduría está en mantenimiento (Error de CORS).";
    });
};

// Disparador principal
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Ejecutar una vez al entrar
    obtenerFrase();

    // 2. Escuchar el botón
    const btn = document.getElementById("btn-cambiar");
    
    if (btn) {
        btn.onclick = function() {
            obtenerFrase();
        };
        console.log("Botón detectado y configurado."); 
    } else {
        console.log("Error: No encontré el botón con id 'btn-cambiar'.");
    }
});




