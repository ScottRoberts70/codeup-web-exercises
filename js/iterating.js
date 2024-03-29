(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ['Scott', 'Jason', 'David', 'Peter'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(let i = 0; i < names.length; i++){
        console.log('the name at index ' +i+ ' is: ' +names[i]);
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(names) {
        console.log('The name is  ' + names + '.');
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(arry){  //arry is just a placeholder (names) in the console log is what;s used to pull the function. i.g  console.log....+first(names));
        return arry[0];
    }

    function second(arry){
        return arry[1];
    }

    function last(arry){
        return arry[arry.length -1]; // -1 pulls from reverse at the end of arrays.
    }
    console.log('First Element ' +first(names));
    console.log('Second Element ' +second(names));
    console.log('Last Element ' +last(names));

})();
