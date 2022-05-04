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

// function alphaBet(input){
//     let strArray = input.split("");
//     console.log(strArray)
//     let sortedArray = strArray.sort()
//     console.log(sortedArray);
//     return sortedArray.join("");
// }
// function alphaBet(input){
// return input.split("").sort().join("");
// }
// console.log(alphaBet("codeup"));

// function arryNum([num1, num2, num3, num4]){
//     return num1 + num2 + num3 +num4;
// }
// console.log(arryNum([2, 4, 2, 2]));
//
// function arryName(arr) {
//     let sum = 0;
//     for (let el of arr) {
//         sum += el;
//     }
//     return sum;
// }
//
// console.log(arryName([1, 1, 1, 1]));

const array = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

// // Create a function, returnProductEssentialDetails, that takes in a product object and returns a simpler product object containing only the product name and price in cents.
//
//
// //     Examples...
// //
// let product1 = {
//     name: 'Hammar',
//     priceInCents: 400,
//     description: 'It is a a hammar.',
//     inventory: 25034
// }
//
// let product2 = {
//     name: 'Computer',
//     priceInCents: 40000,
//     description: 'It is a computer.',
//     inventory: 33000
// }
//
// let product3 = {
//     name: 'Ruler',
//     priceInCents: 1000,
//     description: 'It is a ruler.',
//     inventory: 2200
// }
//
// function returnProductEssentialDetails(product) {
//     return {
//         name:product.name,
//         priceInCents: product.priceInCents,
//     }
// }

//
//     {
//         name: 'Hammar',
//         priceInCents: 400
//     }
//
//
//
//
// returnProductEssentialDetails(product2); // returns...
//
//
//
//     {
//         name: 'Computer',
//         priceInCents: 40000
//     }
//
//
//
//
// returnProductEssentialDetails(product3); // returns...
//
//
//
//     {
//         name: 'Ruler',
//         priceInCents: 1000
//     }
//
//
// //
//
//
// BONUS (if time permits)
//
// Create a function, returnAllProductsEssentialDetails, that takes in an array of product objects and returns an array of product objects containing only the essential details of the product name and price in cents.