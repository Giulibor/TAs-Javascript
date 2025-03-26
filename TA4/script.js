function sumAll(a, b) {
  let suma = 0;
  
  const inicio = Math.min(a, b);
  const fin = Math.max(a, b);

  for (let i = inicio; i <= fin; i++) {
    suma += i;
  }

  console.log(suma);
}
