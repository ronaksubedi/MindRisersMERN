//declare a variable using let which can be changed
let age = 23;
let fullName = "Ronak Subedi";
let country = "Nepal";

//declared a variable using const which cannot be changed
const birthYear = 2002;

//show info in webpage
document.querySelector("#info").innerHTML = 
`Name: ${fullName} <br> Age: ${age} <br> Country: ${country}
 <br> Birth Year: ${birthYear}`;

//change the value of age variable
age = 24;
document.querySelector("#age").innerHTML = `Updated Age: ${age}`;

//calculate the birth year using current year and age
let currentYear = 2025;
let calculatedBirthYear = currentYear - birthYear;
document.write('<p> Calculated Birth Year: ' + calculatedBirthYear + '</p>');

 // 6️⃣ Swap two numbers using let
    let a = 5;
    let b = 10;
    [a, b] = [b, a];
    document.getElementById("swap").innerHTML = `🔄 After swap: a = ${a}, b = ${b}`;