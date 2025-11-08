function myFunction() {
  console.log("Hello, World!");
  console.log("This is a sample function.");
}
myFunction();
function greet(name) {
  console.log("Hello "+ name + "!");
}
greet("Ronak");
function sum(x, y) {
  console.log(x + y);
}
sum(10, 20);

function multiply(a, b) {
    //local variable
    m = a * b;
    return m;   
}
let result = multiply(5, 4);
console.log("Multiplication Result: " + result);

//Arrow Function
const divide = (x, y) => {
    console.log ('Division Result: ' + x * y);
    return x / y;

}
let divisionResult = divide(2, 4);
console.log("Division Result: " + divisionResult);