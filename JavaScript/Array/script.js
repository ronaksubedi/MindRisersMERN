//Array is collection of items stored at contiguous memory locations.
//It can store multiple values in a single variable.

//Creating an array
let fruits = ['Apple', 'Banana', 'Orange'];
console.log('before',fruits);
console.log("Type of fruits:", typeof fruits); //object
console.log("Is fruits an array?", Array.isArray(fruits)); //true
console.log("Number of fruits:", fruits.length); //3
console.log("First fruit:", fruits[2]); //Apple
fruits[2]='mango';
console.log('after', fruits); 
//loop through array
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
for(let fruit of fruits){
    console.log(fruit);
}
let i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}
let j = 0;
do {
    console.log(fruits[j]);
    j++;
} while (j < fruits.length);