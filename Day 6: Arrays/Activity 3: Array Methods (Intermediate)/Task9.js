let arr = [1, 2, 3, 4, 5, 6];
console.log("Original array: " + arr);

let sum = arr.reduce((prev, curr) => prev + curr, 0);
console.log("Sum of all elements: " + sum);

// Original array: 1,2,3,4,5,6
// Sum of all elements: 21