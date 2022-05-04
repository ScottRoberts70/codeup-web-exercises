"use strict";

//Parse function for later use
function parseNumber(input){
    if(!isNaN(parseFloat(input))){
        return parseFloat(input);
    }else
        return false;
}


// Define a function named lowerCase that takes in an input and returns that input as a string in all lower case letters. Returns false if the input passed is not a string.

function lowerCase(input){
    if (typeof input === 'string')
        return input.toLowerCase();
    if (input !== 'string'){
        return false;
    }
}
// Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are lowercase otherwise it should return false.

function isAllLowerCase(str){
    if (typeof str === 'string'){
        return str == str.toLowerCase() && str != str.toUpperCase();
    }else{
        return false;
    }
}

// Define a function named isAllUpperCase that takes in a string and returns true if all characters in the string are uppercase otherwise it should return false.

function isAllUpperCase(str){
    if (typeof str === 'string'){
        return str == str.toUpperCase() && str != str.toLowerCase();
    }else{
        return false;
    }
}

// Define a function named isNotPalindrome that takes in a string and returns true if that string is not palindrome, if the string is palindrome should return false.

function isNotPalindrome(input){
    if(typeof input != 'string'){
        return true;
    }else{
        let thisArry = [];
        thisArry = input.split("");
        thisArry.reverse();
        let thisStr = thisArry.join("");
        if(thisStr.toLowerCase() === input.toLowerCase()){
            return false;
        }else{
            return true;
        }
    }
}

// Define a function named multiplyBy2 that takes in an input and multiplies it by 2 if the input is numeric. If the input is Not A Number, then return false.

function multiplyBy2(num){
    if(!isNaN(parseFloat(num))){
        return num * 2;
    }else{
        return false;
    }
}

// Define a function named convertHourToSec that takes in one input Hours. Return the conversation of the number of hours into total seconds. If the input is not numeric or a numeric string, convertHourToSec, should return false.

function convertHourToSec(input) {
    if (!isNaN(parseFloat(input)) && input >= 0){
        return input * 3600;
    }else{
        return false;
    }
}

// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

let lowest = 0;
function getLowestNumber(num1, num2, num3){
    if (parseNumber(num1) && parseNumber(num2) && parseNumber(num3)) {
        if (parseFloat(num1) < (parseFloat(num2))) {
            num3 = parseFloat(num3)
            lowest = parseFloat(num1);
        } else
            lowest = parseFloat(num2);
        if (lowest > num3) {
            lowest = num3;
        }
        return lowest;
    } else
        return false;
}

// Write a function named addStringLengths that takes in two inputs. If both inputs provided are strings, addStringLengths returns the sum after adding the length (number of characters) of both strings. If either or both inputs are not strings, return false.

function addStringLengths(str1, str2){
    if (typeof str1 == 'string' && typeof str2 == 'string'){
        let val1 = str1.length
        let val2 = str2.length
        return val1 + val2
    }else{
        return false;
    }
}

// Write a function named subtract that takes in two inputs. If both inputs provided are numeric or numeric strings, subtract will return the difference when the second input is subtracted from the first input. If one or both inputs is not numeric or numeric strings, subtract should return false.

function subtract(val1, val2){
    if (parseNumber(val1) && parseNumber(val2)){
        return val1 - val2
    }else{
        return false;
    }
}

// Write a function named calculateChange that takes in two inputs, totalPaid and totalCost. If both inputs are numeric or numeric strings, calculateChange should return the change after subtracting the cost from the amount paid. The return should be in $x.xx format as a string Note: it should return with two decial places. If either or both inputs are not numeric or numeric strings, calculateChange should return false.

function calculateChange(totalPaid, totalCost) {
    if (parseInt(totalPaid) && parseInt(totalCost)) {
        let val = totalPaid - totalCost
        return ('$' + val.toFixed(2))
    }else{
        return false;
    }
}

