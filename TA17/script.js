function incrementar() {
  const span = document.getElementById("contador");
  let valorActual = parseInt(span.textContent);
  valorActual++;
  span.textContent = valorActual;
}
