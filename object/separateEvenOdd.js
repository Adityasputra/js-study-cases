import { validateNumberArray } from "./helpers/validateArray.js";

/**
 * Separates an array of numbers into even and odd groups.
 *
 * @param {number[]} arr - The array of numbers to be separated.
 * @returns {{ even: number[], odd: number[] }} An object containing two arrays: one for even numbers and one for odd numbers.
 */
function separateEvenOdd(arr) {
  validateNumberArray(arr);

  const result = {
    even: [],
    odd: [],
  };

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num % 2 === 0) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    }
  }

  return result;
}

/**
 * Separates numbers into even and odd using reduce().
 *
 * @param {number[]} arr - The array of numbers.
 * @returns {{ even: number[], odd: number[] }} Object with even and odd arrays.
 */
function separateEvenOddWithReduce(arr) {
  validateNumberArray(arr);

  return arr.reduce(
    (result, num) => {
      if (num % 2 === 0) {
        result.even.push(num);
      } else {
        result.odd.push(num);
      }
      return result;
    },
    { even: [], odd: [] }
  );
}

/**
 * Separates numbers into even and odd using forEach().
 *
 * @param {number[]} arr - The array of numbers.
 * @returns {{ even: number[], odd: number[] }} Object with even and odd arrays.
 */
function separateEvenOddWithForEach(arr) {
  validateNumberArray(arr);

  const result = {
    even: [],
    odd: [],
  };

  arr.forEach((num) => {
    if (num % 2 === 0) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    }
  });

  return result;
}

// Example usage:
console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(separateEvenOddWithReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(separateEvenOddWithForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// Output: { even: [ 2, 4, 6, 8, 10 ], odd: [ 1, 3, 5, 7, 9 ] }

console.log(separateEvenOdd([1, 3, 5]));
console.log(separateEvenOddWithReduce([1, 3, 5]));
console.log(separateEvenOddWithForEach([1, 3, 5]));
// Output: { even: [], odd: [ 1, 3, 5 ] }
