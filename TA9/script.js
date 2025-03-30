function getOdds(nums) {
  const impares = nums.filter(num => num % 2 !== 0);
  console.log(impares);
  return impares;
}
