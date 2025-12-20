// Write a function countVowels(str) that returns how many vowels (a, e, i, o, u) are in a string.
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
      console.log(`The vowels are ${letter}`);
    }
  }
  return count;
}
console.log(
  countVowels("The world is the worst place to live in the current time.")
);

// Given a string, return the same string but reversed using a loop
function reversedStr(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    if (i > 0) reversed += "";
  }
  return reversed;
}
console.log(reversedStr("Reversed this sentence"));

// Write a function capitalizeWords(str) that converts the first letter of every word to uppercase.
function capitalizeWords(str) {
  return str
    .split(" ") // split into words
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + // first letter uppercase
        word.slice(1) // rest of the word unchanged
    )
    .join(" ");
}
console.log(capitalizeWords("hey! this is to check if this function work."));

// Given an array of numbers, return a new array with only even numbers using filter.
let arr = [11, 20, 30, 40, 55, 60, 70, 80, 90, 100];
let even = arr.filter((num) => num % 2 === 0);
console.log(even);

// Given an array of user objects { name, age }, return an array of names of users older than 18.

const users = [
  {
    fullName: "Ronak Subedi",
    age: 24,
  },
  {
    fullName: "Jhon Doe",
    age: 17,
  },
  {
    fullName: "Rojaswee Subedi",
    age: 28,
  },
  {
    fullName: "Hari Nirioula",
    age: 14,
  },
  {
    fullName: "Random Name",
    age: 24,
  },
];
const usersAbove18 = users.filter((user) => user.age > 18);

console.log(usersAbove18);

//Add a method introduce() to a person object that logs "Hi, I am <name>".
const person = {
  Fname: "Ronak Subedi",
  age: 24,
  study: "BIT",
  introduce: function () {
    console.log(`Hi, I am ${this.Fname}. My Age is ${this.age}.`);
  },
};
person.introduce();
console.log(`Hi, I am ${person.Fname}. My Age is ${person.age}.`);

// Write a function checkNumber(n) that logs "positive", "negative", or "zero" using if / else if / else.
function checkNumber(n) {
  if (n > 0) {
    console.log("Positive Number");
  } else if (n < 0) {
    console.log("Negative Number");
  } else {
    console.log("Zero");
  }
}
checkNumber(10);

// Create a function that takes a score and returns "A", "B", "C", "D", or "F" based on ranges using if...else if.
function grade(n) {
  if (n >= 90) {
    console.log("A");
  } else if (n >= 80) {
  }
}
