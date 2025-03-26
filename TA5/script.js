function leapYears(año) {
  const esBisiesto = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
  console.log(esBisiesto);
}
