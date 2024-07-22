const prevarr = [5, 6, 7];
console.log(prevarr);
// [ 5, 6, 7 ]

const arr = [1, 2, 3, 4, ...prevarr];
console.log(arr);
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
