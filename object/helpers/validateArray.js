export function validateNumberArray(arr) {
  if (!Array.isArray(arr) || !arr.every((num) => typeof num === "number")) {
    throw new TypeError("Input must be an array of numbers");
  }
}

export function validateStringArray(param) {
  if (
    !Array.isArray(param) ||
    !param.every((item) => typeof item === "string")
  ) {
    throw new TypeError("Input must be an array of strings");
  }
}
