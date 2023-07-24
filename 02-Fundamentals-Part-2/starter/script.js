'use strict';
// //33. Functions
// function logger () {
//      console.log(`My name is Muzamil`);
// }


// // this process is called calling/running/invoking the function 
// logger(); // this doesnt produce a value. you need a return function for that
// logger(); // all it does is display the console.log, but if you were to store it in a variable it would be saved as undefined
// logger();

// function fruitProcessor (apples, oranges){
// //    console.log (apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0); //capture the value into the variable appleJuice
// // the actual values of the parameters (in this case "5" and "0" are called "Arguments")


// console.log(appleJuice); //executes function and prints out capture value with 5, 0 parameters
// console.log(fruitProcessor(5,0)); //without capturing the value of the function into a variable

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// // with functions you can create more reusable chunks of code without
// // having to rewrite the same code over and over again
// // This is a Coding Principle called "dont repeat your code" or "DRY"

// // just FYI console.log is also a function but it is a built-in function
// // so is Number('23');

// const num = Number('23');
// console.log(num);

// //End 33. Functions 

// //34. Function Declarations and Expressions

// function calcAge1(birthYear){
//     const age = 2027 - birthYear;
//     return age;
// }
// // you can condense this by typing it the way below
// function calcAge1(birthYear){
//     return 2027 - birthYear;
// }

// const age1 = calcAge1(1991); 
// console.log(age1);
// // Code above is called a "function declaration"


// // Code below is a "function expression"
// //Function Expression
// const calcAge2 = function (birthYear){ //this is a function without a name AKA "anonymous function"
//     return 2027 - birthYear;
// }
// // calcAge2 will be the function

// const age2 = calcAge2(1991);
// console.log (age1, age2);

// // // Remember that a function is a value, therefore it can be stored in a variable
// // // function expressions store the value into a variable

// // One of the main differences between an function declaration and a function expression
// // is that you can call a function delcaration before it is defined, but you cant call a 
// // function expression before it is defined
// // for ex.
// // comment out previous code 
// const age1 = calcAge1(1991); 
// console.log(age1);

// function calcAge1(birthYear){
//     return 2027 - birthYear;
// } // this returns value 36 which is called on before it is defined
// // this may not be a good idea to do in many situations, but just know you can do it

// // Jonas prefers to use Function Expressions but you can use whichever you prefer

// //34. END Function Declarations and Expressions

/////////////////////////////////////////////////////////////////////////////

// 35. Arrow Functions 
// // this was added in ES6
// // Am arrow function is a shorter form of a function expression which is shorter 
// // and therefore faster

// //Function Name = Parameter name => Expression 
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// // above is a one-liner, single argument arrow function which automatically returns a value
// // so you dont have two write out "return" to get the value

///////??

// // if you have multile parameters, then you have to use curly braces
// // to include other variables in the expression
// // for these arrow functions you DO have to include a return statement
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Jonas')); 
// console.log(yearsUntilRetirement(1980, 'Bob'));

// Practice 
// this is just my practice of a made up problem. DONT take too seriously
// // Version using arrow function
// const lifeLeft = (age,firstName) => {
//     const yearsLeft = 90 - age;
//     const daysLeft = 365 * age ;
//     const hoursLeft = 8760 * age;
//     return `${firstName}, you have ${yearsLeft} years, ${daysLeft} days, and ${hoursLeft} hours left to live.`;
// };
// const displayLife = lifeLeft(32,'Muzamil');
// console.log(displayLife);

// //Version using declarative function 
// function lifeLeft(age,firstName) {
//     const yearsLeft = 90 - age;
//     const daysLeft = 365 * age ;
//     const hoursLeft = 8760 * age;
//     return `${firstName}, you have ${yearsLeft} years, ${daysLeft} days, and ${hoursLeft} hours left to live.`;
// }
// const displayLife = lifeLeft(32,'Muzamil');
// console.log(displayLife);

//Version using expressive function
// const displayLife = function lifeLeft(age,firstName) {
//     const yearsLeft = 90 - age;
//     const daysLeft = 365 * age ;
//     const hoursLeft = 8760 * age;
//     return `${firstName}, you have ${yearsLeft} years, ${daysLeft} days, and ${hoursLeft} hours left to live.`;
// }
// console.log(displayLife(32,'Muzamil'));

// END Practice 


// // Hackbright Question Retry
// // probably not ready for this yet. did not cover material yet
//// Shopping Trip Question
// // Part 1

// const costOfItems = [4, 3, 5];
// const moneyToSpend = 9;

// function enoughMoney(costOfItems,moneyToSpend) { 
//     let totalCost = 0;
//     for (let i=0; i < costOfItems.length; i ++){
//         totalCost += costOfItems[i];
//     }
//     return moneyToSpend >= totalCost;
// }

// enoughMoney(costOfItems, moneyToSpend) ? console.log ("true") : console.log ("false");

// // Part 2
// // this code doesnt work 
// const discountList = [.15, .20, .3]
// const costOfItems = [4, 3, 5];
// const moneyToSpend = 9;

// function enoughMoney(costOfItems,moneyToSpend, discountList) { 
//     let discountedCost = 0;
//     for (let i=0; i < costOfItems.length; i ++){
//         discountedCost = (discountList[i] * costOfItems[i]) + costOfItems[i]
//     }
//     return discountedCost;
// }

// console.log(enoughMoney(costOfItems,moneyToSpend,discountList));

// // END Hackbright Question Retry

// Arrow functions are not indicated for all use cases. its usually used for one-liner functions

// END 35. Arrow Functions 

//////////////////////////////////////////////////////////////////////////

// // 36. Functions Calling Other Functions

// const cutFruitPieces = function(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice was made with ${applePieces} piece(s) of apple and 
//     ${orangePieces} piece(s) of orange.`;
//     return juice;
// }

// console.log (fruitProcessor(2,4));

// // 36. END Functions Calling Other Functions

//////////////////////////////////////////////////////////////////////////////

// 37. Reviewing Functions

// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }

// // remember that the "birthYear" parameter is unique to each individual 
// // function. so the above and below "birthYear" are completely unrelated
// // they could be replaced with different names, and it would do the same thing
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log (`${firstName} retires in ${retirement} years`);
//         return retirement; // return statement immediately exits after read, so rest is ignored
//     } else {
//         console.log (`${firstName} has already retired!`); // use ALT UP
//         return -1;
//     }
// }

// console.log (yearsUntilRetirement(1991, 'Muzamil'));
// console.log(yearsUntilRetirement(1970, 'Mike')); // returns -2 retirement

// // // Functions Review: 3 Different Function Types

// // //Function Declaration: Function that can be used before it's declared
// // function calcAge(birthYear){
// //     return 2037 - birthYear;
// // }

// // //Function Expression: Essentially a fucntion value storeed in a variable
// // const calcAge = function (birthYear) {
// //     return 2037 - birthYear;
// // }

// // //Arrow Function: Great for a quick one-line function. Has no "this" keyword (covered later in course)
// // const calcAge = birthYear => 2037 - birthYear;

// // // END 37. Reviewing Functions

// // 38. Coding Challenge #1

// /*
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
// gymnastics discipline, which works differently. 
// Each team competes 3 times, and then the average of the 3 scores is calculated (so 
// one average score per team). 
// A team only wins if it has at least double the average score of the other team. 
// Otherwise, no team wins! 
// Your tasks: 
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores 
// 2. Use the function to calculate the average for both teams 
// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)" 
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
// Data 2 
// 5. Ignore draws this time 
// Test data: 
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 
// Hints: 
// § To calculate average of 3 values, add them all together and divide by 3 
// § To check if number A is at least double number B, check for A >= 2 * B. 
// Apply this to the team's average scores 😉 

// GOOD LUCK 😀 
// */

// const calcAverage = (value1, value2, value3) => ((value1+value2+value3)/3);

// // // Data Set 1 
//     let dolphinsAVG = calcAverage (44, 23, 71);
//     let KoalasAVG = calcAverage (65, 54, 49);
// console.log (dolphinsAVG, KoalasAVG)
// const checkWinner = function(dolphinsAverage,koalasAverage) {

//     if (dolphinsAverage >= (koalasAverage)) {
//         console.log(`Dolphins Win! (${dolphinsAverage} vs ${koalasAverage}})`);
//     } else if (koalasAverage >= (2*dolphinsAverage)) {
//         console.log(`Koalas Win! (${koalasAverage} vs ${dolphinsAverage})`);
//     } else {
//         console.log(`No Team wins`);
//     }
// }

// checkWinner(dolphinsAVG,KoalasAVG);

// // Data Set 2
// dolphinsAVG = calcAverage (85, 54, 41);
// KoalasAVG = calcAverage (23, 34, 27);
// console.log (dolphinsAVG, KoalasAVG)
// checkWinner(dolphinsAVG,KoalasAVG);

// // END 38. Coding Challenge #1
////////////////////////////////////////////////////////////////////////////////////////////

// // 39. Arrays 

// const friend1 = 'Micheal';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log (friends);


// //           this is another way to write an array 
// const years1 = new Array (1991, 1984, 2008, 2020);

// console.log (friends[0]); //Micheal
// console.log(friends[2]); // Peter

// console.log(friends.length)// length is a property that gives the exact number of elements in an array. 
// // length property is NOT zero based // 3 

// console.log(friends[friends.length - 1]); //retrieves the last element in an array // Peter
// // this is because friends.length is not zero based, you subtract 1
// // expressions are something that produce a value, so thats why you can put it in a console.log
// // inside of square brackets javascript expects an expression, not a statement 

// friends[2] = 'Jay'; // to replace element in [2]
// console.log(friends); // Micheal, Steven, Jay

// // ONLY PRIMATIVE VALUES ARE IMMUTABLE. BUT ARRAYS ARE NOT PRIMATIVE VALUES 
// // So you can mutate arrays even though they were declared with const
// // what you cant do is replace the entire array with new values. like 
// // friends = ['Bob', 'Alice']; // this is not allowed. 

// const firstName = 'Muzamil';
// const muzamil = [firstName, 'Haq', 2037 - 1991, 'teacher', friends]; //friends array within an array
// console.log(muzamil);
// console.log(muzamil.length); //5

// // Exercise
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// } 

// const years = [1990, 1967, 2002, 2010, 2018]; //each year is called an element in an array

// console.log(calcAge2 (years)); // this wont work because years is an array // NaN

// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[1]);
// const age3 = calcAge2(years[years.length -1]);
// console.log(age1,age2,age3);

// const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length - 1])];
// console.log(ages);

// // END 39. Arrays

////////////////////////////////////////////////////////////////////////////////////////

// 40.Basic Array Operations (Methods)
//const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }


// END 40.Basic Array Operations (Methods)
///////////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input 
and returns the corresponding tip, calculated based on the rules above 
(you can check out the code from first tip calculator challenge if you need to). 
Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the 
function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// My Version
// function calcTip (billValue) {
//     let tip = 0;
//     if (billValue >= 50 && billValue <= 300) {
//         tip = (billValue * .15);
//     }
//         else {
//         tip = (billValue * .2); 
//         }
//     return tip; 
//     }

// console.log (calcTip(100)); 

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [(tips[0]+bills[0]),(tips[1]+bills[1]), (tips[2]+bills[2])];

// console.log (total[0], total[1], total [2]);

// Jonas's Version

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
//   // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  
//   const bills = [125, 555, 44];
//   const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//   const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  
//   console.log(bills, tips, totals);

// // My second attempt for practice 
// const calcTip = function(billValue) {
//     let final = 0;
//     if (billValue >= 50 && billValue <= 300) {
//         final = billValue * .15;
//     } else {
//         final = billValue * .20;
//     }
//     return final; 
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log (totals[0], totals[1], totals[2]);
// console.log (bills, tips, totals); // this displays all the values in each array

// // END Coding Challenge #2

//////////////////////////////////////////////////////////////////////////////////////////

// // 42.Introduction to Objects 

// const jonasArray = [
//     'Jonas', 
//     'Shemedman', 
//     2037-1991, 
//     'teacher', 
//     ['John', 'Luke', 'Mike']
// ];
// console.log (jonasArray);

// // Use Objects to give each of these values a name. 
//   const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };
  
// // END 42. Introduction to Objects 

///////////////////////////////////////////

// // 43. Dot vs. Bracket Notation

//   const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };
//   console.log(jonas);
  
//   console.log(jonas.lastName); // dot notation can only be used with the real property name. not a computed one
//   console.log(jonas['lastName']); 
  
//   const nameKey = 'Name';
//   console.log(jonas['first' + nameKey]); // You can use bracket notation to perform expression that help compute a property name 
//   console.log(jonas['last' + nameKey]);
  
//   // console.log(jonas.'last' + nameKey) // this does not work because it is dot notation. only works with bracket notation
  
//   const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
  
// console.log (interestedIn); 

// //// console.log(jonas.interestedIn); // enter "job" in prompt will return "undefined" bc you're trying to access a property that doesnt exist
// //// this is because interestedIn is considered a computed value (since interestedIn a function)
// //// you will need bracket notation for computed values. dot notation only works by writing out the specific property


// console.log (jonas[interestedIn]); // enter "job" in prompt will return "teacher"
// // entering the a specific property in the bracket notation will return a value

// // remember that undefined is a falsy value !!!

//   if (jonas[interestedIn]) { //if a value exists then its truthy 
//     console.log(jonas[interestedIn]); // then this executes
//   } else { // else this executes
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
//   }
  
//   jonas.location = 'Portugal'; // adds a property called location and a value called portugal 
//   jonas['twitter'] = '@jonasschmedtman';
//   console.log(jonas);
  
//   // Challenge
//   // "Jonas has 3 friends, and his best friend is called Michael"
//   console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
// //   ///////////////////////////////////////
  
//   // END 43. Dot vs. Bracket Notation

///////////////////////////////////////

// // 44. Object Methods (using 'this')

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
  
    // calcAge: function (birthYear) {
    //   return 2037 - birthYear;
    // }
  
    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYear;
    // }
  
    // calcAge: function () {
    //   this.age = 2037 - this.birthYear;
    //   return this.age;
    // },

//     calcAge: function () {
//       this.age = 2023 - this.birthYear;
//       return this.age;
//     },

//     driverLicense : function(){
//         if (this.hasDriversLicense) {
//             return `he has a driver's license`;
//         } else return `he doesn't have a driver's license`; 
//     },

//     templateOutput : function(){
//         return(`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and ${this.driverLicense()}`);
//     }
// }

//     console.log (jonas.templateOutput());

//   console.log(jonas.calcAge());
  
//   console.log(jonas.age);
//   console.log(jonas.age);
//   console.log(jonas.age);

//   Challenge
//   "Jonas is a 46-year old teacher, and he has a driver's license"
//   console.log(jonas.getSummary());

// Jonas's Version of the Challenge

//     getSummary: function () {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
//   };

// // Practice Challange Muzamil Attempt
// // print "Muzamil is a 32 year old teacher and has a drivers license." using objects 

// const muzamil = {
//     firstName: 'Muzamil',
//     occupation: 'Teacher',
//     birthYear: 1991,
//     license: true,
//     birth : function() {
//         this.age = (2023 - this.birthYear);
//         return this.age;
//     },
//     hasLicense : function(){
//        if (this.license){
//         return `has a drivers license`;
//        } else {
//         return `doesn't have a drivers license`;
//        }
//     }
    
// }
// muzamil.birth(); // this is declared here because it needs to be stated for it to be called with "muzamil.age" in the template literal.
// // muzamil.hasLicense(); // 
// console.log(`${muzamil.firstName} is a ${muzamil.age} year old ${muzamil.occupation} and ${muzamil.hasLicense()}.`);

// // END Practice Challange Muzamil Attempt

// // Arrays are also objects thats why you can use methods on them as well

// //// END 44. Object Methods (using 'this')

//////////////////////////////////////////////////////////////////////

// // 45. Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, 
let's use objects to implement the calculations! Remember: 
BMI = mass / height ** 2 = mass / (height * height). 
(mass in kg and height in meter)

1. For each of them, create an object with properties 
for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the 
BMI (the same method on both objects). 
Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, 
together with the full name and the respective BMI. 
Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

//BMI = mass / height ** 2 = mass / (height * height)

// // // My Answer
// const bmiCalculator = {
//     firstName : ['Mark', 'John'],
//     lastName : ['Miller', 'Smith'],
//     mass : [78, 92],
//     height : [1.69, 1.95],
//     calcMarkBMI : function(){
//         return (this.mass[0] / (this.height[0]**2)).toFixed(1); // toFixed(1) is a "method' to round to one decimal place
//     }, 
//     calcJohnBMI : function(){
//         return (this.mass[1] / (this.height[1]**2)).toFixed(1); 
//     }, 
//     endStatement : function () {
//         if (this.calcMarkBMI() > this.calcJohnBMI()) {
//             return `${this.firstName[0]} ${this.lastName[0]}'s BMI (${this.calcMarkBMI()}) is higher than ${this.firstName[1]} ${this.lastName[1]}'s BMI (${this.calcJohnBMI()})!`;
//         } else if (this.calcMarkBMI() === this.calcJohnBMI()) {
//             return `Both have the same BMI!`
//         }
//         else return `${this.firstName[1]} ${this.lastName[1]}'s BMI (${this.calcJohnBMI()}) is higher than ${this.firstName[0]} ${this.lastName[0]}'s BMI (${this.calcMarkBMI()})!`;
//     }
// }

// console.log (bmiCalculator.endStatement()); //John Smith's BMI (24.194608809993426) is higher than Mark Miller's BMI (27.309968138370508)!

// // // End of My Answer :)


// // // Coding Challenge 3 practice 04/14/23

// /*
// Let's go back to Mark and John comparing their BMIs! This time, 
// let's use objects to implement the calculations! Remember: 
// BMI = mass / height ** 2 = mass / (height * height). 
// (mass in kg and height in meter)

// 1. For each of them, create an object with properties 
// for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the 
// BMI (the same method on both objects). 
// Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, 
// together with the full name and the respective BMI. 
// Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// GOOD LUCK 😀
// */

// // BMI = mass / height ** 2 = mass / (height * height)

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: '1.69',
//     calcBMI: function() {
//         this.BMI = (this.mass / (this.height**2));
//         return this.BMI;
//     },
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: '1.92',
//     calcBMI: function() {
//         this.BMI = (this.mass / (this.height**2));
//         return this.BMI;
//     }, 
//     compareBMI: function(){
//         mark.calcBMI();
//         this.calcBMI();
//         if (mark.BMI>john.BMI){
//             console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`);
//         } else if (john.BMI<mark.BMI) {
//             console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`);
//         } else {
//             console.log(`They both have the same BMI!`);
//         }
//      }
// }

// john.compareBMI();

// // // END Coding Challenge 3 practice 04/14/23



// // // // Jonas's Answer 

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78, 
//     height: 1.69, 
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 98, 
//     height: 1.95, 
//     calcBMI: function(){  // Having the same piece of code works in both objects 
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// };

// mark.calcBMI(); // YOU HAVE TO CALL THE FUNCTION TO INITALIZE IT. otherwise the function doesnt execute and you will retrieve an "undefined value"
// /*To calculate Mark's BMI, you can call the calcBMI method 
// on the mark object like this: mark.calcBMI(). 
// This will calculate Mark's BMI and store it as a property of the mark object.
// To access Mark's BMI value, you can simply access the bmi property of the mark object 
// like this: mark.bmi.
// */
// /* SO IF YOU DONT CALL ON THE FUNCTION THEN IT IS NOT STORED INTO THE OBJECT FOR WHEN 
// YOU CONSOLE.LOG IT. THIS IS WHY IT COMES BACK AS UNDEFINED. */

// console.log(mark.bmi); // 27.309968138370508

// john.calcBMI();
// console.log(john.bmi); // 25.77251808021039

// console.log (mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log (`${mark.fullName}'s BMI (${mark.BMI}`);
// }


// // // // End of Jonas's Answer 

// // // END 45. Challenge #3

/////////////////////////////////////////////////////////////////

// 46. Iteration: The For Loop



// END 46. Iteration: The For Loop

///////////////////////////////////////////////////////////////////////////////////////////

////  // 47. Looping Arrays, Breaking, and Continuing 

//
///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   }
  
  
//// 46. END Iteration: The for loop 

  ///////////////////////////////////////////////////////////////////////////////////////////
  
//  //// 47. Looping Arrays, Breaking, Continuing 
  
//   const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
//   ];
 
//   const types = []; // this is an initialization of an empty "types" array

// //   console.log(jonas[0])
// //   console.log(jonas[1])
// //   ...
// //   console.log(jonas[4])
// //   jonas[5] does NOT exist
  
// //   for (let i = 0; i < jonas.length; i++) {
// //     // Reading from jonas array
// //     console.log(jonas[i], typeof jonas[i]);
// //     // Filling types array
// //     types[i] = typeof jonas[i];
// //     // Another way to do the same this is adding elements to an array with push element (push adds element to an end of an array)
// //     types.push(typeof jonas[i]); // this is actually a cleaner version. so this is preferable to the previous one
// //   }

// // console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// /* PRACTICE ATTEMPT 
// for (let i = 0; i < years.length; i++){
//   ages[i] = 2023 - years[i];
// }
// console.log(ages);
// */

// for (let i = 0; i < years.length; i++){
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// ITS REALLY IMPORTANT TO UNDERSTAND  THE ABOVE SNIPPIT OF CODE. HOW TO ITERATE THROUGH AN ARRAY

// //////////////////////////
// // contintue and break 

// /*  *CONTINUE* 
// In JavaScript, continue is a keyword used inside loops 
// (such as for, while, or do-while) to skip the current iteration 
// of the loop and move on to the next one.
// so conintue means to skip over
// */

//   console.log('--- ONLY STRINGS ---') // this prints only string values of the jonas array
//   for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue; // continue (AKA skip over the iteration) if type of element is NOT a string 
    
//     console.log(jonas[i], typeof jonas[i]);
//   }


//  /* *BREAK*
// In JavaScript, break is a keyword used inside loops 
// (such as for, while, or do-while) to immediately terminate 
// the loop and exit its code block.
// So, break is used to exit the entire loop, (not just the current iteration as in contintue)
// */

//   console.log('--- BREAK WITH NUMBER ---')

// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas [i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// /* So After the first number is found, nothing is printed
// and the loop is broken */


//   for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
  
//     console.log(jonas[i], typeof jonas[i]);
//   }
  
//   //// END 47. Looping Arrays, Breaking, and Continuing 

//   ///////////////////////////////////////////////////////////////////////////

// //// 48. Looping Bakcwards, and loops in loops

//   const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//   ];

// // 0, 1, ..., 4
// // 4, 3, ...,5

// for (let i = (jonas.length - 1); i >= 0; i--){
//   console.log (i, jonas[i])
// }

// // // a for loop inside a for loop
// // for(let exercise = 1; exercise < 4; exercise++) {
// //   console.log( `------ Starting Exercise ${exercise}`);
  
// //   for(let rep = 1; rep < 6; rep++) {
// //     console.log( `Lifting weight repetition ${rep} 🎉`);
// //   }
// // }

// // // // same loop except now includes each exercise set # with each rep
// // for(let exercise = 1; exercise < 4; exercise++) {
// //   console.log( `------ Starting Exercise ${exercise}`);
  
// //   for(let rep = 1; rep < 6; rep++) {
// //     console.log( `Exercise ${exercise}: Lifting weight repetition ${rep} 🎉`);
// //   }
// // }

// //// END 48. Looping Bakcwards, and loops in loops

// ///////////////////////////////////////////////////////////////////////////////////////////////

// // 49. The While Loop

// /*  initialize counter; set condtion; increment/decrement */
// for(let rep = 1; rep <= 10; rep++) {
//     console.log( `Lifting weight repetition ${rep} 🎉`);
//   }


// /* 
// The While loop runs only when a conditional statement is true
// - The benefit of a while loop is that it is more verstile than a for loop
// - the conditional statement does not have to be related to the counter,
// it can be any conditional statement. 
// - Does not depend on a counter! 
// */  
// let rep = 1;
// while(rep<=10) {
//   console.log( `Lifting weight repetition ${rep} 🎉`);
//   rep++
// }

// /* create a loop where yo roll a die and it keeps 
// running until you roll a 6 
// - A use case where you dont know what random number you will stop 
// at is the excatly the type of use case for a while loop */ 

// /* Math.trunc gets rid of decimals */
// // let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// let dice = 0
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`Loop is about to end...`);
// }

// /* 
//   - the lesson for this is that you dont have to have a counter for a while loop
//   - SO if you dont know how many times the loop is going to run, Use a while loop
//   - If you know how many times an iteration will run, you should probably 
//     use a for loop
// */ 
// // END 49. The While loop

///////////////////////////////////////////////////////////////////////////////////////////////////

// 50. Coding Challenge # 4 THE FINAL CODING CHALLENGE 
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips 
and total values (bill + tip) for every bill value in the bills array. 
Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to 
the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
This function calculates the average of all numbers in the given array. 
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];

// const totals = [];

// //3. Use the 'calcTip' function we wrote before 
// //(no need to repeat) to calculate tips and total values 
// //(bill + tip) for every bill value in the bills array. 
// //Use a for loop to perform the 10 calculations!

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }

//   // const bills = [125, 555, 44];
//   // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//   // const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
  
// for (let i = 0; i < 10; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
//   console.log(i, bills[i], tips[i], totals[i]);
// } 

/*
4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
This function calculates the average of all numbers in the given array. 
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition,
   start by creating a variable 'sum' that starts at 0. 
   Then loop over the array using a for loop. In each iteration, 
   add the current value to the 'sum' variable. This way, by the end of the loop, 
   you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the 
  length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
*/



const arr = [4, 25, 6, 8, 26, 55];
const totalz = [];

const calcAverage = function(arr) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    avg = (sum / (i + 1));
    totalz.push(avg);
  }
  return totalz;
}

console.log(calcAverage(arr));






// console.log (calcAverage(arr[i]));





// END 50. Coding Challenge # 4 THE FINAL CODING CHALLENGE 

//////////////////////////////////////////////////////////////////////////////////////////////////


// const words = [
//   'monkey', 
//   'banana', 
//   'bully', 
//   'candy'
// ]

// const bLetters = function(words){
//   for (let i = 0; i < words.length; i++){
//     if (words[i] === 'b' || words[i] === 'B'){
//       console.log(i)
//     }
//   }
// }




// const numbers = [5, 10, 10, 20]
// const spend = 55;

// const haveEnough = function(numbers){
//   let addNumbers = 0;    
//   let i = 0;
//   while (i < numbers.length) {
//     i++;
//     addNumbers = addNumbers + numbers[i]; 
//   }
// j8
// addNumbers >= spend
// console.log (haveEnough(numbers));


// const numbers = [55, 32, 54, 41];
// const money = 250;
// let totalCost = 0; 

// const haveEnough = function(){ 
//   totalCost = numbers[0] + numbers[1] + numbers [2] + numbers[3];
//   if (money > totalCost) {
//     return true
//   }     
// }

// console.log(haveEnough());


// const numbersList = [25, 31, 42];
// const money = [150];

// const enoughMoney = function (numbersList, money){
//   let totalCost = 0;
//   for (let i = 0; i < numbersList.length; i++){
//     totalCost = totalCost + numbersList[i];
//   }
//   if (totalCost > money)
//   return true;
// }

// console.log (enoughMoney())

// Coding Challenge #2

/*
Steven is still building his tip calculator, 
using the same rules as before: 
Tip 15% of the bill if the bill value is between 50 and 300, 
and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input 
and returns the corresponding tip, calculated based on the rules 
above (you can check out the code from first tip calculator challenge 
  if you need to). Use the function type you like the most. Test the function 
  using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, 
calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, 
and that value can actually be the returned value of a function! 
So you can just call a function as array values (so don't store the tip 
values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calcTip = function(billValue){
let tip = 0;
  if (billValue > 50 && billValue < 300){
    tip = .15 * billValue
  } else tip = .20 * billValue; 
  return tip;
}

// console.log (calcTip(380));

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; 

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals);


const reps = [25, 10, 18, 92, 55, 68]

for (let i = 0; i < reps.length; i++){
  console.log(`This is a ${reps[i]} set exercise`);
}

const jonas = [
    'Jonas', 
    'Shemedman', 
    2037-1991, 
    'teacher', 
    ['John', 'Luke', 'Mike']
];
console.log (jonas);


for (let i = 0; i < jonas.length; i++){
  console.log(jonas[i], typeof jonas[i]);
}

let types = [];

for (let i = 0; i < jonas.length; i++){
  types[i] = typeof jonas[i]; 
}

console.log (types);

