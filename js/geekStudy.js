"use strict";
(function(){

    // // Add Function
    //
    // function add(x,y){
    //     return x + y;
    // }
    // console.log(add(-5, 100));
    //
    // function modulus(div, divisor) {
    //     return div % divisor;
    //
    //     console.log(modulus(123, 4));}
    //
    //
    //     function addMyself(myself, howManyTimes) {
    //         let sum = 0;
    //         for (let i = 0; i < howManyTimes; i++) {
    //             sum += myself;
    //         }
    //         return sum;
    //     }
    //
    //     console.log(addMyself(12, 9));

let myName = "Marc";
function greetName(name){
return "Hello, " +myName;
}
    console.log(greetName(+myName));


function squareRoot(input){
    input = Math.sqrt(input)
    return input;
}

    console.log(squareRoot(4));


})();