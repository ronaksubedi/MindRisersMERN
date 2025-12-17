// // IFelse
// let age = 20;
// // const check = age < 20 ? "Junior" : age > 50 ? "Senior" : "regular";
// // console.log(check);
// if (age < 20) {
//   console.log("Junior");
// }
// if (age > 50) {
//   console.log("Senior");
// } else {
//   console.log("Regular");
// }

// Define two integer variables called netSalary and expenses.

// Then write a program that prints different sentences depending on these conditions:

// if netSalary > expenses
//     You have saved $(netSalary - expenses) this month
// otherwise if expenses > netSalary
//     You have lost $(expenses - netSalary) this month
// otherwise
//     Your balance hasn't changed

// Then verify that the program works correctly for different values of netSalary and expenses.

// let netSalary = 2200000;
// let expenses = 400000;
// if (netSalary > expenses) {
//   console.log(`You have saved ${netSalary - expenses} this month`);
// }
// if (expenses > netSalary) {
//   console.log(`You have lost ${expenses - netSalary} this month`);
// } else {
//   console.log(` Your balance hasn't changed`);
// }

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

// const age = '';

// if (age) {
//   console.log("condition is true");
// } else {
//   console.log("condition is false");
// }

const a = 900;
const b = 1000;
const calc = "add";

switch (calc) {
  case "add":
    console.log(a + b);
    break;

  case "sub":
    console.log(a - b);
    break;
  case "div":
    console.log(a / b);
    break;

  case "multi":
    console.log(a * b);
    break;
  default:
    console.log("Enter a value");
}
