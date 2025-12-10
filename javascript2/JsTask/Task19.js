// Given three numbers, use only logical and comparison operators to find the largest number.
// (Do not use loops or built-in functions.)
let a = 3;
let b = 4;
let c = 5;
largestNum = a >= b && a >= c ? a : b >= a && b >= c ? b : c;
console.log(`The Largest number is ${largestNum}`);

// Check if a number is positive, negative, or zero using only conditional (ternary) operator.
let num = 5;
const check =
  num > 0 ? "Positive Number" : num < 0 ? "Negative Number" : "zero";
console.log(`${num} is ${check}`);

// Using only arithmetic operators, calculate the total salary after adding bonus (20%) and deducting tax (10%).
let salary = 2000;
let totalSalary = salary + salary * 0.2 - salary * 0.1;
console.log(`Final salary is ${totalSalary}`);

// Swap two variables without using a third variable and without using built-in functions. Use only arithmetic operators.
let x = 5;
let y = 10;
[x, y] = [y, x];
console.log(`Direct swap. X=${x} and y=${y}`); //direct swap.
//swap
x = x + y; //5+10=15
y = x - y; //15 - 10= 5
x = y + y; //5+5=10

console.log(`Now Value of x is ${x} and y is ${y}`); //Question has mention to use arthemtic operators

// Use only logical operators to check if a person can vote: age must be ≥ 18 and nationality must be 'Nepali'.

let age = 20;
let vote = age >= 18 ? "Person can Vote" : "Person cannot Vote";
console.log(vote);

// Using the ternary operator, categorize a student's grade:
// A (≥90), B (≥75), C (≥60), D (≥45), F (<45).

let grade = 65;

let category =
  grade >= 90
    ? "A"
    : grade >= 75
    ? "B"
    : grade >= 60
    ? "C"
    : grade >= 45
    ? "D"
    : "F";
console.log(`Student score ${category} grade`);

// Given a number, use bitwise operators to check if it’s even or odd.
let number = 5;
const result = num % 2 === 0 ? "even" : "odd";
console.log(result);

// Using logical operators only, check if three sides form a valid triangle.
let p = 3;
let q = 4;
let r = 5;

let isValidTriangle =
  p + q > r && p + r > q && q + r > p
    ? "Is valid Trangle"
    : "Is Invalid Trangle";
console.log(isValidTriangle);

// Use only comparison and logical operators to check if a year is a leap year.
let year = 2024;
let isLeap =
  year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    ? "Leap Year"
    : "Not a Leap Year";
console.log(`${year} is ${isLeap}`);

// Using arithmetic operators only, extract the last digit of a number and the first digit of a number (no loops).
