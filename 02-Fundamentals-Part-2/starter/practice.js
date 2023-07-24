'use strict';

// Coffee Shop Orders


// const drinks = ['coffee','coffee', 'coffee', 'coffee' ];
// const previous = [];

// const isSuccessful = function(drinks){
//   let previous = drinks[0];   
//   let counter = 0;
     
//     for (let i =0; i < drinks.length;i++){
//     if (previous[i] === drinks[i]) {
//       counter++;
//     }
//     if (counter >= 2) {
//       return console.log ("true");
//     } else return false 
//   }
// }
// isSuccessful(drinks);

/* 
8. Coffee Shop Order 
(if there are two repeat orders, add to a counter)
Complete the 'wasMorningASuccess' function below.
- the function is expected to return a BOOLEAN
- the function accepts STRING_ARRAY drinks as parameter. 
*/

// const wasMorningASuccess = function(drinks) {
//   let previous = drinks[0];
//   let numRepeats = 0;
//   for (let i = 0; i < drinks.length; i++){
//     if (previous == drinks[i]){
//       numRepeats++;
//     }
//     previous = drinks[i];
//   }
//   if (numRepeats >= 2) {
//     return true;
//   } 
// }

// // test data
// const drinks = ['water', 'ice', 'coffee', 'coffee']
// // I dont think it works 
// console.log(wasMorningASuccess(drinks));



/*
// // 7. Tower of traverse 
// /////////  Treasure map with "((()) string )
// // *complete the 'getTreasureFloor' function below
// // *the function is expected to return an Interger
// // *The function accepts STRING treasureMap as parameter 
// // This function iterates through a STRING
*/
// const getTreasureFloor = function(treasureMap){
//   let currentFloor = 0;
//   for (let i = 0; i < treasureMap.length; i++){
//      if (treasureMap[i] == ')') {
//     currentFloor++
//   } else if (treasureMap[i] == '('){
//     currentFloor--
//   }
//   }
//   return currentFloor;
// }
// // Test to see if works 
// console.log (getTreasureFloor('))))('));



/* 
///////////////////////////////////////////////////////////////////////////////////////////
// Q2. Shopping List 
// Part 1
// // */

// function canBuyAllItems(shoppingList, money) {
//   let totalCost = 0;
//   for (let i = 0; i < shoppingList.length; i++) {
//     totalCost += shoppingList[i];
//   }
//   if (totalCost <= money) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // test data 
// const shoppingList = [25,33,14,10,18];
// const money = 122;
// console.log (canBuyAllItems(shoppingList,money));

// // Part 2: Include a discounts Argument. 
// function canBuyAllItems(shoppingList, money, discounts) {
//   let totalCost = 0;
//   for (let i = 0; i < shoppingList.length; i++) {
//     let discount = discounts[i] || 0;
//     let priceAfterDiscount = shoppingList[i] - discount;
//     console.log(`Item ${i+1}: ${priceAfterDiscount}`);
//     totalCost += priceAfterDiscount;
//   }
//   if (totalCost <= money) {
//     console.log("You can buy all the items!");
//   } else {
//     console.log("You don't have enough money to buy all the items.");
//   }
// }

// // // Test Data
// const shoppingList = [25,33,14,10,18];
// const money = 120;
// const discounts = [2, 5, 0, 0, 3];
// canBuyAllItems(shoppingList, money, discounts);

/* END Q2. Shopping list 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/


/* PRACTICE */ ///////////////////////////////////////////////////////////////////////////////////////////////////////
// const saleDay = function(prices, money){
//   let totalCost = 0;
//   for (let i = 0; i < prices.length; i++){
//     totalCost = totalCost + prices[i];
//   }
//   return money >= totalCost;
// }

// console.log(saleDay([25, 35, 55, 18], 100000));


// const saleDay = function(prices, money, discounts){
//   let totalCost = 0;
//   for (let i = 0; i < prices.length; i++){
//     totalCost = totalCost + prices[i];
//   }

//   return money >= totalCost;
// }

// console.log(saleDay([25, 35, 55, 18], 100000));

// //WORKS GREAT Practice 2
// const saleDay = function(prices, money, discounts){
//   let costAfterDiscount = 0;
//   for (let i = 0; i < prices.length; i++){
//     costAfterDiscount = costAfterDiscount + (prices[i] + discounts[i]);
//     console.log (`For Item ${i+1} the discount is ${discounts[i]} and the cost after discount is ${prices[i] + discounts[i]}`)  
//   } 
//   if (costAfterDiscount >= money){
//     return `You dont ${costAfterDiscount} have enough Money ${money} `;
//   } else {
//     return `You do have (cost of all items: ${costAfterDiscount}) enough money ${money}.`;
//   }
// }

// // Test Data
// const prices = [25,33,14,10,18];
// const money = 120;
// const discounts = [2, 5, 0, 0, 3];
// console.log (saleDay(prices, money, discounts));


// const shoppingTrip = function(prices, money, discounts){
//   let totalCost = 0;
//   for (let i =0; i < prices.length; i++){
//     totalCost = totalCost + (prices[i] + discounts [i]);
//   }
//   if (money >= totalCost) {
//     return true;
//   }
// }
// // Test Data
// const prices = [25,33,14,10,18];
// const money = 120;
// const discounts = [2, 5, 0, 0, 3];
// console.log (shoppingTrip(prices, money, discounts));


/* Practice *//////////////////////////////////////////////////////////////////////////////////////////////////////////////
