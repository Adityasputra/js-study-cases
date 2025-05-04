let dataType = "Hello, World!";

const typeOfData = typeof dataType;
console.log("The type of dataType is: " + typeOfData);

// Check the type of dataType and print a message accordingly
if (typeof dataType === "string") {
  console.log("dataType is a string");
} else if (typeof dataType === "number") {
  console.log("dataType is a number");
} else if (typeof dataType === "boolean") {
  console.log("dataType is a boolean");
} else if (typeof dataType === "object") {
  console.log("dataType is an object");
} else if (typeof dataType === "function") {
  console.log("dataType is a function");
} else {
  console.log("Unknown data type");
}
