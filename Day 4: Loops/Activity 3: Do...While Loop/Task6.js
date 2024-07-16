let fact = 1;
let i = 1;
let num = 5;

do {
  fact *= i;
  i++;
} while (i <= num);

console.log("Factorial of " + num + " is " + fact);

// Factorial of 5 is 120