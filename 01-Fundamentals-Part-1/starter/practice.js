// 4. Birth year conditionals 

// const programmerUN = 'programmerLady321';
// const coolUN = 'cool_coder13';
// const sarahUN = 'sarah_hacks';

// const programmerYear = 1998;
// const coolYear = 1982;
// const sarahYear = 1998;

// console.log (`${programmerUN}
// ${coolUN}
// ${sarahUN}`);

// if (programmerYear === sarahYear) {
//     console.log(`YES born in the same year`)
// } 

// console.log(programmerUN.length);

// if (programmerUN.length > 12) {
//     console.log (`NO Username too long`)
// }

// END 4. Birth year conditionals 

// 5. Planet Loops

//part 1
// for (let i = 70; i < 86; i++) {
//     console.log(i);
// }

//part2

// const planets = ['Haumea', 'Eris', 'Pluto', 'Makemake', 'Ceres'];

// for(let i = 0; i < planets.length; i++){
//     console.log(planets[i]);
// }

//dummy data practice
// const turtles = ['Raffy', 'Don', 'Mike', 'splinter'];
// turtles.push('Lion', 'bat');

// for (let i = 0; i < turtles.length; i++){
//     console.log(turtles[i]);
// }

//part 3

// const planets = ['Haumea', 'Eris', 'Pluto', 'Makemake', 'Ceres'];

// for (let i = 0; i < planets.length; i++) {
//     if (planets[i].length < 6){
//         console.log(planets[i]);
//     }
// }

// part 4


// test yourself on questions 
// Question # 5 
// // part 1

// for (let i = 70; i < 86; i++){
//     console.log(i);
// }

// // part 2

// const planets = ['Haumea', 'Eris', 'Pluto', 'Makemake', 'Ceres']

// for (let i = 0; i < planets.length; i++){
//     console.log(planets[i]);
// }

//Part 3
// const planets = ['Haumea', 'Eris', 'Pluto', 'Makemake', 'Ceres'];
// for (let i=0; i < planet.length; i++){
//   if (planets[i].length < 6) {
//     console.log (planets[i]);
//   }
// }

//Part 4 
// const planets = ['Haumea', 'Eris', 'Pluto', 'Makemake', 'Ceres'];
// const planetYears = ['283', '561', '248', '310', '5'];

// for (i = 0; i < planets.length; i++) {
//   if (planetYears[i] > 10) {
//     console.log(`LONG YEAR`);
//   } else if (planetYears[i] < 10) {
//     console.log(`CLOSE TO EARTH YEAR`);
//   }
// }
// for (i = 0; i < planets.length; i++) {
// console.log(`A year on ${planets[i]} is ${planetYears[i]} Earth Years.`);
// }
// End Question #5

// // Question # 6 Geology Dig

// const geologyObjects = ['rock','rock', 'rock', 
// 'gemstone', 'gemstone', 'fossil', 'concrete', 
// 'concrete', 'concrete', 'fossil', 'rock']

// for (let i = 0; i < geologyObjects.length; i++){
//     if (geologyObjects[i] === 'rock' || geologyObjects[i] === 'concrete') {
//         console.log (`DISCARD ${[i]}`);
//     } else {
//         console.log(`DONATE TO MUSEUM ${geologyObjects[i]}`)
//     }
// }
// // End Question # 6 Geology Dig

// geology dig practice 3/24/2023
// const geologyObjects = [
//     'rock', 'rock', 'rock',
//     'gemstone', 'gemstone', 'fossil', 
//     'concrete', 'concrete', 'concrete',
//     'fossil','rock'];

// for (let i = 0; i < geologyObjects.length; i++){
//     if (geologyObjects[i] === 'rock' || geologyObjects[i] === 'concrete'){
//         console.log(`DISCARD ${[i]}`)
//     }
//         else {
//             console.log(`DONATE TO MUSEUM ${geologyObjects[i]}`);
//         }
//     }
// end geology dig practice 3/24/2023





// Question 7 

//const userInput = prompt(`Enter the map using ")" and "("`)

// const userInput = ['(', ')', ')', ')','('];

// let i = 0;
// function goUp () {
//     if (userInput[i] === "("){
//         userInput i++
//     }
// }


// Skills verification Question 1
// const variableOne = Number(prompt(`What is Variable One?`));
// const variableTwo = Number(prompt(`What is Variable Two?`));

// console.log (`The sum is ` + (variableOne + variableTwo));
// END Skills verification Question 1 

// Index B Words

// const wordsArray = ['apple', 'berry', 'cherry', 'banana'];

// function bFunction (){ 
//     for (let i = 0; i < wordsArray.length; i++){
//         if (wordsArray[i].startsWith('b') || wordsArray[i].startsWith('B')){
//             console.log ([i]);
//         }
//     }
// }
// bFunction()

// //Index B End

// Index B Words Chat GPT

// const words = ['banana', 'apple', 'blackberry', 'cherry', 'blueberry'];


// function findBWords(words) {
//     const bWordsIndices = [];
//     for (let i = 0; i < words.length; i++) {
//       if (words[i][0] === 'b') {
//         bWordsIndices.push(i);
//       }
//     }
//     return bWordsIndices;
//   }

// const bWordsIndices = findBWords(words);
// console.log(bWordsIndices); // Output: [0, 2]
// END Index B Words Chat GPT


// const itemCosts = [1.99, 2.49, 1.79];
// const budget = 10;

// function canBuyAllItems(itemCosts, budget) {
//     let totalCost = 0;
//     for (let i = 0; i < itemCosts.length; i++) {
//       totalCost += itemCosts[i];
//     }
//     return totalCost <= budget;
//   }



// if (canBuyAllItems(itemCosts, budget)) {
//   console.log('You can buy all the items!');
// } else {
//   console.log('You don\'t have enough money to buy all the items.');
// }