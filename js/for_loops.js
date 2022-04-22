// //Exercise #2 FOR LOOP
 function showMultiplicationTable(input){
    for (let i = 1; i < 11; i++) {
        console.log(input + " x " + i + " = " + (input*i));
    }
}

//Exercise #3 FOR LOOP
for (let i = 1; i < 11; i++){
    let isRndNum = Math.floor(Math.random()* 21) + 180;
    if (isRndNum %2 ===0) {
        console.log(isRndNum + " is Even!");
    }else{
        console.log(isRndNum + " is odd!");
    }
}

// Exercise #4 FOR LOOP
for(let i = 0; i < 10; i++){
    let txt = '';

for(let j = 0; j < i; j++){
    txt=txt + i;
}console.log(txt);
}

//same output but different examples
for (let i = 1; i < 10; i++){
        let string = i.toString().repeat(i);
    console.log(string);
}

// Exercise #5 FOR LOOP
for (let i = 100; i > 0; i-=5){
    console.log(i);
    }

// ToDO Extra from Slack

// todo Create a function that will replace every other letter of a string with a “Z”. (example: replaceLettersWithZ(“javascript”) // returns “jZvZsZrZpZ”;) This can be accomplished with a for loop,


//todo Create a function to display a message of the factorial of a number. (example: factorial(4) // returns “1 * 2 * 3 * 4 = 24";)



