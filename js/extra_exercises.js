"use strict";
(function(){

/*Counting the Number of Characters
Create a program that prompts for an input string and displays output that shows the input string and the number of characters the string contains.
Example Output
What is the input string? Homer
Homer has 5 characters.
Constraints
Be sure the output contains the original string.
If the user enters nothing, state that the user must enter something in the program*/

//Basic concatenation of the users prompt answers!

let userInput = prompt("Please enter a word or phrase!");
let stringCount = userInput.length;
 alert("You entered " + userInput + " and, " + userInput + " is " + stringCount + " characters long!");

/*Mad Lib
Mad libs are a simple game where you create a story template with blanks for words.You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
Create a simple mad-lib program that prompts for a noun, a verb, an adverb, and an adjective and injects those into a story that you create.
ExampleOutput:
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly
Do you walk your blue dog quickly? That's hilarious!
Constraints:
Use a single output statement for this program.
If your language supports string interpolation or string substitution, use it to build up the output.*/

// More concatenation joining users response for an output!

let noun = prompt("Please enter a noun. i.e book, Betty, Ohio, Cat?");
let verb = prompt("Please enter a verb. i.e dance, slide, jump.");
let adjective = prompt("Please enter a adjective. i.e red, quick, happy, and obnoxious");
let adverb = prompt("Please enter a adverb. i.e quickly, slowly, dimly. Usually and in LY");
alert("Your MadLib is: Do you " + verb + " your " + adjective + " " + noun + " " + adverb + " ?");

})();