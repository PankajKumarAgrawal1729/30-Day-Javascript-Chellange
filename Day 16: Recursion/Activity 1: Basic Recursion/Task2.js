function fib(num) {
  if (num <= 1) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}

for (let i = 1; i <= 5; i++) {
  console.log(`${i}th Fibonacci number: ${fib(i)}`);
}

// 1th Fibonacci number: 1
// 2th Fibonacci number: 1
// 3th Fibonacci number: 2
// 4th Fibonacci number: 3
// 5th Fibonacci number: 5
