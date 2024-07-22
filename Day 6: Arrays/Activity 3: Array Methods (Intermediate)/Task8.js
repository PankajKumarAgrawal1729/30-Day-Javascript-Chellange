let arr = [1, 2, 3, 4, 5, 6];
console.log("Original array: " + arr);

arr = arr.filter(num => num % 2 == 0)
console.log("Even numbers: " + arr);


// Original array: 1,2,3,4,5,6
// Even numbers: 2,4,6