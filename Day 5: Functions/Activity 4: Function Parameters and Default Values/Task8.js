function greeting(name, age = 18) {
  console.log(`Hello ${name} you are ${age} years old`);
}
greeting("John"); // Hello John you are 18 years old
greeting("John", 30); // Hello John you are 30 years old
