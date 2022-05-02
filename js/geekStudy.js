'use strict';

function thisFunction(input){
   if(typeof input === "string"){
       console.log(input);
   }else
       return false;
}
thisFunction("Scott");


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let pricePer = 3;
let pay = (littleMermaid + brotherBear + hercules)* pricePer;
console.log(pay);

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
let classFull = true;
let scheduleConflict = true;
let enrolled = (classFull && scheduleConflict);
console.log(enrolled);


//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.