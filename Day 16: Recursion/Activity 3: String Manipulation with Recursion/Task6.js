function palindrom(str, i, j) {
    if(i >= j){
        return true;
    }
    if(str[i] != str[j]){
        return false;
    }
    return palindrom(str, i + 1, j - 1);
}
const str1 = "CSSUtil";
const str2 = "KAAK";
let isPalindrome1 = palindrom(str1, 0, str1.length - 1);
let isPalindrome2 = palindrom(str2, 0, str2.length - 1);
console.log(isPalindrome1 ? "Yes" : "No");  // No
console.log(isPalindrome2 ? "Yes" : "No");  // yes