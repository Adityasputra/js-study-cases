let length = process.argv[2];
let width = process.argv[3];

if (length === undefined || width === undefined) {
  console.log("Please provide both length and width of the rectangle.");
  console.log("Usage: node calculateRectangle.js <length> <width>");
  process.exit(1);
}

length = Number(length);
width = Number(width);

const area = length * width;
const perimeter = 2 * (length + width);

console.log("Area of the rectangle: " + area);
console.log("Perimeter of the rectangle: " + perimeter);
