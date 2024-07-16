let marks = 85;

switch (true) {
  case marks >= 80:
    console.log("A");
    break;
  case marks >= 60 && marks < 80:
    console.log("B");
    break;
  case marks >= 50 && marks < 60:
    console.log("C");
    break;
  case marks >= 35 && marks < 50:
    console.log("D");
    break;
  case marks < 35:
    console.log("F");
    break;
}

// A