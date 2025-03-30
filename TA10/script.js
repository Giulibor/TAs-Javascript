function getSum(nums) {
  const suma = nums.reduce((total, num) => total + num, 0);
  console.log(`La suma total es: ${suma}`);
  return suma;
}
