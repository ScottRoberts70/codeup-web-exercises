"use strict";
// TODO create a function that uses a loop to get the prompt from the user and ensure it meets the argument. It will loop if not met.
function userOddNumber() {
    let userNumber; //need to have the variable outside the loop so it doesn't disappear.
    while(true){ //true makes the loop run forever until it runs into break.
        userNumber = parseFloat(prompt("Enter a odd number between 1 and 50"));
        if ((userNumber >= 1) && (userNumber <= 50) && (userNumber % 2 == 1)) {
       break;
     }else{
        continue;
    }
    } return userNumber; //SAVES THE VARIABLE FOR USE IN SECOND FUNCTION AND LOOP
}


function oneToFifty() { //new function used to print out to console.log if variables are met, and highlight the user number.
    let userNumber = userOddNumber(); //calls the first function
    console.log("Number to skip is " + userNumber + "!");
    for (let i = 1; i < 51; i++) {
        if (userNumber == i){
            console.log("Yikes! Skipping number: " + i );
        }else if (i % 2 == 1){
        console.log("Here is an odd number: " + i);
        }
    }
}

oneToFifty();