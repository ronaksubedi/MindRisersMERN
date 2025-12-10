// Reverse each word in a sentence (but keep the word order same) using only string methods.
let str = "Reverse each word in a sentence";
// let word = str.split(" ");
const reverse = str
  .split(" ")
  .map((word) => word.split("").reverse().join(""))
  .join(" ");
console.log(reverse);
