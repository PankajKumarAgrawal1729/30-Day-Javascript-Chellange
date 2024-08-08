function max(arr, i, maxi){
    if(i >= arr.length){
        return maxi;
    }
    if(arr[i] > maxi){
        maxi = arr[i];
    }
    return max(arr, i + 1, maxi);
}
let arr = [ 2, 1, 6, 3, 4, 5];
console.log(max(arr, 0, arr[0])); // 6