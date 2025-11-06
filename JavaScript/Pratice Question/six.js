// Guess the number game
let gameNum =25;
let userGuess = prompt("Guess a number between 1 and 100");
// if(userGuess < gameNum){
//     document.querySelector("#output").innerHTML="Your guess is too low";
// }else if (userGuess > gameNum){
//     document.querySelector("#output").innerHTML="Your guess is too high";
// }else{
//     document.querySelector("#output").innerHTML="Congratulations! You guessed it right.";
// }
while(gameNum != userGuess){
    userGuess = prompt("Sorry! Guess a number between 1 and 100  again");
}console.log("Congratulations! You guessed it right.");
document.querySelector("#output").innerHTML = "🎉 Congratulations! You guessed it right!";