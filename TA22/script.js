const parrafo = document.getElementById("tamanoVentana");

function mostrarTamañoVentana() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  parrafo.textContent = `Ancho: ${ancho}px | Alto: ${alto}px`;
}

mostrarTamañoVentana();

window.addEventListener("resize", mostrarTamañoVentana);
