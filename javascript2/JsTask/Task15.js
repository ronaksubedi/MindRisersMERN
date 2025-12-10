//Write a program to count how many times each vowel (a, e, i, o, u) appears in a given string. Use only string methods.
let str =
  "This is a string to count vowel letter appears in a given string using string method only.";
const vowelA = str.split("a").length - 1;
const vowelE = str.split("e").length - 1;
const vowelI = str.split("i").length - 1;
const vowelO = str.split("o").length - 1;
const vowelU = str.split("u").length - 1;
console.log(`Vowel repeat in the string is ${vowelA} times.`);
console.log(`Vowel repeat in the string is ${vowelE} times.`);
console.log(`Vowel repeat in the string is ${vowelI} times.`);
console.log(`Vowel repeat in the string is ${vowelO} times.`);
console.log(`Vowel repeat in the string is ${vowelU} times.`);
