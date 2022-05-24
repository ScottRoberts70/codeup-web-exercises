"use strict";

// Write a function named `checkForNumber` that accepts an argument and returns a string `'number'` or `"not a number"`
// based on whether the input is a number.
//     ```js
//     checkForNumber(-1) // "number"
//     checkForNumber(0) // "number"
//     checkForNumber(6) // "number"
//     checkForNumber() // "not a number"
//     checkForNumber("hello") // "not a number"
//     checkForNumber("777") // "not a number"
//     ```js

function checkForNumber (num){
    if (typeof num === 'number'){
        return 'number';
    } else {
        return 'not a number';
    }
}

// Write a function named `evenOrOdd` that returns the string `"even"` or `"odd"` when passed a numeric argument. The
// resulting string should represent whether the number is even or odd.
//     ```js
//     evenOrOdd(20) // "even"
//     evenOrOdd(0) // "even"
//     evenOrOdd(-28) // "even"
//     evenOrOdd("22") // "even"
//     evenOrOdd(5) // "odd"
//     evenOrOdd(-93) // "odd"
//     evenOrOdd("37") // "odd"
//     ...js

function evenOrOdd (num){
    if (num %2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}


// Write a function named `doubleTheElements` that accepts an array of numbers and returns an array with double the
// value of each number.
//     ```js
//     doubleTheElements([7, 8, 9, 10]) // [14, 16, 18, 20]
//     doubleTheElements([1, 2, 3]) // [2, 4, 6]
//     doubleTheElements([9, -9, 9.2]) // [18, -18, 18.4]
//     ...js
function doubleTheElements (array){
    let double = [];
    for (let i = 0; i < array.length; i++){
        double.push(array[i]*2);
    }
    return double;
}


// Write a function named `sumOfElements` that accepts an array of numbers and returns the sum of those numbers.
//     ```js
//     sumOfElements([1, 2, 3]) // 6
//     sumOfElements([4, 6, 8, 10, 12]) // 40
//     sumOfElements([1, .5]) // 1.5
//     ```js

function sumOfElements (array) {
    let sum = 0;
    for (let num of array){
        sum += num;
    }
    return sum;
}

// Write a function named `totalPrice` that accepts an array of objects where each object represents a product from a
// store, that has a `price` property. The function should return the total of every object's `price` property.
//     ```js
//    totalPrice([
//        {name: 'tomatoes', price: 4},
//        {name: 'potatoes', price: 6},
//        {name: 'wine', price: 16},
//    ])
//    // returns 26
//    // ```js

function totalPrice(obj){
    let product = 0;
    for (let i = 0; i < obj.length; i++){
        product += obj[i].price;
    }
    return product;
}

// Write a function named `findHighestPrice` that accepts an array of objects where each object represents a product
// from a store, that has a `price` property. The function should return the highest price value from the array. `findHighestPrice`.
//     ```js
//    findHighestPrice([
//        {name: 'tomatoes', price: 4},
//        {name: 'potatoes', price: 6},
//        {name: 'wine', price: 16},
//    ])
//    // returns 16
//    // ```
function findHighestPrice (obj){
    let sum = 0;
    for(let num of obj){
        if (num.price > sum){
            sum = num.price
        }
    }
    return sum;
}

// Write a function named `discountCheck`. The function should accept an object that represents a customer's
// transaction.  The object passed into the function should have `customerName`, `items`, and `clubMember` properties. A customer will qualify for a discount
// if they have a total from the `items` property of 150 or greater, or if they are a club member. `discountCheck`
// should return a boolean representing whether the customer described by the object qualifies for a discount.
//
// **HINT: The `totalPrice` function may be used to calculate the total price of the items by passing in the array of items.**
// ```js
//    discountCheck({
//         customerName: "Barbara",
//         items: [
//            {name: 'tomatoes', price: 4},
//            {name: 'potatoes', price: 6},
//            {name: 'wine', price: 16},
//         ],
//         clubMember: true
//    });
//    // true
//
//    discountCheck({
//         customerName: "Dale",
//         items: [
//            {name: 'television', price: 400},
//            {name: 'xbox', price: 599},
//            {name: 'soda', price: 1},
//         ],
//         clubMember: false
//     });
//    // true
//
//    discountCheck({
//         customerName: "Kenneth",
//         items: [
//            {name: 'doughnuts', price: 7},
//            {name: 'apple juice', price: 3},
//            {name: 'bird seed', price: 13},
//         ],
//         clubMember: false
//     });
//    // false
//
function discountCheck(input) {
    if(input.clubMember === true || totalPrice(input.items) >= 150){
        return true;
    } else {
        return false;
    }
}

// Write a function named `newProduct` with two parameters, a string that contains a name, and a number representing the
// product's price, and returns an object with properties `name` and `price`.
//     ```js
//     newProduct('tomatoes', 3.99) // {name: 'tomatoes', price: 3.99}
//     newProduct('Yu-Gi-Oh Booster Pack', 5.89) // {name: 'Yu-Gi-Oh Booster Pack', price: 5.89}
//     ```

function newProduct (name, price){
    return {
        name:name,
        price:price
    }
}

// Write a function named `countWords` that accepts a string and returns the number of words in that string.
//     ```js
//     countWords('Hello, Codeup!') // 2
//     countWords('The quick brown fox jumps over the lazy dog!') // 9

function countWords(str){
    let count = str.split(' ').length;
    if (str === ''){
        return 0;
    }else {
        return count;
    }
}

// Write a function named `describeNumber` that takes in an integer and will return an object describing different
// features of the input as a number. If the input is a number, the object should have three properties: `value` for the
//     value passed, `evenOrOdd` which should be a string to identify whether the passed argument is evenly divisible by 2,
//     and `numberOfDigits` which should count the number of digits in the argument passed into the function:

function describeNumber (num){
    if (!isNaN(parseFloat(num))){
        let obj = {};
        obj.value = parseFloat(num);
        obj.evenOrOdd = evenOrOdd(num);
        obj.numberOfDigits = num.toString().length;
        return obj;
    }
}

// Write a function named `screamingSnakeCase` that accepts a string that has several words each separated by a space,
//     and returns a string with each word in all caps, and with the spaces replaced by underscores (ex.
//     SCREAMING_SNAKE_CASE).
//
//     ```js
//    screamingSnakeCase('Lord Palmerston') // "LORD_PALMERSTON"
//    screamingSnakeCase('pitt the elder') // "PITT_THE_ELDER"
//    screamingSnakeCase('99 BaRRels Of rOOt BEeR oN ThE WaLL') // "99_BARRELS_OF_ROOT_BEER_ON_THE_WALL"
//    screamingSnakeCase('The quick brown fox jumped over the lazy dog') // "THE_QUICK_BROWN_FOX_JUMPS_OVER_THE_LAZY_DOG"
//    ```

function screamingSnakeCase(str){
    return str.toUpperCase().split(" ").join("_");
}