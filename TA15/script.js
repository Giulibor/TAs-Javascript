function agregarElemento() {
  const input = document.getElementById("nuevoElemento");
  const texto = input.value.trim();

  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;
    document.getElementById("miLista").appendChild(li);
    input.value = "";
  }
}

function eliminarUltimo() {
  const lista = document.getElementById("miLista");
  if (lista.lastChild) {
    lista.removeChild(lista.lastChild);
  }
}

/* De esta manera si salis del navegador se elimina la lista, por lo que para que no pase implemente guardarlo en localStorage */
