"use strict";
(function(){
//
// // //Exercise #2 FOR LOOP
 function showMultiplicationTable(input){
    for (let i = 1; i < 11; i++) {
        console.log(input + " x " + i + " = " + (input*i));
    }
}
// // used to call:  showMultiplicationTable(27);
//
// //Exercise #3 FOR LOOP
for (let i = 1; i < 11; i++){
    let isRndNum = Math.floor(Math.random()* 181) + 20;
    if (isRndNum % 2 ===0) {
        console.log(isRndNum + " is Even!");
    }else{
        console.log(isRndNum + " is odd!");
    }
}
//
// // Exercise #4 FOR LOOP within a loop
for(let i = 0; i < 10; i++){
    let txt = '';

for(let j = 0; j < i; j++){
    txt=txt + i;            // can be txt += i;
}console.log(txt);
}
//
// //same output but different examples the Michael Special
for (let i = 1; i < 10; i++){
        let string = i.toString().repeat(i);
    console.log(string);  // also  console.log(i.toString().repeat(i));
}
//
// // Exercise #5 FOR LOOP
//     // in a function :  function funcName(val){
//     //funcName (100);   (calls function at end)
for (let i = 100; i > 0; i -=5){
    console.log(i);
    }

//
// ToDO Extra from Slack

// todo Create a function that will replace every other letter of a string with a “Z”. (example: replaceLettersWithZ(“javascript”) // returns “jZvZsZrZpZ”;) This can be accomplished with a for loop,
function replaceLettersWithZ(str) {
    let text = '';
    let i = 0;
    for (i = 0; i < str.length; i++) {
        if (i % 2 == 1) {
            text = text + "Z";
        } else {
            text = text + str[i];
        }
    }
    return text;
}
console.log(replaceLettersWithZ(
    'Javascirpt'));


//todo Create a function to display a message of the factorial of a number. (example: factorial(4) // returns “1 * 2 * 3 * 4 = 24";)


})();
