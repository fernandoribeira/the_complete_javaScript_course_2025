/* Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 

Your tasks: 

1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!" 

Hint: Use an if/else statement 😉

*/

const massMark = 78;
const heightMark = 1.69;
const bmiMark = massMark / heightMark ** 2;

const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / heightJohn ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else if (bmiJohn > bmiMark) {
    console.log(`John's (${bmiJohn}) is higher than Mark's BMI (${bmiMark})!`);
} else {
    console.log("Mark's and John's BMI is equal!");
}
