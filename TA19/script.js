const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const email = document.getElementById("email");

const errorNombre = document.getElementById("errorNombre");
const errorPassword = document.getElementById("errorPassword");
const errorEmail = document.getElementById("errorEmail");

nombre.addEventListener("input", () => {
  errorNombre.style.display = nombre.value.trim() === "" ? "block" : "none";
});

password.addEventListener("input", () => {
  errorPassword.style.display = password.value.length < 8 ? "block" : "none";
});

email.addEventListener("input", () => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  errorEmail.style.display = !regexEmail.test(email.value) ? "block" : "none";
});

formulario.addEventListener("submit", (e) => {
  let valido = true;

  if (nombre.value.trim() === "") {
    errorNombre.style.display = "block";
    valido = false;
  }

  if (password.value.length < 8) {
    errorPassword.style.display = "block";
    valido = false;
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value)) {
    errorEmail.style.display = "block";
    valido = false;
  }

  if (!valido) {
    e.preventDefault();
  }
});
