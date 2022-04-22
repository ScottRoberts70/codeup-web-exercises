"use strict";

// let warmUp = "Yay! I completed the warm-up!";
// console.log(warmUp);

for (let i = 0; i < 101; i++) {
    if (i % 15 == 0) {
        console.log("Fizzbuzz")

    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else console.log(i);
}


