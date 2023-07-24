
// Lesson 10 : Values and Variables
// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN");
// console.log(40 + 3 + 8 + 10);
/*
console.log("Jonas");
console.log("23");

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let PI = 3.1415;
// PI is a constant. all constants should be uppercase

/*
multiline comment
*/

//variable name that holds a boolean value

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof 26);
// console.log(typeof 'jonas');
// console.log(typeof javascriptIsFun)

// javascriptIsFun = 'Yes!';
// // if you want to assign a new value to a veriable, you dont have
// // put in "let". just go ahead and redefine it.

// console.log(typeof javascriptIsFun)

// //there is a variable thats called undefined which is valid
// let year;
// console.log(year);
// console.log(typeof year);
// //the value is be defined as 'undefined'

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);
//null is listed as an "object" which is a bug listed in javascript
//that hasn't been fixed due to legacy reasons.


/* Basic Opperators Lecture
//Its okay to use let to assign a variable and then not use let to
//reassign a variable. called "mutate" a variable.
let age = 30;
age = 31;

//use const to declare variables that are not supposed to change
// at any point in the future

const birthYear = 1998;
console.log(birthYear);

//by default always try to use const. because using let opens
//likliness of bugs.

//NEVER USE VAR. its used in older code, so you will have to know
//what it is, but its deprecated since ES6
var job = "programmer";
job = "teacher";
*/

/*
// Math Opperators
const now = 2023
const ageMuzamil = now - 1991;
const ageHisham = now - 1992;

console.log(ageMuzamil, ageHisham);

console.log(ageMuzamil * 2, ageMuzamil / 2, 2 ** 3)
// ^ you can create 2 values (or more) in one console.log

const firstName = "Jonas";
const lastName = "Smetman";
console.log(firstName + " " + lastName);
//concatination


// Assignment Opperateers
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25 , this redefines x variable by adding 10
x *= 4; //x = x * 4 = 100, this redefines x variable in the same line by mulitplying by 4.
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100

console.log(x);

// Comparison Opperators
console.log(ageMuzamil > ageHisham); //true  this asks the operator for a comparison, which returns a boolean value
// >, <, >=, <=
console.log(ageMuzamil >= 18); //true
console.log(ageMuzamil >= 32); //true
console.log(ageMuzamil >= 33); //false
// usually you would store these results into variables. console.log is used for displaying results in teaching purposes

const isFullAge = ageMuzamil >= 31;
console.log(isFullAge);

console.log(now - 1991 > now - 2012);
*/ //Basic Opperators Lecture end

/*
//Opperater Precidence
const now = 2023
const ageMuzamil = now - 1991;
const ageHisham = now - 1992;
console.log(now - 1991 > now - 2012);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// usually all the mathematical opperators are executed before comparison opperators
// assignment opperators are right to left

let x, y;
x = y = 24 - 10 - 5; // x = y = 10
console.log(x, y); // 10, 10
// = operators are executed from right to left, so thats why x is defined by y (which is already defined as 10 from left to right)

const averageAge = (ageMuzamil + ageHisham) / 2;
console.log(ageMuzamil, ageHisham, averageAge);
*/

/*
//Lesson: Strings and Template Literals
const firstName = "Muzamil";
const job = "Student";
const birthYear = 1991;
const nowYear = 2023

const muzamil = "I'm " + firstName + ', a ' +
    (nowYear - birthYear) + " year old " + job + "! ";
console.log(muzamil);

const muzamilNew = `I'm ${firstName}, a ${nowYear - birthYear} year old ${job}!`;
console.log(muzamilNew);

// use backticks (located above the tab button) to start template literals
// use ${} to enter variables.

console.log(`Just a regular string...`);
//many developers started using backticks for all strings,
//because then you dont have to think about which quotation marks to use
// and incase you have to insert a variable, you dont have to worry about
// swtiching out the regular quotes for backtics.


//old way of doing multi-line is \n\

//new way of doing lines is called a template string. you just hit return for multiline
console.log(`string
multiple
lines`)
end lesson*/


//Lesson:Taking Decisions: if/else statements
// const age = 12;
// const isOldEnough = age >= 18; //variable names describes exactly what we want here


// // if (isOldEnough) {
// //     console.log(`Sarah can start driving license 🚗`);
// // }
// // in practicice you always write out the condition. So dont use isOldEnough variable

// if (age >= 18) {
//     console.log(`Sarah can start driving license 🚗`);
// } //Better notation to write out condition and not to use the variable "isOldEnough"


// if (age >= 15) {
//     console.log(`Sarah can start driving license 🚗`);
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
// }


// const birthYear = 1990;

// if (birthYear <= 1994) {
//     console.log(`You're an old man`)
// } else {
//     const waitYear = birthYear - 1994;
//     console.log(`You must wait ${waitYear} years to be old`);
// }

// const burritos = 3;

// if (burritos >= 5) {
//     console.log(`You ate too much burritos`);
// } else {
//     const moreBurrito = 5 - burritos;
//     console.log(`You need to eat ${moreBurrito} more burritos to be full.`);
// }

// const chores = 1;
// if (chores >= 5) {
//     console.log(`You have done enough chores for the day.`)
// } else {
//     const leftChores = 5 - chores;
//     console.log(`You still need to do ${leftChores} more chore(s) to finish for the day`);
// }

// const birthYear2 = 1991;
// let century; //centurty must be declared outside of the code block. it is undefined in this instance.
// // but it must always be declared.

// if (birthYear2 <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(`It is the ${century}th century`);
// const burgers = 4.9;
// if (burgers >= 5) {
//     console.log(`You ate enough burgers to be full.`);
// } else {
//     const eatMore = (5 - burgers)
//     console.log(`You need to eat ${eatMore} more burgers to be full. `)
// }
// END of lesson 18: Taking If/else statements

// random practice
// const birds = "pelican";
// if (birds.length > 5) {
//     console.log(`your bird is big by, ${birds.length}`)
// } else {
//     console.birds(`birds need to grow`);
// }

// const countries = "india"
// if (countries === "india") {
//     console.log(`Your Country is ${countries}`);
// } else {
//     console.log(`Your Country is not ${countries}.`)
// }

// console.log(typeof true);
// console.log(typeof 26);
// console.log(typeof 'jonas');
// console.log(typeof javascriptIsFun);

//LESSON 20: Type Conversion and Coercion

// //type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number(`Jonas`)); //NaN "Not-a-Number"
// console.log(typeof NaN); //number

// console.log(String(23), 23); //23(as a string) 23(as a number)

// // type coercion
// console.log('I am ' + 23 + ' years old'); //I am 23 years old (output comes out as string)
// console.log('23' - '10' - 3); // 10
// console.log('23' / '2'); // 11.5

// let n = '1' + 1; //11
// n = n - 1; //10
// console.log(n); // 10

// console.log(2 + 3 + 4 + '5');//95
// console.log('10' - '4' - '3' - 2 + '5'); //15

//LESSON 21: Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
// these are false when converted to a boolean

// for ex. any number is that is not zero, or any string that is not an empty string
// will be converted to true when we attempt to convert them to a boolean

// console.log(Boolean(0)); //falsy
// console.log(Boolean(undefined)); //falsy
// console.log(Boolean('Jonas')); //truthy 
// console.log(Boolean({})); //truthy (because there is a value inside string)
// console.log(Boolean(0)); // falsy 
// console.log(Boolean(0));

// in practice using falsy and truthy isnt great 

// //Lesson 24: Logical Opporators

// const hasDriversLicense = true; // variable a
// const hasGoodVision = false; // variable b

// console.log(hasDriversLicense && hasGoodVision); //And operator //false
// console.log(hasDriversLicense || hasGoodVision); //Or operator //true
// console.log(!hasDriversLicense); // NOT operator // false 

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log (`Sarah is able to drive, because "shouldDrive" variable is ${shouldDrive}`)
// } else if (!hasGoodVision && hasDriversLicense){
//     console.log (`Please put on your glasses to drive.`)
// } else {
//     console.log (`Someone else should drive, because "shouldDrive" variable is ${shouldDrive}`)
// } 

// const isTired = true; // variable c 
// console.log(hasDriversLicense || hasGoodVision || isTired); // true
// console.log(hasDriversLicense && hasGoodVision && isTired); //false

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log (`You're good to drive.`)
// } else {
//     console.log (`Don't Drive.`)
// }
// //END Lesson 24: Logical Opporators

// // Lecture 26: The Switch Statement

// const day = 'thursday';

// switch (day) {
//     case 'monday': // day === 'monday' 
//         console.log('Plan course structure');
//         console.log('Go to coding camp');
//         break;
//     case 'tuesday':
//         console.log('Do homework');
//         console.log('Stay afterschool');
//     case 'wednesday':
//         console.log('Go to the Park');
//         break;
//     case 'thursday':
//     case 'friday':
//         console.log ('Study session');
//         break;
//     case 'saturday':
//         console.log('Go out with friends');
//         console.log('Go to the Gym');
//         break;
//     case 'sunday':
//         console.log('Watch football');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// const day2 = 'thursday';

// if (day2 === 'monday') {
//     console.log (`Plan course structure`);
//     console.log (`Go to coding camp`);
// } else if (day2 === 'tuesday') {
//     console.log('Do homework');
//     console.log('Stay afterschool');
// } else if (day2 === 'wednesday'){
//     console.log('Go to the Park');
// } else if (day2 === 'thursday' || day2 === 'friday') {
//     console.log ('Study session');
// } else if (day2 === 'saturday') {
//     console.log('Go out with friends');
//     console.log('Go to the Gym');
// } else if (day2 === 'sunday'){
//     console.log('Watch football');
// } else {
//     console.log('Not a valid day!')
// }
// // End Lecture 26: The Switch statement 


// lecture 27: Statements and Expressions
// if it produces a value, its an "expression"
// variable declaration is also an "expression"
// statements dont produce values
//End lecture 27

// Lecture 28: the Conditional (ternary) operator 

// basically an if-else statement in one line uses a "conditional" operator
// conditional operator has 3 parts 
// the condition, the "if" part, the "else" part 

const age = 23;
age >= 18 ? console.log ('I like to drink wine') : console.log ('I like to drink water');

const drink = age >= 18 ? 'Wine' : 'Water';
console.log(drink);

// the above code using turnary operator is easier to understand than below

let drink2;
if (age >= 18) {
    drink2 = 'Wine';
} else {
    drink2 = 'Water';
}
console.log (drink2);
console.log(`I like to drink ${drink2}`)
// OR you can also put the entire expression into a template literal
console.log (`I like to drink ${age>=18?`Wine`:`Water`}`);
//this is because an expression holds a value (in this case "Wine" or "Water")



