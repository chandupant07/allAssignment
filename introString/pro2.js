// Write a JavaScript function that takes a string as input
// and returns the number of vowels in the string.
// For example, if the input is "hello", the function should return 2.

function checkVowels(str) {
  const vowelRegex = /[aeiou]/gi;
  const strMatch = str.match(vowelRegex);
  if (strMatch) {
    return strMatch.length;
  } else {
    return 0;
  }
}
const string = "hello";
const len = checkVowels(string);
console.log("voewl", len);