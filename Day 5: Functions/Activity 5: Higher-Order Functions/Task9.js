// function highOrderFunction(innerFunction, num) {
//   return function () {
//     return innerFunction(num);
//   };
// }
// function square(num) {
//   return num * num;
// }
// function cube(num) {
//   return num * num * num;
// }
// function squareAndCube(num) {
//   return [square(num), cube(num)];
// }
// var squareAndCubeFunction = highOrderFunction(squareAndCube, 5);
// console.log(squareAndCubeFunction()); // [ 25, 125 ]
// let fun = highOrderFunction(square, 3);
// console.log(fun()); // 9

function upperFunction(innerFunction, num) {
  for (let i = 0; i < num; i++) {
    innerFunction();
  }
}
function sayHello() {
  console.log("Hello");
}
upperFunction(sayHello, 5);

// Hello
// Hello
// Hello
// Hello
// Hello
