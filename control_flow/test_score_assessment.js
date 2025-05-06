// if...else method
let score = 90;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else {
  console.log("C");
}

// switch method
switch (true) {
  case score >= 90 && score <= 100:
    console.log("A");
    break;
  case score >= 80 && score <= 89:
    console.log("B");
    break;
  default:
    console.log("C");
}
