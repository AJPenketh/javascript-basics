function negate(a) {
  // your code here
  return !a;
};

function both(a, b) {
  // your code here
  return a && b;
};

function either(a, b) {
  // your code here
  return a || b;
};

function none(a, b) {
  // your code here
  return !(a || b);
};

function one(a, b) {
  // your code here
  return a === !b;
};

function truthiness(a) {
  // your code here
  return !!a;
};

function isEqual(a, b) {
  // your code here
  return a === b;
};

function isGreaterThan(a, b) {
  // your code here
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  return a <= b;
};

function isOdd(a) {
  // your code here
  if (a % 2 == 0) {
    return false
  } else {
    return true
  }
};

function isEven(a) {
  // your code here
  if (a % 2 == 0) {
    return true
  } else {
    return false
  }
};

function isSquare(a) {
  // your code here
  return Math.sqrt(a) % 1 == 0
};

function startsWith(char, string) {
  // your code here
  return char == string.charAt(0);
};

function containsVowels(string) {
  // your code here
  return /[aeiou]/i.test(string);
};

function isLowerCase(string) {
  // your code here
  return string == string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
