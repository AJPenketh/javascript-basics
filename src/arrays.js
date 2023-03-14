const getNthElement = (index, array) => {
  // your code here
  return array[index % array.length];
};

const arrayToCSVString = array => {
  // your code here
  return array.toString();
};

const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  // your code here
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.toString().split(',');
};

const uppercaseWordsInArray = strings => {
  // your code here
  const toUpperCase = strings.map(element => element.toUpperCase());
  return toUpperCase;
};

const reverseWordsInArray = strings => {
  // your code here
  const reverseWords =  strings.map(element => element.split('').reverse().join(''));
  return reverseWords;
};

const onlyEven = numbers => {
  // your code here
  const evenNumbers = numbers.filter(number => number % 2 == 0);
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  // your code here
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
