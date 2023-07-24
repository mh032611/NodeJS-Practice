//Coding Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.



GOOD LUCK 😀
*/

// //Coding Challenge #1 Refresh Attempt on 03/02/23
// //data set 1
// const markMass1 = 78; 
// const markHeight1 = 1.69;
// const johnMass1 = 92;
// const johnHeight1 = 1.95;

// //Data set 2
// const markMass2 = 95; 
// const markHeight2 = 1.88;
// const johnMass2 = 85;
// const johnHeight2 = 1.76;

// const markBMI1 = (markMass1 / (markHeight1 ** 2));
// const johnBMI1 = (johnMass1 / (johnHeight1*johnHeight1))

// const markBMI2 = (markMass2 / (markHeight2 ** 2));
// const johnBMI2 = (johnMass2 / (johnHeight2*johnHeight2));

// console.log (markBMI1, johnBMI1);
// console.log (`Dataset 1 BMIs --- 
// Mark: ${markBMI1}, 
// John: ${johnBMI1}`);

// console.log (`Dataset 2 BMIs --- 
// Mark: ${markBMI2}, 
// John: ${johnBMI2}`);

// markHigherBMI1 = (markBMI1 > johnBMI1);
// markHigherBMI2 = (markBMI2 > johnBMI2);

// console.log(typeof markHigherBMI1);
// console.log(markHigherBMI1);


// console.log("Mark's BMI is " + markBMI1);
// console.log(`The BMI of Mark is, (${markBMI1})`);

// //END Coding Challenge #1 Refresh Attempt on 03/02/23 Done  



/*
//ANSWER Coding Challenge #1 Attempt

//DataSet1
const markMassKg = 78; // use const by default always. massMark better variable name
const johnMassKg = 92;
const markHeightM = 1.69;
const johnHeightM = 1.95;

//DataSet2
const markMassKg2 = 95;
const johnMassKg2 = 85;
const markHeightM2 = 1.88;
const johnHeightM2 = 1.76;

// BMI = mass / (height ** 2) or mass / (height * height) // (mass in kg and height in meter).

const markBMI = markMassKg / (markHeightM ** 2);
const johnBMI = johnMassKg / (johnHeightM ** 2);
console.log(markBMI, johnBMI);

const markBMI2 = markMassKg2 / (markHeightM2 ** 2);
const johnBMI2 = johnMassKg2 / (johnHeightM2 ** 2);
console.log(markBMI2, johnBMI2);

const markHeigherBMI = (markBMI > johnBMI);
const markHeigherBMI2 = (markBMI2 > johnBMI2);

console.log(markBMI, johnBMI, markHeigherBMI);
console.log(markBMI2, johnBMI2, markHeigherBMI2);
END CHALLENGE #1*/

//Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI.The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs.Example: "Mark's
// BMI(28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉

// GOOD LUCK 😀

// // Answer
// // DataSet1
// const markMassKg = 78; // use const by default always. massMark better variable name
// const johnMassKg = 92;
// const markHeightM = 1.69;
// const johnHeightM = 1.95;

// //DataSet2
// const markMassKg2 = 95;
// const johnMassKg2 = 85;
// const markHeightM2 = 1.88;
// const johnHeightM2 = 1.76;

// // BMI = mass / (height ** 2) or mass / (height * height) // (mass in kg and height in meter).

// const markBMI = markMassKg / (markHeightM ** 2);
// const johnBMI = johnMassKg / (johnHeightM ** 2);
// console.log(markBMI, johnBMI);

// const markBMI2 = markMassKg2 / (markHeightM2 ** 2);
// const johnBMI2 = johnMassKg2 / (johnHeightM2 ** 2);
// console.log(markBMI2, johnBMI2);

// const markHigherBMI = (markBMI > johnBMI);
// const markHigherBMI2 = (markBMI2 > johnBMI2);

// console.log(markBMI, johnBMI, markHigherBMI);
// console.log(markBMI2, johnBMI2, markHigherBMI2);

// if (markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than Johns BMI (${johnBMI}.)`);
// } else {
//     console.log(`John's BMI(${johnBMI}) is higher than Mark's BMI (${markBMI}).`);
// }

// if (markHigherBMI2) {
//     console.log(`Mark's BMI(${markBMI2}) is more than John's BMI (${johnBMI2}).`);
// } else {
//     console.log(`John's BMI(${johnBMI2}) is more than Mark's BMI (${markBMI2}).`);
// }
//End Coding Challenge #2

// Coding Challenge #3 

// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy! 

// Your tasks: 
// 1. Calculate the average score for each team, using the test data below 
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks 😉 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy 
// Test data: 
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 

// GOOD LUCK 😀

// Questions 1 and 2
// const dolphinsAVG = (96 + 108 + 89) / 3;
// const koalasAVG = (88 + 91 + 110) / 3; 
// console.log (`dolphinsAVG is ${dolphinsAVG}, and koalasAVG is ${koalasAVG}`);

// if (dolphinsAVG > koalasAVG) {
//     console.log (`Dolphins win!`);
// } else if (koalasAVG > dolphinsAVG) {
//     console.log (`Koalas Win!`);
// } else if (koalasAVG === dolphinsAVG) {
//     console.log (`This match is a draw`)
// }

// //Bonus 1
// const dolphinsAVG = (97 + 112 + 89) / 3;
// const koalasAVG = (109 + 95 + 123) / 3; 
// console.log (`dolphinsAVG is ${dolphinsAVG}, and koalasAVG is ${koalasAVG}`);

// if (dolphinsAVG > koalasAVG && dolphinsAVG >= 100) {
//     console.log (`Dolphins win!`);
// } else if (koalasAVG > dolphinsAVG && koalasAVG >= 100) {
//     console.log (`Koalas Win!`);
// } else if (koalasAVG === dolphinsAVG) {
//     console.log (`This match is a draw`)
// }
// //End Bonus 1

// //Bonus 2
// // § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
// const dolphinsAVG = (97 + 112 + 101) / 3;
// const koalasAVG = (109 + 95 + 106) / 3; 
// console.log (`dolphinsAVG is ${dolphinsAVG}, and koalasAVG is ${koalasAVG}`);

// if (dolphinsAVG > koalasAVG && dolphinsAVG >= 100) {
//     console.log (`Dolphins win!`);
// } else if (koalasAVG > dolphinsAVG && koalasAVG >= 100) {
//     console.log (`Koalas Win!`);
// } else if (koalasAVG === dolphinsAVG && koalasAVG >= 100 || dolphinsAVG >= 100) {
//     console.log (`Both teams win the trophy!`)
// } else {
//     console.log(`No Team Wins!`)
// }
// //End of Bonus 2

//Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%. 
Your tasks: 
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!) 
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25” 
Test data: 
§ Data 1: Test for bill values 275, 40 and 430 
Hints: 
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉 

GOOD LUCK! */

const billValue = 275;
let tip;

// if (billValue >= 50 && billValue <= 300){
//     tip = .15; 
// } else {
//     tip = .20;
// }

// console.log (`Your bill is ${billValue + (billValue * tip)}!`);

// using Ternary

const endingTip = billValue >= 50 && billValue <= 300 ? tip = .15 : tip = .20;
const tipAmount = endingTip * billValue;  //total cash amount of tip
const totalValue = billValue + tipAmount; //denotes final value of bill

console.log (`Your bill is $${billValue + (billValue * endingTip)}!`);
console.log (`The bill was $${billValue}, with a tip amount of $${tipAmount}, and the total bill value of $${totalValue}`);


