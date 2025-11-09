let str = "Hello, World!"; //create a string
console.log(str.length); //output the length of the string
console.log(str[7]); //output the character at index 7
console.log(str.toUpperCase()); //convert the string to uppercase
console.log(str.toLowerCase()); //convert the string to lowercase
console.log(str.indexOf("World")); //find the index of the substring "World"
console.log(str.slice(5, 13)); //extract a substring from index 5 to 13
console.log(str.replace("World", "JavaScript")); //replace "World" with "JavaScript"
console.log(str.split(", ")); //split the string into an array using ", " as the separator
console.log(str.includes("Hello")); //check if the string includes "Hello"
console.log(str.trim()); //remove whitespace from both ends of the string
console.log(str.concat(" Welcome to JavaScript.")); //concatenate another string
console.log(str.repeat(2)); //repeat the string twice
console.log(str.charAt(5)); //get the character at index 4
console.log(str.startsWith("Hello")); //check if the string starts with "Hello"
console.log(str.endsWith("!")); //check if the string ends with "!"
console.log(str.slice(0, 5)); //extract a substring from index 0 to 5
console.log(str.substr(7, 5)); //extract a substring starting from index 7 with length 5
// //Template Literals
let Fullname = "Ronak Subedi";
let age = 24;
let greeting = `Hello, my name is ${Fullname} and I am ${age} years old.`; //Template Literals 
console.log(greeting);
let multiLine = `This is a string
that spans multiple
lines.`;
console.log(multiLine); //Multi-line string using Template Literals
let sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}.`; //Function using Template Literals
console.log(sum(5, 10)); //Output the sum using the function

//escape sequences characters
let escapeStr = "\n\nHe said, \"Hello!\"\n\nWelcome to JavaScript.\t\tLet's learn together.";
console.log(escapeStr); //Output the string with escape sequences