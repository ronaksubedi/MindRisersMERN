// // //variables
// const name = "hari";
// const type = " good boy";

// console.log(name + " " + "is a" + type);

// // //JavaScript String Methods
// let personName = "Jhon Doe"; //string variable
// console.log(personName.toUpperCase()); //converts to uppercase
// console.log(personName.toLowerCase()); //converts to lowercase

// let carName = "ABCDEFGHIJKL"; //String inside double quotes
// console.log(carName.length); //length of the string
// let fruitName = "Banana"; //String inside single quotes
// console.log(fruitName.charCodeAt(1)); //returns the Unicode of the character at a specified index (0 in this case)
// let cityName = `New York`; //String inside backticks
// console.log(cityName.codePointAt(0)); //returns the Unicode of the character at a specified index (0 in this case)

// let text = 'We are the so called "Vikings" from the north.'; //Using escape character to include double quotes inside double quotes
// console.log(text.concat(" ", personName)); //String concatenation using template literals
// let text1 = "Hello World! 'I'm Ronak Subedi'"; //we can use single quote inside double quotes
// console.log(text1.at(7)); //returns the character at a specified index (7 in this case)
// let text2 = 'Hello World! "I\'m Ronak Subedi"      '; //we can use double quote inside single quotes by using escape character
// console.log(text2[7]); //returns the character at a specified index (7 in this case)
// let text3 = 'He is called "Johnny"'; //we can use double quotes inside single quotes without escape character
// console.log(text3.slice(0, 5)); //extracts a part of a string and returns it as a new string
// let text4 = 'Hello World! "I\'m Ronak Subedi"'; //Using escape character
// console.log(text4.substring(0, 5)); //extracts a part of a string and returns it as a new string
// let text5 = `I'm called "Ronak"`; //we can use both single and double quotes inside backticks without escape character
// console.log(text5.substr(0, 5)); //extracts a part of a string and returns it as a new string
// let length = text5.length; //length of the string
// console.log(text.isWellFormed()); //checks if the string is well-formed
// console.log(text2.isWellFormed());
// console.log(text2.toWellFormed()); //undefined - numbers don't have isWellFormed
// console.log("Original: '" + text2 + "'");
// console.log("trim(): '" + text2.trim() + "'"); // Removes all end spaces
// console.log("trimStart(): '" + text2.trimStart() + "'"); // No change (no start spaces)
// console.log("trimEnd(): '" + text2.trimEnd() + "'"); // Removes end spaces

// let word = "Cat"; // 3 characters

// console.log("Original: '" + word + "'"); // 'Cat'
// console.log("padStart: '" + word.padStart(6) + "'"); // '   Cat'  (3 spaces + Cat)
// console.log("padEnd:   '" + word.padEnd(6) + "'"); // 'Cat   '  (Cat + 3 spaces)

// console.log(word.repeat(3)); // 'CatCatCat' - repeats the string 3 times
// console.log(word.replace("Cat", "Dog")); // 'Dog' - replaces 'Cat' with 'Dog'
// console.log(word.replaceAll("a", "o")); // 'Cot' - replaces all 'a' with 'o'
// console.log(word.split("")); // ['C', 'a', 't'] - splits the string into an array of characters
// console.log(word.includes("a")); // true - checks if 'a' is in the string
// console.log(word.startsWith("C")); // true - checks if the string starts with 'C'
// console.log(word.endsWith("t")); // true - checks if the string ends with 't'
// console.log(word.endsWith("a")); // false - checks if the string ends with 'a'

// let firstName = "Hari";
// console.log(firstName.slice(2, 4));
// console.log(firstName.substring(1, 3));

// Given const name = "Asha", age = 27; build a template string that produces:
// Asha is 27 years old.
// const firstName = "Asha";
// const age = 27;
// const message = `${firstName} is ${age} years old.`;
// console.log(message);

// // Using const x = 5, y = 3; craft a template string that shows:
// // 5 + 3 = 8
// const x = 5;
// const y = 3;
// const sumMessage = `${x} + ${y} = ${x + y}`;
// console.log(sumMessage);

// // Write a program that produces this output by using all of them:

// // The temperature is 20C
// // 2 plus 2 makes 4
// // I like pizza and pasta

// const temperature = 20;
// const value = 2;
// const pizza = "pizza";
// const pasta = "pasta";

// console.log(`The temperature is ${temperature}C`);
// console.log(`${value} plus ${value} makes ${value + value}`);
// console.log(`I like ${pizza} and ${pasta}`);

// // // JavaScript Numbers
// const price = "1000"; //convert string as a number
// //number functions conversion
// const Num = Number(price); //Call the the string argument to a number using Number() function
// console.log(Num + Num); //output: 1000

// const price = 1000; //convert string as a number
// //number functions conversion
// const Num = Number.isFinite(price); //Call the the string argument to a number using Number() function
// console.log(Num); //output: 1000

const price = "1000"; //convert string as a number
//number functions conversion
const Num = Number.isNaN(price); //Call the the string argument to a number using Number() function
console.log(Num); //output: 1000
