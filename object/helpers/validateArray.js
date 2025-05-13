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

export function validate2DStringArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be a 2D array");
  }

  for (const item of arr) {
    if (
      !Array.isArray(item) ||
      item.length !== 2 ||
      !item.every((el) => typeof el === "string")
    ) {
      throw new TypeError("Each item must be an array of exactly two strings");
    }
  }
}

export function validate2DStringNumberArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be a 2D array.");
  }

  for (const item of arr) {
    if (
      !Array.isArray(item) ||
      item.length !== 2 ||
      typeof item[0] !== "string" ||
      typeof item[1] !== "number"
    ) {
      throw new TypeError("Each item must be [string, number]");
    }
  }
}
