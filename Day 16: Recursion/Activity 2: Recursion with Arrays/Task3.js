function sum(arr, i) {
  if (i < 0) {
    return 0;
  }
  return arr[i] + sum(arr, i - 1);
}

const arr = [1, 2, 3, 4, 5];
console.log(`Sum of ${arr}: ${sum(arr, arr.length - 1)}`);
// Sum of 1,2,3,4,5: 15
