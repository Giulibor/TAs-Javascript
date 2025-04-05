const personas = [
  "Giuli",
  "Camila",
  "Martín",
  "Nicolás",
];

const ul = document.getElementById("listaPersonas");
const input = document.getElementById("busqueda");

// lista completa al iniciar
renderLista(personas);

input.addEventListener("input", () => {
  const texto = input.value.toLowerCase();
  const filtrados = personas.filter(nombre => nombre.toLowerCase().includes(texto));
  renderLista(filtrados);
});


function renderLista(arr) {
  ul.innerHTML = ""; 
  arr.forEach(nombre => {
    ul.innerHTML += `<li>${nombre}</li>`;
  });
}
