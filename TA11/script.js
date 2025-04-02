function duplicates(nums) {
  const conteo = {};

  nums.forEach(num => {
    conteo[num] = (conteo[num] || 0) + 1;
  });

  const cantidadDuplicados = Object.values(conteo).filter(cantidad => cantidad > 1).length;

  console.log(`Cantidad de elementos duplicados: ${cantidadDuplicados}`);
  return cantidadDuplicados;
}

/* Cuenta cuantas veces aparece cada num.
Filtra lo que esta repetido mas de una vez 
Cant. de numeros dif que se repiten */