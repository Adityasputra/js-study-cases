import { validate2DStringArray } from "./helpers/validateArray.js";

/**
 * Groups student names by their department from a 2D array.
 *
 * @param {string[][]} arr - A 2D array where each sub-array contains [department, studentName].
 * @returns {{ [department: string]: string[] }} An object mapping departments to lists of student names.
 */
function groupByDepartment(arr) {
  validate2DStringArray(arr);

  const result = {};

  for (const [department, student] of arr) {
    if (!result[department]) {
      result[department] = [];
    }
    result[department].push(student);
  }

  return result;
}

/**
 * Groups student names by their department from a 2D array.
 *
 * @param {string[][]} arr - A 2D array where each sub-array contains [department, studentName].
 * @returns {{ [department: string]: string[] }} An object mapping departments to lists of student names.
 */
function groupByDepartmentWithReduce(arr) {
  validate2DStringArray(arr);

  return arr.reduce((result, [department, student]) => {
    if (!result[department]) {
      result[department] = [];
    }
    result[department].push(student);
    return result;
  }, {});
}

const data_array = [
  ["Biologi", "Jonas"],
  ["Fisika", "Ulrich"],
  ["Akuntansi", "Hannah"],
  ["Biologi", "Barbosz"],
  ["Fisika", "Claudia"],
  ["Biologi", "Edmund"],
];

console.log(groupByDepartment(data_array));
console.log(groupByDepartmentWithReduce(data_array));

/*
Output:
{
  Biologi: ['Jonas', 'Barbosz', 'Edmund'],
  Fisika: ['Ulrich', 'Claudia'],
  Akuntansi: ['Hannah']
}
*/
