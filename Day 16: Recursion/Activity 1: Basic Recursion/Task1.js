function fact (num) {
    if(num == 0 || num == 1){
        return 1;
    }
    return fact(num - 1) * num;
}

console.log(`Factorial of 5 : ${fact(5)}`);
console.log(`Factorial of 7 : ${fact(7)}`);
console.log(`Factorial of 14 : ${fact(14)}`);

// Factorial of 5 : 120
// Factorial of 7 : 5040
// Factorial of 14 : 87178291200