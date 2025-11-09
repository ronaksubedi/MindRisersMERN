let age = 16;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
// if (age < 18) {
//     console.log("You are not eligible to vote.");
// }
 else {
    console.log("You are still not allowed to vote.");
}
//check even odd
let number = 10;
if (number % 2 === 0) {
    console.log(number , " is an even number.");
} else {
    console.log(number , " is an odd number.");
}

//else if statement
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B+");
} else if (marks >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

//ternary operator
let Age = 20;
let result = (Age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
console.log(result);

//switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;  
    default:
        console.log("Invalid day");
        break;
}   