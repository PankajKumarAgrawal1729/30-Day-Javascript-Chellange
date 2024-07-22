const product = (a, b = 1) => {
  return a * b;
};
console.log(product(2, 3)); // 6
console.log(product(2)); // 2
