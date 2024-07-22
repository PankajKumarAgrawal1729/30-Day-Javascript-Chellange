function sum(...rest) {
  let total = 0;
  [...rest].forEach((num) => {
    total += num;
  });
  return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));  // 36
