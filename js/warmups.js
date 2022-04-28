"use strict";

// let warmUp = "Yay! I completed the warm-up!";
// console.log(warmUp);

//ToDO create a function for FizBUzz
// in a function:
// function fizzBuzz(limit){
// if (limit ___ undefined) {
// limit = 100
// }

//ToDO For Loop:

// for (let i = 0; i < 101; i++) {
//     if (i % 15 == 0) {         //or (i % 3 === 0 && i % 5 === 0)
//         console.log("Fizzbuzz")
//
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else console.log(i);
// }
// TODO This is Chris's example of a switch of FizzBuzz:
// function fizzBuzz() {
//     for (let count = 1; count <= 100; count++) {
//         switch (true) {
//             case (count % 3 === 0 && count % 5 === 0) :
//                 console.log('FizzBuzz');
//                 break
//             case (count % 3 === 0) :
//                 console.log('Fizz');
//                 break
//             case (count % 5 === 0) :
//                 console.log('Buzz');
//                 break
//             default :
//                 console.log('' + count);
//         }
//     }
// } fizzBuzz();

// function allFirstLetters(arr){
//     let bucket = "";
//     for (let el of arr){
//         bucket += el.substring(0,1);
//     }
//     return bucket
// }
// const testStrings = ['dog', 'cat', 'frog', 'bat'];
// console.log(allFirstLetters(testStrings));

//Write a function that takes in a string and returns that string in alphabetical order:

function alphaBet(input){
    let strArray = input.split("");
    console.log(strArray)
    let sortedArray = strArray.sort()
    console.log(sortedArray);
    return sortedArray.join("");
}
// function alphaBet(input){
// retrun inout.split("").sort().join("");

console.log(alphaBet("codeup"));