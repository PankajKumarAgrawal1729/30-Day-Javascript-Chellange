function checkLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("This is leap year");
  } else {
    console.log("This is not leap year");
  }
}

let year = 2942;

checkLeapYear(year);
// This is not leap year