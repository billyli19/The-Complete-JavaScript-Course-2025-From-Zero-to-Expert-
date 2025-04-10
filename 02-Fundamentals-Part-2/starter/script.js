// "use strict";

// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) hasDriverLicense = true;

// // if (hasDriversLicense) console.log("I can drive :D");

// // const interface = "Audi o";
// // const private = 534;

// function logger() {
//   console.log("My name is Billy");
// }

// // Calling / running / invoking the function
// // logger();
// // logger();
// // logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// // Function Declaration
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }

// const age1 = calcAge1(1991);
// // console.log(age1);

// // Function Expression
// const age2 = function (birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// };
// // console.log(age2(1991));

// // Arrow Function
// const age3 = (birthYear) => 2023 - birthYear;
// // console.log(age3(1991));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// // console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };

// console.log(yearUntilRetirement(1991, "Billy"));
// console.log(yearUntilRetirement(1950, "Mike"));

// const calcAverage = (scoreOne, scoreTwo, scoreThree) => {
//   const average = (scoreOne + scoreTwo + scoreThree) / 3;
//   return average;
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log("Dolphins win (${avgDolphins} vs. ${avgKoalas})");
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log("Koalas win (${avgKoalas} vs. ${avgDolphins})");
//   } else {
//     console.log("No team wins...");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// // Add elements
// friends.push("Jay");
// console.log(friends);

// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends[0]);

// console.log(friends.includes("Steven"));

// const billyArray = [
//   "Billy",
//   "Miller",
//   2023 - 1991,
//   "teacher",
//   ["Michael", "Steven", "Peter"],
// ];

// console.log(billyArray);

// const billy = {
//   firstName: "Billy",
//   lastName: "Miller",
//   birthYear: 1999,
//   job: "teacher",
//   friends: ["Michael", "Steven", "Peter"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year-old ${
//       this.job
//     }, and he ${
//       this.hasDriversLicense ? "has" : "doesn't have"
//     } a driver's license`;
//   },
// };

// console.log(billy);

// // const interestedIn = prompt(
// //   "What do you want to know about Billy? Choose between firstName, lastName, age, job, and friends."
// // );

// // if (billy[interestedIn]) {
// //   console.log(billy[interestedIn]);
// // } else {
// //   console.log(
// //     "Wrong request! Choose between firstName, lastName, age, job, and friends."
// //   );
// // }

// // Challenge
// // "Billy has 3 friends, and his best friend is called Michael"

// console.log(
//   `${billy.firstName} has ${billy.friends.length} friends, and his best friend is called ${billy.friends[0]}`
// );

// console.log(billy.calcAge());
// console.log(billy.age);

// // Challenge
// // "Billy is 24 years old teacher, and he has a driver's license"

// console.log(billy.getSummary());

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 169,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 195,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
//   );
// } else {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
//   );
// }

/* Write your code below. Good luck! 🙂 */

// 1. Create an array called bills containing all 10 tet bill values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2. Create empty arrays for the tips and the totals (tips and totals);
const tips = [];
const totals = [];

// 3. Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array.Use a for loop to perform the 10 calculations!
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tipAmount = calcTip(bills[i]);
  const tip = bills[i] + tipAmount;
  tips.push(tipAmount);
  totals.push(tip);
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const avg = sum / arr.length;
  return avg;
}

console.log(bills);
console.log(tips);
console.log(totals);

console.log(calcAverage(totals));
