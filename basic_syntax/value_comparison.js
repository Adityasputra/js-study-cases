let a = 10
let b = 20

const isEqual = a == b
const isNotEqual = a != b
const isStrictEqual = a === b
const isStrictNotEqual = a !== b
const isGreaterThan = a > b
const isLessThan = a < b
const isGreaterThanOrEqual = a >= b
const isLessThanOrEqual = a <= b
const isAnd = a > 5 && b < 30
const isOr = a > 5 || b < 10
const isNot = !(a > 5)

console.log("isEqual: " + isEqual)
console.log("isNotEqual: " + isNotEqual)
console.log("isStrictEqual: " + isStrictEqual)
console.log("isStrictNotEqual: " + isStrictNotEqual)
console.log("isGreaterThan: " + isGreaterThan)
console.log("isLessThan: " + isLessThan)
console.log("isGreaterThanOrEqual: " + isGreaterThanOrEqual)
console.log("isLessThanOrEqual: " + isLessThanOrEqual)
console.log("isAnd: " + isAnd)
console.log("isOr: " + isOr)
console.log("isNot: " + isNot)