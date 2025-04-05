 function agregarElemento() {
  const input = document.getElementById("nuevoElemento");
  const texto = input.value.trim();

  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;
    document.getElementById("miLista").appendChild(li);
    input.value = ""; // Limpiar el input
  }
}


