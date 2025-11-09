//for loop to print name 5 times
const Fname = "Ronak";
for (let i = 0; i <= 5; i++) {
    console.log(Fname);
}

let sum = 0;
for (let i= 1; i <= 5; i++) { 
    sum = sum + i; //0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15
}
console.log("The sum is: " + sum);
//infinite loop
// for (let i = 1; i >=0; i++) {
//    console.log(i);
//  }    Don't try this in your system

//while loop to print numbers from 1 to 5
let num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}
//do while loop to print numbers from 1 to 5
let i= 1;
do {
    console.log("Ronak" );
    i++;
} while (i <= 5);
//The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the statement being executed at least once.

//example of do while loop that runs only once
let j = 5;  // Starting at 5
do {
    console.log("Subedi");
    j++;  // j becomes 6
} while (j <= 5);  // 6 <= 5 is false, so loop stops

//for of loop
let colors = ["Red", "Green", "Blue", "Yellow"];
for (let color of colors) {
    console.log(color);
}
let str = "Ronak Subedi";
for (let i of str){
    console.log(i);
}

//for in loop
let person = {
    firstName: "Ronak",
    lastName: "Subedi",
    age: 24
};
for (let key in person) {
    //  console.log(key );  //prints only keys
    console.log(key + ": " + person[key]); //prints key with value
}