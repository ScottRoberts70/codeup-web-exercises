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
for (let i = 1; i < 10; i++){
        let string = i.toString().repeat(i);
    console.log(string);
}

// Exercise #5 FOR LOOP
for (let i = 100; i > 0; i-=5){
    console.log(i);
    }





