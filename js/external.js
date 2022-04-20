"use strict";

// console.log("Hello from external JavaScript");
// alert('Welcome to my Website!');
//
// let color = prompt("What is your favorite color?");
// alert("Great, " + color + " is my favorite color too!");

/* You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.*/

//Website alert exercise
// alert('Welcome to my Website!');
//
// //Fav Color Exercise!
// let favColor = prompt("What is your favorite color?");
// alert ("Great, " + favColor + " is my favorite color too!");
//
// //Exercise 3.1
// let littleMermaid = parseInt(prompt("How long do you wish to rent Little Mermaid?"));
// let brotherBear = parseInt(prompt("How long do you wish to rent Brother Bear?"));
// let hercules = parseInt(prompt("How long do you wish to rent Hercules?"));
// let price = 3;
// let totalPrice = price * (littleMermaid+brotherBear+hercules);
// alert("You rentals are Little Mermaid for " + littleMermaid + " days, Brother Bear for " + brotherBear + " days, Hercules for " + hercules + " days." + " Your total cost is " + totalPrice);
//
// //Exercise 3.2
// let googleHrs = 0, amazonHrs = 0, faceBookHrs = 0, googlePay = 0, amazonPay = 0, faceBookPay = 0;
// googleHrs = parseInt(prompt("How many hours did you work for Google?"));
// googlePay = parseInt(prompt("How much do you get an hour from Google?"));
// amazonHrs = parseInt(prompt("How many hours did you work for Amazon?"));
// amazonPay = parseInt(prompt("How much do you get an hour from Amazon?"));
// faceBookHrs = parseInt(prompt("How many hours did you work for FaceBook?"));
// faceBookPay = parseInt(prompt("How much do you get an hour from FaceBook?"));
// let yourTotalPay = (googlePay*googleHrs)+(amazonPay*amazonHrs)+(faceBookHrs*faceBookPay);
// alert ("Your total pay for the week is " + yourTotalPay);
//
// //Exercise 3.3
// let classFull = false, scheduleConflict = false;
// classFull = confirm("Press OK if the class is full!");
// scheduleConflict = confirm("Press OK if their is no conflict with your current schedule!");
// let enrolled = (classFull && !scheduleConflict);
// alert("Your enrollment is " + enrolled);
//
// //Exercise 3.4
// let moreThanTwo = false, notExpired = false, premiumMember = false;
// moreThanTwo = confirm("Press OK if you purchased more than two items!");
// notExpired = confirm("Press OK if the offer has not expired!");
// premiumMember = confirm("Press OK if you are a Premium Member!");
// let offer = (moreThanTwo && !notExpired) || premiumMember;
// alert("The Offer is " + offer);
//

let username = 'codeup';
let password = 'testingthis';

if (password.length >= 5 && password !== username) {
    alert("Your password is good!");
}else {
   alert("Your password is either too short or contains the username!");
}
if (username.length <= 20 && !(username.includes(" "))){
    alert ("Username is good!");
}else{
    alert("username to long or you have a space in username!");
}






