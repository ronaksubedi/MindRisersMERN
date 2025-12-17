// Array Methods Practice - Task 20
// Sample arrays for testing
const numbers = [12, 45, 78, 23, 67, 89, 34, 56, 91, 102, -5, -12, 150];
const strings = [
  "hello",
  "world",
  "javascript",
  "array",
  "methods",
  "programming",
];
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("=".repeat(50));
console.log("forEach() TASKS");
console.log("=".repeat(50));

// 1. Print each number multiplied by 2
console.log("\n1. Each number multiplied by 2:");
numbers.forEach((num, index) => {
  console.log(`${index}: ${num} × 2 = ${num * 2}`);
});

// 2. Print only the odd numbers from an array
console.log("\n2. Odd numbers only:");
numbers.forEach((num, index) => {
  if (num % 2 !== 0) {
    console.log(`Index ${index}: ${num} is odd`);
  }
});

// 3. Count how many elements are greater than 50 using forEach
console.log("\n3. Count elements greater than 50:");
let count = 0;
numbers.forEach((num) => {
  if (num > 50) {
    count++;
    console.log(`${num} is greater than 50`);
  }
});
console.log(`Total count: ${count}`);

// 4. Print the index and value of each element
console.log("\n4. Index and value of each element:");
numbers.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});

// 5. Calculate the sum of all numbers using forEach
console.log("\n5. Sum of all numbers:");
let sum = 0;
numbers.forEach((num) => {
  sum += num;
  console.log(`Adding ${num}, Running total: ${sum}`);
});
console.log(`Final sum: ${sum}`);

console.log("\n" + "=".repeat(50));
console.log(" map() TASKS");
console.log("=".repeat(50));

// 1. Create a new array where each number is squared
console.log("\n1. Numbers squared:");
const squared = numbers.map((num) => num * num);
console.log("Original:", numbers.slice(0, 5), "...");
console.log("Squared:", squared.slice(0, 5), "...");

// 2. Convert all strings to uppercase
console.log("\n2. Strings to uppercase:");
const uppercase = strings.map((str) => str.toUpperCase());
console.log("Original:", strings);
console.log("Uppercase:", uppercase);

// 3. Add 10 to each number in the array
console.log("\n3. Add 10 to each number:");
const plus10 = mixedNumbers.map((num) => num + 10);
console.log("Original:", mixedNumbers);
console.log("Plus 10:", plus10);

// 4. Convert an array of numbers to strings
console.log("\n4. Numbers to strings:");
const numberStrings = mixedNumbers.map((num) => num.toString());
console.log("Original:", mixedNumbers);
console.log("As strings:", numberStrings);
console.log("Type check:", typeof numberStrings[0]);

// 5. Replace each number with "even" or "odd"
console.log("\n5. Replace with 'even' or 'odd':");
const evenOdd = mixedNumbers.map((num) => (num % 2 === 0 ? "even" : "odd"));
console.log("Numbers:", mixedNumbers);
console.log("Even/Odd:", evenOdd);

console.log("\n" + "=".repeat(50));
console.log(" find() TASKS");
console.log("=".repeat(50));

// 1. Find the first number greater than 100
console.log("\n1. First number greater than 100:");
const firstGreater100 = numbers.find((num) => num > 100);
console.log(`Found: ${firstGreater100}`);

// 2. Find the first even number
console.log("\n2. First even number:");
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(`Found: ${firstEven}`);

// 3. Find the first negative number
console.log("\n3. First negative number:");
const firstNegative = numbers.find((num) => num < 0);
console.log(`Found: ${firstNegative}`);

// 4. Find the first string longer than 5 characters
console.log("\n4. First string longer than 5 characters:");
const longString = strings.find((str) => str.length > 5);
console.log(`Found: "${longString}" (length: ${longString?.length})`);

// 5. Find the first number divisible by 7
console.log("\n5. First number divisible by 7:");
const divisibleBy7 = numbers.find((num) => num % 7 === 0);
console.log(`Found: ${divisibleBy7}`);

console.log("\n" + "=".repeat(50));
console.log("filter() TASKS");
console.log("=".repeat(50));

// 1. Get all even numbers
console.log("\n1. All even numbers:");
const allEven = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", allEven);

// 2. Get all numbers greater than 50
console.log("\n2. All numbers greater than 50:");
const greater50 = numbers.filter((num) => num > 50);
console.log("Numbers > 50:", greater50);

// 3. Get all negative numbers
console.log("\n3. All negative numbers:");
const negatives = numbers.filter((num) => num < 0);
console.log("Negative numbers:", negatives);

// 4. Get all strings with length more than 4
console.log("\n4. Strings with length > 4:");
const longStrings = strings.filter((str) => str.length > 4);
console.log("Long strings:", longStrings);

// 5. Get all numbers divisible by 3
console.log("\n5. Numbers divisible by 3:");
const divisibleBy3 = numbers.filter((num) => num % 3 === 0);
console.log("Divisible by 3:", divisibleBy3);

console.log("\n" + "=".repeat(50));
console.log("reduce() TASKS");
console.log("=".repeat(50));

// 1. Find the sum of all numbers
console.log("\n1. Sum of all numbers:");
const totalSum = numbers.reduce((acc, curr) => {
  console.log(`${acc} + ${curr} = ${acc + curr}`);
  return acc + curr;
}, 0);
console.log(`Final sum: ${totalSum}`);

// 2. Find the product of all numbers (using smaller array to avoid huge numbers)
console.log("\n2. Product of numbers (1-5):");
const product = mixedNumbers.slice(0, 5).reduce((acc, curr) => {
  console.log(`${acc} × ${curr} = ${acc * curr}`);
  return acc * curr;
}, 1);
console.log(`Final product: ${product}`);

// 3. Find the maximum number
console.log("\n3. Maximum number:");
const maximum = numbers.reduce((max, curr) => {
  const newMax = curr > max ? curr : max;
  console.log(`Comparing ${max} and ${curr}, max is: ${newMax}`);
  return newMax;
});
console.log(`Maximum: ${maximum}`);

// 4. Count how many elements are even
console.log("\n4. Count even elements:");
const evenCount = numbers.reduce((count, curr) => {
  const isEven = curr % 2 === 0;
  if (isEven) {
    console.log(`${curr} is even, count: ${count + 1}`);
    return count + 1;
  }
  return count;
}, 0);
console.log(`Total even numbers: ${evenCount}`);

// 5. Reverse a string using reduce
console.log("\n5. Reverse string using reduce:");
const originalString = "javascript";
const reversed = originalString.split("").reduce((acc, char, index) => {
  const newString = char + acc;
  console.log(`Step ${index + 1}: "${char}" + "${acc}" = "${newString}"`);
  return newString;
}, "");
console.log(`Original: "${originalString}"`);
console.log(`Reversed: "${reversed}"`);

console.log("\n" + "=".repeat(50));
console.log(" SUMMARY");
console.log("=".repeat(50));

console.log("\nArray Methods Summary:");
console.log(`Original array: [${numbers.slice(0, 8).join(", ")}...]`);
console.log(`Total elements: ${numbers.length}`);
console.log(`Sum: ${totalSum}`);
console.log(`Maximum: ${maximum}`);
console.log(
  ` Minimum: ${numbers.reduce((min, curr) => (curr < min ? curr : min))}`
);
console.log(`Even count: ${evenCount}`);
console.log(`Odd count: ${numbers.length - evenCount}`);
console.log(`Positive count: ${numbers.filter((n) => n > 0).length}`);
console.log(` Negative count: ${numbers.filter((n) => n < 0).length}`);

console.log("\nAll tasks completed successfully!");
