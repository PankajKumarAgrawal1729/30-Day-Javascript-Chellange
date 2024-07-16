function checkNumber(num) {
  if (num > 0) {
    console.log("Number is positive");
  } else if (num < 0) {
    console.log("Number is negative");
  } else {
    console.log("Number is zero");
  }
}

let a = 3;
let b = -5;
let c = 0;

checkNumber(a);  // Number is positive
checkNumber(b);  // Number is negative
checkNumber(c);  // Number is zero
