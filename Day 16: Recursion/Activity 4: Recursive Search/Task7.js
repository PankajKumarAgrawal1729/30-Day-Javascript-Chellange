function binarySearch(arr, i, j, target) {
  if (i > j) {
    return -1;
  }
  let mid = parseInt(i + ((j - i) / 2));
  if (arr[mid] == target) {
    return mid;
  }
  if (arr[mid] > target) {
    return binarySearch(arr, i, mid - 1, target);
  } else {
    return binarySearch(arr, mid + 1, j, target);
  }
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(`index of 3: ${binarySearch(arr, 0, arr.length - 1, 3)}`);
console.log(`index of 13: ${binarySearch(arr, 0, arr.length - 1, 13)}`);

// index of 3: 2
// index of 13: -1