function countOccurance(arr, i, target, count) {
    if(i >= arr.length){
        return count;
    }
    if(arr[i] === target){
        count++;
        }
    return countOccurance(arr, i + 1, target, count);
}
const arr = [1, 2, 3, 3, 5];
console.log(`Occurance of 3: ${countOccurance(arr, 0, 3, 0)}`);
console.log(`Occurance of 13: ${countOccurance(arr, 0, 13, 0)}`);

// Occurance of 3: 2
// Occurance of 13: 0