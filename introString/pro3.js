// Write a JavaScript function that takes a string
// as input and returns the same string with the first
//  letter converted to uppercase. For example, if the input is "hello",
// the function should return "Hello".

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalizeFirstLetter("hello"))