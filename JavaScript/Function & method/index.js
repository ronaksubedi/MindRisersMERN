//cal back function for each 
//higher order function is a function that takes a function as a parameter or returns a function

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log("Number: " + number*number);
});

//map method
let Numbers = numbers.map(function(number) {
    return number**2;
});
console.log(Numbers);

//filter method
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers);   

//reduce method
const sum = numbers.reduce((result, currentValue) => {
   return result > currentValue ? result : currentValue;
    // return result + currentValue; //result updates with each iteration
});
console.log("Sum: " + sum);
