function countVowels(vowels) {
  let count = 0;
  let foundVowels = [];
  for (const char of vowels) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      count++;
        foundVowels.push(char);
    }

}
console.log(count); 
console.log("Vowels found: " + foundVowels.join(", "));
return foundVowels;
}
countVowels("Hello World");
// console.log(countVowels("HI this is ronak subedi"));

const vowels = (str) => {
 let count = 0;
  let foundVowels2 = [];
  for (const char of str) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      count++;
        foundVowels2.push(char);
    }

}
console.log(count); 
console.log("Vowels found: " + foundVowels2.join(", "));
return count;
}

console.log(vowels("Hello World"));
