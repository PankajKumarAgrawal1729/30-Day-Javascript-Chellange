const product = (num1, num2 = 3) => {
    return num1 * num2;
}
console.log(product(2, 6));  // 12
console.log(product(2));  // 6