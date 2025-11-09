let n = prompt("Enter number:");
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i ;
}
document.getElementById("output").innerText = "Array: " + arr;

let sum = arr.reduce((result, currentValue) => {
    return result + currentValue;
});
document.getElementById("output1").innerText = "Sum of array elements: " + sum; 
let mul = arr.reduce((result, currentValue) => {
    return result * currentValue;
});
document.getElementById("output2").innerText = "Multiplication of array elements: " + mul;