// Write a JavaScript function that takes a string as 
//  input and returns the reverse of the string.
//   For example, if the input is "hello", the function should return "olleh".


function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"))

