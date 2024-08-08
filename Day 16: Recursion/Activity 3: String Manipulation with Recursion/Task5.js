function reverse(str, i, rev = "") {
    if(i >= str.length){
        return rev;
    }
    rev += reverse(str, i + 1, rev) + str[i];
    return rev;
}
console.log(reverse("Pankaj", 0));  // jaknaP