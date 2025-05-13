import { validate2DStringNumberArray } from "./helpers/validateArray.js";

/**
 * Groups names by age into two categories: under 20 and over (or equal to) 20.
 *
 * @param {[string, number][]} arr - A 2D array where each sub-array contains a name and an age.
 * @returns {{ under20: string[], over20: string[] }} An object with two properties:
 *          'under20' for names with age less than 20, and 'over20' for names with age 20 or more.
 */
function groupByAge(arr) {
  validate2DStringNumberArray(arr);

  const result = {
    under20: [],
    over20: [],
  };

  for (const [name, age] of arr) {
    if (age < 20) {
      result.under20.push(name);
    } else {
      result.over20.push(name);
    }
  }

  return result;
}

/**
 * Groups names by age into two categories: under 20 and over (or equal to) 20 using reduce.
 *
 * @param {[string, number][]} arr - A 2D array where each sub-array contains a name and an age.
 * @returns {{ under20: string[], over20: string[] }} An object with two properties:
 *          'under20' for names with age less than 20, and 'over20' for names with age 20 or more.
 */
function groupByAgeWithReduce(arr) {
  validate2DStringNumberArray(arr);

  return arr.reduce(
    (result, [name, age]) => {
      if (age < 20) {
        result.under20.push(name);
      } else {
        result.over20.push(name);
      }
      return result;
    },
    { under20: [], over20: [] }
  );
}

const data = [
  ["Netral", 17],
  ["Uishl", 28],
  ["Rekts", 30],
  ["Dests", 18],
  ["Retna", 19],
];

console.log(groupByAge(data));
console.log(groupByAgeWithReduce(data));

/*
{
  under20: ['dimas', 'dimitri', 'saitama'],
  over20: ['akbar', 'rifki']
}
*/
