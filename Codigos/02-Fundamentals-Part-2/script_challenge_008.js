/* Coding Challenge #8

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.

*/

"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
    const tipPercent = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
    const tip = bill * tipPercent;
    return tip;
};

const calcAverage = (arr) => {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma / arr.length;
};

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(`Bills array ${bills}`);
console.log(`Tips array ${tips}`);
console.log(`Totals array ${totals}`);

const averageBills = calcAverage(bills);
const averageTips = calcAverage(tips);
const averageTotals = calcAverage(totals);

console.log(`Bills average ${averageBills}`);
console.log(`Tips average ${averageTips}`);
console.log(`Totals average ${averageTotals}`);
