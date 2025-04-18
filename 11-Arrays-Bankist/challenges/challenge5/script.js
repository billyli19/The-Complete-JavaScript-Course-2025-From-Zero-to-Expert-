// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
  { weight: 18, curFood: 244, owners: ["Joe"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).

console.log(" ==== Step 1 ====");
for (const dog of dogs) {
  recFood = Math.trunc(dog.weight ** 0.75 * 28);
  dog.recFood = recFood;
}

console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓

console.log("  ==== Step 2 ==== ");
const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(sarahDog);

if (sarahDog.curFood > sarahDog.recFood) {
  console.log("Sarah's dog is eating too much!");
} else if (sarahDog.curFood < sarahDog.recFood) {
  console.log("Sarah's dog is eating too little!");
} else {
  console.log("Sarah's dog is eating the exact amount of food!");
}

// 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).

console.log(" ====  Step 3 ==== ");
const result = Object.groupBy(dogs, (dog) =>
  dog.curFood > dog.recFood ? "ownerTooMuch" : "ownerTooLittle"
);

console.log(result);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

console.log(" ==== Step 4 ==== ");
console.log(
  `${result.ownerTooMuch
    .flatMap((dog) => dog.owners)
    .join(" and ")}'s dogs eat too much!`
);

console.log(
  `${result.ownerTooLittle
    .flatMap((dog) => dog.owners)
    .join(" and ")}'s dogs eat too little!`
);

// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)

console.log(" ==== Step 5 ==== ");
const isEatingExact = dogs.some((dog) => dog.curFood === dog.recFood);
console.log(isEatingExact);

// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)

console.log(" ==== Step 6 ==== ");
const isEatingOkay = dogs.every(
  (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(isEatingOkay);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

console.log(" ==== Step 7 ==== ");
const okayDogs = dogs.filter(
  (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(okayDogs);

// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.

console.log(" ==== Step 8 ==== ");
const groupDogs = Object.groupBy(dogs, (dog) => {
  if (dog.curFood > dog.recFood) return "too-much";
  if (dog.curFood < dog.recFood) return "too-little";
  return "exact";
});

console.log(groupDogs);

// 9. Group the dogs by the number of owners they have

console.log(" ==== Step 9 ==== ");
const groupByOwners = Object.groupBy(dogs, (dog) => dog.owners.length);
console.log(groupByOwners);

// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

console.log(" ==== Step 10 ==== ");
const sortedDogs = [...dogs].sort((a, b) => a.recFood - b.recFood);
console.log(sortedDogs);
