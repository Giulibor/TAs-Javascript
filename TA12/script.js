function generatePassword(length) {
  if (length < 8) {
    console.log("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const minus = "abcdefghijklmnopqrstuvwxyz";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const todos = mayus + minus + numeros + simbolos;

  let password = "";

  password += mayus[Math.floor(Math.random() * mayus.length)];
  password += minus[Math.floor(Math.random() * minus.length)];
  password += numeros[Math.floor(Math.random() * numeros.length)];
  password += simbolos[Math.floor(Math.random() * simbolos.length)];

  for (let i = password.length; i < length; i++) {
    password += todos[Math.floor(Math.random() * todos.length)];
  }

  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  console.log(`Contraseña generada: ${password}`);
  return password;
}
