let number = prompt("Enter a number to check multiple of 5 or not:");

if (isNaN(number)) {
    console.log("Please enter a valid number.");
    document.querySelector("#result").innerText = "Please enter a valid number.";
}
else if (number % 5 === 0) {
    console.log(number + " is a multiple of 5.");
    document.querySelector("#result").innerText = number + " is a multiple of 5.";
} else {
    console.log(number + " is not a multiple of 5.");
    document.querySelector("#result").innerText = number + " is not a multiple of 5.";
};