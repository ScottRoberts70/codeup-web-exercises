const numbers =[20,21,22,23,24,25,26,27];
const words =['asap', 'byob', 'rsvp', 'diy'];


//---double the numbers of an array----//
const doubleTheNumbers = numbers.map(function(n){
    return n * 2;
});
console.log(doubleTheNumbers)

const evenOrOdd = numbers.map(function(n){
    return {
        val: n,
        isEven: n % 2 === 0,
    }
});

console.log(evenOrOdd)

//----to uppercase, split and join to add periods.----//
const wordFix = words.map(function(word){
    return word.toUpperCase().split('').join('.');
});
   console.log(wordFix)

//TODO----------------------------------------------------------//
//----------------------ARROW FUNCTION--------------------------//

// Normal way we write functions:
// const square = function(x){
//        return x * x;
// }
 //----------- NEW WAY USING ARROW FUNCTION--------------------//
const square = (x) => {
       return x * x;
}
