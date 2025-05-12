import { validateStringArray } from "./helpers/validateArray.js";

/**
 * Groups an array of strings by their first uppercase letter.
 *
 * @param {string[]} param - The array of strings to group.
 * @returns {{ [letter: string]: string[] }} An object where each key is the first letter, and the value is an array of strings starting with that letter.
 */
function groupByFirstLetter(param) {
  validateStringArray(param);

  const result = {};

  for (let item of param) {
    const key = item[0].toUpperCase();
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }

  return result;
}

/**
 * Groups an array of strings by their first uppercase letter.
 *
 * @param {string[]} param - The array of strings to group.
 * @returns {{ [letter: string]: string[] }} An object where each key is the first letter, and the value is an array of strings starting with that letter.
 */
function groupByFirstLetterWithReduce(param) {
  validateStringArray(param);

  return param.reduce((result, item) => {
    const key = item[0].toUpperCase();
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
}

console.log(
  groupByFirstLetter([
    "Ayam",
    "Kucing",
    "Bebek",
    "Sapi",
    "Babi",
    "Curut",
    "Cacing",
    "Monyet",
  ])
);
console.log(
  groupByFirstLetterWithReduce([
    "Ayam",
    "Kucing",
    "Bebek",
    "Sapi",
    "Babi",
    "Curut",
    "Cacing",
    "Monyet",
  ])
);
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(
  groupByFirstLetter([
    "Anjing",
    "Kuda",
    "Anoa",
    "Zebra",
    "Lipan",
    "Kudanil",
    "Landak",
  ])
);
console.log(
  groupByFirstLetterWithReduce([
    "Anjing",
    "Kuda",
    "Anoa",
    "Zebra",
    "Lipan",
    "Kudanil",
    "Landak",
  ])
);
/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/
