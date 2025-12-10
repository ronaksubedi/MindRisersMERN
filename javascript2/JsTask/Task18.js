//Remove duplicate characters from a string using string methods only.
let str =
  "Remove duplicate characters from a string using string methods only.";
const removeDubli = [...new Set(str)].join(" ");
console.log(removeDubli);
