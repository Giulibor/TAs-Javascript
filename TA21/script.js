const input = document.getElementById("campoTexto");

input.addEventListener("focus", () => {
  input.style.borderColor = "#8e0b69"; 
});

input.addEventListener("blur", () => {
  input.style.borderColor = "#de69bc"; 
});
