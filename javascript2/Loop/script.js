/*
primitive types
string
number
boolean
null
undefined
----------------------------
reference types
array
object
function
*/

// const persons = ["ram", "shyam", "hari"];
// forEach, map, find, filter, reduce

// let i = 0;
// let sum = 0;
// while (i < 10) {
//   i++;
//   const value = i + i;
//   sum += value;
//   console.log(sum);
// }
// let i = 0;

// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(i); // even number
//   }
//   i++;
// }
// let i = 0;

// while (i <= 10) {
//   if (i % 2 !== 0) {
//     console.log(i); // Odd Number
//   }
//   i++;
// }

// let i = 0;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }
// 1. Basic FizzBuzz (1-100)
// console.log("FizzBuzz");
// for (let i = 1; i <= 15; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // 2. FizzBuzz with custom words
// console.log("\n=== Custom FizzBuzz ===");
// for (let i = 1; i <= 30; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // 3. FizzBuzz function
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     let result = "";
//     if (i % 3 === 0) result += "Fizz";
//     if (i % 5 === 0) result += "Buzz";
//     console.log(result || i);
//   }
// }

// console.log("\n=== Function FizzBuzz ===");
// fizzBuzz(20);
// Simple function to add two numbers
// function addTwoNumbers(a, b) {
//   return a + b;
// }
// const result = addTwoNumbers(5, 3);
// console.log(result);
// function sumArrayNumbers(numbers) {
//   let count = 0;
//   let sum = 0;

//   for (const num of numbers) {
//     count++;
//     sum += num;
//   }

//   return {
//     totalSum: sum,
//   };
// }
// function sumArrayNumbers(numbers) {
//   let total = 0;
//   for (const num of numbers) {
//     total += num;
//   }
//   return total;
// }

// const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = [10, 20, 30, 40];
// console.log(sumArrayNumbers(numbers1));
// console.log(sumArrayNumbers(numbers2));
// Function that takes a number and callback to check even/odd
// function checkNumber(num, callback) {
//   return callback(num);
// }

// const isEven = (num) => {
//   return num % 2 === 0 ? `${num} is even` : `${num} is odd`;
// };

// const isOdd = (num) => {
//   return num % 2 !== 0 ? `${num} is odd` : `${num} is even`;
// };

// console.log("Even/Odd Checker");
// console.log(checkNumber(8, isEven));
// console.log(checkNumber(7, isEven));

// function calculate(a, b, callback) {
//   return callback(a, b);
// }

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

// const safeAdd = (a, b) => {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Error: Both parameters must be numbers";
//   }
//   return a + b;
// };

// const percentage = (a, b) => `${a} is ${((a / b) * 100).toFixed(2)}% of ${b}`;

// console.log(" Calculator with Callbacks ");
// console.log(calculate(10, 5, add));
// console.log(calculate(10, 5, subtract));
// console.log(calculate(10, 5, multiply));
// console.log(calculate(10, 5, divide));
// console.log(calculate(25, 100, percentage));

// function transformString(str, callback) {
//   return callback(str);
// }

// const toUpperCase = (str) => str.toUpperCase();

// console.log("String Transformer");
// console.log(transformString("hello world", toUpperCase));
// const persons = ["ram", "shyam", "hari"];
// const numbers = [11, 22, 33, 44, 55, 66, 77];

// let total = 0;
// numbers.forEach((num, i) => {
//   total += num;
//   console.log(`Index ${i}: Adding ${num}, Running total: ${total}`);
// });

// console.log("Final total:", total);

// const numbers = [11, 22, 33, 44, 55, 66, 77];

// const nN = numbers.map((n, i) => {
//   if (n === 77) {
//     return 100;
//   } else {
//     return n;
//   }
// });
// console.log(nN);

const numbers = [11, 22, 55, 33];

const max = numbers.reduce((a, b) => {
  return a > b ? a : b;
});
const min = numbers.reduce((a, b) => {
  return a < b ? a : b;
});

console.log("Max value:", max);
console.log("Min value:", min);
