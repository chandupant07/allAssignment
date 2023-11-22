// Write a JavaScript code to remove extra spaces in the string,
// from starting, ending and even in between the string,
// print the result with one space in between words.

let str = '  JS trim  ';
let result = str.trim();

console.log(result);

const str2 = '   JavaScript   ';
const result2 = str.trimStart();

console.log({ str2 });
console.log({ result2 });


const str3 = '   JavaScript   ';
const result3 = str.trimEnd();

console.log({ str3 });
console.log({ result3 });