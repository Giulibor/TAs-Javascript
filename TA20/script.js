const imagen = document.getElementById("miImagen");

imagen.addEventListener("mouseenter", () => {
  imagen.src = "Resultado/hombre.png"; 
});

imagen.addEventListener("mouseleave", () => {
  imagen.src = "Resultado/mujer.png";
});
