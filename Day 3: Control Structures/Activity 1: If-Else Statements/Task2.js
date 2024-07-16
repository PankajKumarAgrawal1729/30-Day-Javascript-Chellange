function checkEligibleForVoteOrNot(age) {
  if (age >= 18) {
    console.log("You are eligible for vote");
  } else {
    console.log("You are not eligible for vote");
  }
}

let age = 38;
let childAge = 8;

checkEligibleForVoteOrNot(age);  // You are eligible for vote
checkEligibleForVoteOrNot(childAge); // You are not eligible for vote
