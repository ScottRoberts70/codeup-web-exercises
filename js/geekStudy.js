'use strict';
(function () {


    let num = 18;
    let str = "Hello";
    let boo = false;


    function thiFunc(input) {
        return typeof input;
    }

    console.log(thiFunc(num));
    console.log(thiFunc(str));
    console.log(thiFunc(boo));


    function squreIt(input) {
        return input * input;
    }

    function stradd() {
        return str + prompt(" Enter text here");
    }

    // console.log(stradd());


    function decipher(input) {
        if (input === true) {
            return "This is true";
        } else if (input === false) {
            return "This is false";
        }
    }


    function randominput(str){
        return str.length;
    }

    console.log(randominput('hello'));

    const arry = [1,2,3,4,5];
    function arrylength(arry){
        return arry.length
    }
    function parseNumber(input) {
        if (!isNaN(parseFloat(input))) {
            return true;
        } else
            return false;
    }
//-----loop-------//
        function isArryAllNum(arry) {
            for (let i = 0; i < arry.length; i++) {
                if (parseNumber(arry[i]) == false) {
                    return false;
                }
            }

            return true;
        }

    console.log(isArryAllNum([5,6,'hjghgj']));

//------ARRY-----//
    const array1 = [1,2,3,4,5]

    function atEnd(input){
        array1.push(input)
    }

    atEnd('test');
    console.log(array1);

 //---Obj -------//
    const superNumber = {value:5, negPos:'positive', integer:true}

function makeFavorite(obj){
    obj.favorite = true;
    superNumber.favorite = true;
}

    console.log(superNumber);
    makeFavorite(superNumber);
    console.log(superNumber);


    function takeAway(){
        array1.pop();
    }
    takeAway()
    takeAway()

console.log(array1);


    function shortNumber(obj){
        return {value:obj.value, negPos: obj.negPos}
    }

    console.log(shortNumber(superNumber));


})();