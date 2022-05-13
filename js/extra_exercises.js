"use strict";
(function () {
// // /*
// // Counting the Number of Characters
// // Create a program that prompts for an input string and displays output that shows the input string and the number of characters the string contains.
// // Example Output
// // What is the input string? Homer
// // Homer has 5 characters.
// // Constraints
// // Be sure the output contains the original string.
// // If the user enters nothing, state that the user must enter something in the program
// //
// // //Basic concatenation of the users prompt answers!
// //
// // let userInput = prompt("Please enter a word or phrase!");
// // let stringCount = userInput.length;
// //  alert("You entered " + userInput + " and, " + userInput + " is " + stringCount + " characters long!");
// //
// // /*Mad Lib
// // Mad libs are a simple game where you create a story template with blanks for words.You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
// // Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.
// // ExampleOutput:
// // Enter a noun: dog
// // Enter a verb: walk
// // Enter an adjective: blue
// // Enter an adverb: quickly
// // Do you walk your blue dog quickly? That's hilarious!
// // Constraints:
// // Use a single output statement for this program.
// // If your language supports string interpolation or string substitution, use it to build up the output.*/
// //
// // // More concatenation joining users response for an output!
// //
// // /*
// // let noun = prompt("Please enter a noun and press OK i.e book, Betty, Ohio, Cat!");
// // let verb = prompt("Please enter a verb and press OK i.e dance, slide, jump.");
// // let adjective = prompt("Please enter a adjective and press OK i.e red, quick, happy, and obnoxious");
// // let adverb = prompt("Please enter a adverb and press OK i.e quickly, slowly, dimly. Usually and in LY");
// // alert("Your MadLib is: Do you " + verb + " your " + adjective + " " + noun + " " + adverb + " ?");
// // */
// //
// // //Extra Function Todo Drills:
// //
// //  //Functions using conditionals but not loops or arrays:
// //  // ToDo:
// //  // Make a function named isOdd(number)
// //  function isOdd(number){
// //   return (number % 2) == 1;
// //  }
// //
// //  // Make a function named isEven(number)
// //  function isEven(num){
// //   return (num % 2) == 0;
// //  }
// //
// //  // Make a function named identity(input) that returns the input exactly as provided.
// //
// //  function identity(input) {
// //   return  input;
// //  }
// //
// //  // Make a function named isFive(input)
// //  function isFive(input) {
// //   return input === 5;
// //  }
// //
// //  // Make a function named addFive(input) that adds five to some input.
// //  function addFive(input){
// //   return input + 5;
// //  }
// //
// //  // Make a function named isMultipleOfFive(input)
// //  function isMultipleOfFive(input) {
// //   return (input % 5) == 0;
// //  }
// //
// //  // Make a function named isThree(input)
// //  function isThree(input){
// //   return (input === 3);
// //  }
// //
// //  // Make a function named isMultipleOfThree(input)
// //
// //  function isMultipleOfThree(input) {
// //   return (input % 3) == 0;
// //  }
// //  // Make a function named isMultipleOfThreeAndFive(input)
// //
// //  function isMultipleOfThreeAndFive(input) {
// //   return (input % 3 && 5) == 0;
// //  }
// //
// //  // Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
// //
// //  function isMultipleOf(target, n) {
// //   return (target % n) ==0;
// //  }
// //
// //  // Make a function named isTrue(boolean) value has to be true and type boolean
// //  function isTrue(input) {
// //   return (input === true);
// //  }
// //
// //  // Make a function named isFalse(boolean)
// //
// //  function isFalse(booLean) {
// //   return (5 % 2) ==0;
// //  }
// //
// //  // Make a function named isTruthy(input), remember that values other than true will behave like true
// //
// //  function isTruthy(input){
// //   return (input === true);
// //  }
// //
// //  // Make a function named isFalsy(input), remember that values other than false behave like false
// //
// //  function isFalsy(input){
// //   return (input === false);
// //  }
// //
// //  // Make a function named isVowel(letter)
// //
// // function isVowel(letter){
// //   return ("aeiou".includes(letter.toLowerCase()));
// // }
// //  // Make a function named isConsonant(letter)
// //
// //
// //  // Make a function named isCapital(letter)
// //  function isCapital (letter){
// //   return (letter == letter.toUpperCase());
// //  }
// //
// //  // Make a function named isLowerCase(letter)
// //  function isLowercase (letter){
// //   return (letter == letter.toLowerCase());
// //  }
// //  // Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
// //  function hasLowerCase(string) {
// //   for(let i=0; i < string.length; i++){
// //    let isLower = false;
// //    isLower = (string[i] == string[i].toLowerCase());
// //    if(isLower){
// //     break;
// //    }
// //   }
// //  }
// // console.log(hasLowerCase("HeLP"));
// //  // Make a function named isSpace(letter) that returns if a character is a space character
// //  function isSpace(letter){
// //   return letter === letter.trim()
// //  }
// //
// //  // Make a function named isZero(number)
// //  function isZero (input){
// //   return input === 0;
// //  }
// //
// //  // Make a function named notZero(input) that returns true if the input is not zero
// //
// //  function notZero(input){
// //   return input !== 0;
// //  }
// //  // Write a function named lowerCase(string)
// //  function lowerCase(string) {
// //   return string.toLowerCase();
// //  }
// //  // Write a function named double(n) that returns a number times two
// //
// //  function double(n){
// //   return n * 2;
// //  }
// //  // Write a function named triple(n) that returns a number times 3
// //
// //  function triple(n){
// //   return n *3;
// //  }
// //  // Write a function named quadruple(n) that returns a number times 4
// //
// //  function quadruple(n){
// //   return n * 4;
// //  }
// //  // Write a function named half(n) that returns 1/2 of the provided input
// //
// //  function half(n){
// //   return n / 2;
// //  }
// //  // Write a function named subtract(a, b) that returns a minus b
// //  function subtract(a, b){
// //   return a - b;
// //  }
// //
// //  // Write a function named multiply(a, b) that returns the product of a times b
// //  function multiply(a, b){
// //   return a * b;
// //  }
// //
// //  // Write a function named divide(a, b) that returns a divided by b
// //  function divide(a, b){
// //   return a / b;
// //  }
// //
// //  // Write a function named remainder(a, b) that returns the remainder after dividing a by b
// //  function remainder(a, b){
// //   return a % b;
// //  }
// //
// //  // Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
// //
// //
// //  // Write a function named cube(n) that returns n * n * n
// //  function cube(n){
// //   return n * n * n;
// //  }
//
//  // Write a function named squareRoot(n) that returns the square root of the input
//  function squareRoot(num) {
//   if (!isNaN(parseFloat(num))) {
//    return Math.sqrt(num);
//   }
//  }
//
//  console.log(squareRoot(parseFloat(42)));
//
//
//  // Write a function named cubeRoot(n) that returns the cube root of the input
//
//  function cubeRoot(num) {
//   if (!isNaN(parseFloat(num))) {
//    return Math.cbrt(num).toFixed(2);
//   }
//  }
//
//  console.log(cubeRoot(parseFloat(42)));
//
//  // Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
//
//  function invertSign(number) {
//   if (number > 0) {
//    return -Math.abs(number);
//   } else if (number < 0) {
//    return Math.abs(number);
//   } else {
//    return false;
//   }
//  }
//
//  console.log(invertSign(parseFloat(5)));
//
//  // Write a function named degreesToRadians(number)
//  function degreesToRadians(degrees) {
//   let pi = Math.PI;
//   return degrees * (pi / 180);
//  }
//
//  console.log(degreesToRadians(45));
//
//  // Write a function named radiansToDegrees(number)
//  function radiansTodDegrees(radians) {
//   let pi = Math.PI;
//   return radians * (180 / pi);
//  }
//
//  console.log(radiansTodDegrees(0.7853981633974483));
//
//  // Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
//
//
//  // Make a function named trim(string) that removes empty spaces before and after the input.
//  // Make a function named areEqual(input1, input2) that returns if both inputs have the same value
//  // Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
//  // Make a function named not(input) returns the input with a flipped boolean
//  // Make a function named notNot(input) that the negation of the negation of the input.
//  // Make a function named and(predicate1, predicate2) that returns the logical operation of AND
//  // Make a function named or(predicate1, predicate2) that returns the logical operation of OR
//  // Write a function called reverseString(string) that reverses a string
//  // Make a function named absoluteValue(number) that returns the absolute value of a number.
//  // Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
// // function rollDice(sides){
// //
// // }
// let dogInfo = [
//   {
//    name: "Chompers",
//    breed: "Pug",
//    age: 7
//   },
//   {
//    name: "Freddy",
//    breed: "Lab",
//    age: 4
//   },
//   {
//    name: "Mr. Pig",
//    breed: "Mastif",
//    age: 10
//   }
//  ];
//
// function getOlder(arr){
//  for(let i=0; i<arr.length; i++){
//   arr[i].age += 1;
//  }
//  return arr;
// }
//
//  console.log(getOlder(dogInfo));
//
// // or
//
//     function getOlder(arr){
//         for(let obj of arr){
//             obj.age += 1;
//         }
//         return arr;
//     }
//
//     console.log(getOlder(dogInfo));
//
//     // Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false.
//
//     let cars = [
//         {
//             make: 'Volvo',
//             color: 'red',
//             year: 1996,
//             isDirty: true
//         },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: true
//         }
//     ]
//
// function washCArs(arr){
//         for(let obj of arr){
//             obj.isDirty = false;
//         }
//         return arr;
// }
//
//     console.log(washCArs(cars));

    // Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.

    // let admin = [
    //     {
    //         isAdmin: true,
    //         email: 'user1@email.com'
    //     },
    //     {
    //         isAdmin: true,
    //         email: 'user2@email.com'
    //     },
    //     {
    //         isAdmin: false,
    //         email: 'user3@email.com'
    //     }
    // ]

    // function adminList(arr) {
    //     let bucket = 0;  // use this if you need to add  elments from the array together  Use let bucket = [0] when returning an arry.
    //     for (let obj of arr) {
    //         if (obj.isAdmin === true) {
    //             bucket += 1;
    //         }
    //     }
    //     return bucket;
    // }
    //
    // console.log(adminList(admin));

    // function adminList (arr){
    //     let bucket = [];
    //     for(let obj of arr){
    //         if(obj.isAdmin === true){
    //             bucket.push (obj.email);  //.push because we are returning more than one element
    //         }
    //     }
    //     return bucket;
    // }
    //
    // console.log(adminList(admin));


    // function adminList (arr){
    //     let bucket = [];
    //     for(let obj of arr){
    //         if(obj.isAdmin === true){
    //             bucket.push (obj);
    //         }
    //     }
    //         return bucket;              // make sure to return outside loop or it will only loop once.
    // }
    // console.log(adminList(admin));

    // // Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

    // var breads  = [
    //     "white",
    //     "wheat",
    //     "rhy",
    //     "white"
    // ];
    //
    // var fillings = [
    //     "pb&j",
    //     "ham",
    //     "cheese steak",
    //     "tuna"
    // ];
    //
    //
    //
    // function makeSandwhichObjects(arr1, arr2){
    //     let sam1 ={}
    //     let sam2 ={}
    //     let sam3 ={}
    //     let bucket = []
    //     sam1.bread = arr1[3]
    //     sam1.filling = arr2[1]
    //     sam2.bread = arr1[0]
    //     sam2.filling=arr2[2]
    //     sam3.bread = arr1[0]
    //     sam3.filling=arr2[1]
    //     bucket.push(sam1, sam2, sam3);
    //     return bucket;
    // }
    // console.log(makeSandwhichObjects(breads, fillings));
    //
    // function makeSandwich(arr1, arr2){
    //     let arr =[]
    //     for (let i = 0; i < arr1.length && i < arr2.length; i++){
    //       let samich = {
    //           bread: arr1[i],              //or....   [Math.floor(Math.random()* arr1.length)],
    //           filling:arr2[i],             //or....   [Math.floor(Math.random()* arr2.length)],
    //       };
    //       arr.push(samich)
    //     }
    //     return arr;
    // }
    // console.log(makeSandwich(breads, fillings));


    // Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array.
    //
    // let fruits = ["apple", "banana", "orange", "apple", "pineapple"];
    //
    // function allIndexesOf(arr, val){
    //     let obj = [0];
    //     for(let obj of arr)
    //     if(arr.includes(val) === true){
    //         return arr.push(obj);
    //     }
    //
    //     }
    //
    // console.log(allIndexesOf(obj, "orange"));


    // Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove

    // removeAll(bugs, "ant") should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
    // removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
    // removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.


    let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

    function removeAll(arr, val) {
        let index = arr.indexOf(val);
        while (index > -1) {
            arr.splice(index, 1);
            index = arr.indexOf(val);
        }
        return bugs;
    }

    console.log(removeAll(bugs, "ant"));


    // Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.

    function randomIntBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log(randomIntBetween(4, 10));

    // Make a function called coinFlip() that returns either 0 or 1, randomly

    function coinFlip() {
        return Math.round(Math.random());
    }

    console.log(coinFlip());


    // Make a function called twoDice() that returns the sum of rolling two six sided dice.

    function twoDice() {
        let d1 = Math.floor(1 + Math.random() * 6);
        let d2 = Math.floor(1 + Math.random() * 6);
        return d1 + d2
    }

    console.log(twoDice());

    // Make a function called twentySidedDie() that returns a random integer between 1 and 20.

    function twentySidedDie() {
        let d1 = Math.floor(1 + Math.random() * 20);
        return d1
    }

    console.log(twentySidedDie());


    // Make a function called twelveSidedDie() that returns a random integer between 1 and 12.

    function twelveSidedDie() {
        let d1 = Math.floor(1 + Math.random() * 12);
        return d1
    }

    console.log(twelveSidedDie());

    // Make a function called tetrahedron() that returns a random integer between 1 and 4.
    function tetrahedron() {
        let d1 = Math.floor(1 + Math.random() * 4);
        return d1
    }

    console.log(tetrahedron());

    // Make a function called rollDie() that returns an integer between 1 and 6.
    function rollDie() {
        let d1 = Math.floor(1 + Math.random() * 6);
        return d1
    }

    console.log(rollDie());

    // Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.
function listOfRolls(num){
    let bucket = []
    for(let i = 0; i<num; i++){
    let rolls = rollDie(i)*num;
    bucket.push()
    }


}

})();