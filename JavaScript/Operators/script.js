//Arthemetic Operators
let a = 5;
let b = 2;

console.log("a+b =", a + b); // Addition
console.log("a-b =", a - b); // Subtraction
console.log("a*b =", a * b); // Multiplication
console.log("a/b =", a / b); // Division
console.log("a%b =", a % b); // Modulus (remainder)
console.log("a**b =", a ** b); // Exponentiation (10 to the power of 5) 10^5

//Unary Operators
let c = 10;
console.log("c++ =", c++); // Post-increment This will return 10 first and then increment
console.log("++c =", ++c); // Pre-increment This will increment first and then return 12 
console.log("c-- =", c--); // Post-decrement This will return 12 first and then decrement
console.log("--c =", --c); // Pre-decrement This will decrement first and then return 11

a = a+1;
console.log (a);    

//Assignment Operators
let x = 10;
x += 5; // x = x + 5 10 + 5 = 15
console.log("x += 5 :", x);
x -= 3; // x = x - 3 15 - 3 = 12
console.log("x -= 3 :", x);
x *= 2; // x = x * 2 12 * 2 = 24
console.log("x *= 2 :", x);
x /= 4; // x = x / 4 24 / 4 = 6
console.log("x /= 4 :", x);
x %= 5;
console.log("x %= 5 :", x); // x = x % 5 6 % 5 = 1
x **= 3;
console.log("x **= 3 :", x); // x = x ** 3 1^3 = 1

//Comparison Operators
let p = 10;
let q = '10';
console.log("p == q :", p == q); // Equal to
console.log("p === q :", p === q); // Strict equal to
console.log("p != q :", p != q); // Not equal to
console.log("p !== q :", p !== q); // Strict not equal to
console.log("p > q :", p > q); // Greater than
console.log("p < q :", p < q); // Less than
console.log("p >= q :", p >= q); // Greater than or equal to
console.log("p <= q :", p <= q); // Less than or equal to

//Logical Operators
let isAdult = true;
let hasID = false;
console.log("isAdult && hasID :", isAdult && hasID); // Logical AND 
console.log("isAdult || hasID :", isAdult || hasID); // Logical OR
console.log("!isAdult :", !isAdult); // Logical NOT

let age = 20;
let hasParentalConsent = false;

// Check if the person is eligible to vote
let isEligibleToVote = (age >= 18) || hasParentalConsent;
console.log("Is eligible to vote:", isEligibleToVote); // true
