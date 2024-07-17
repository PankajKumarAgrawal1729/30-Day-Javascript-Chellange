function upperFunction(innerFunction1, innerFunction2, num) {
  console.log("Initial Value: " + num);
  return innerFunction2(innerFunction1(num));
}
const doble = (num) => {
  num *= 2;
  console.log("After First Inner Method: " + num);
  return num;
};
const square = (num) => {
  num *= num;
  console.log("After Second Inner Method: " + num);
  return num;
};
const result = upperFunction(doble, square, 2);
console.log("Final Result: " + result);

// Initial Value: 2
// After First Inner Method: 4
// After Second Inner Method: 16
// Final Result: 16
