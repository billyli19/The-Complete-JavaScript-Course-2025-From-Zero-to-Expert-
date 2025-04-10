const COUNTRY = "Netherlands";
const CONTINENT = "Europe";
let population = 17.88;

console.log("Country: ", COUNTRY);
console.log("Continent: ", CONTINENT);
console.log("Population: ", population);

const IS_ISLAND = false;
const LANGUAGE = "Dutch";

console.log("Is Island: ", IS_ISLAND);
console.log("Language: ", LANGUAGE);

let halfPopulation = population / 2;
console.log("Half Population: ", halfPopulation);

population++;

console.log("Population: ", population);

let finlandPopulation = 6;
console.log(population > finlandPopulation);

let averagePopulation = 33;
console.log(population < averagePopulation);

let description = `${COUNTRY} is in ${CONTINENT}, and its ${population} million people speak ${LANGUAGE}`;
console.log(description);

if (population > averagePopulation) {
  console.log(`${COUNTRY}'s population is above average`);
} else {
  console.log(
    `${COUNTRY}'s population is ${
      averagePopulation - population
    } million below average`
  );
}

console.log("9" - "5"); // -> SyntaxError: Invalid or unexpected token
console.log("19" - "13" + "17"); // -> SyntaxError: Invalid or unexpected token
console.log("19" - "13" + 17); // -> SyntaxError: Invalid or unexpected token
console.log("123" < 57); // -> SyntaxError: Invalid or unexpected token
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> SyntaxError: Invalid or unexpected token

// let numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// numNeighbours = Number(numNeighbours);

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

const COUNTRY_LANGUAGE = "English";
const COUNTRY_POPULATION = 50;
const COUNTRY_IS_ISLAND = false;

if (
  COUNTRY_LANGUAGE === "English" &&
  COUNTRY_POPULATION < 50 &&
  !COUNTRY_IS_ISLAND
) {
  console.log(`You should live in ${COUNTRY}`);
} else {
  console.log(`${COUNTRY} does not meet your criteria`);
}

// let choiceLanguage = prompt("What is your favorite language?");

// switch (choiceLanguage) {
//   case "Chinese":
//   case "Mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "Spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "English":
//     console.log("3rd place");
//     break;
//   case "Hindi":
//     console.log("Number 4");
//     break;
//   case "Arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

COUNTRY_POPULATION > 33
  ? console.log(`${COUNTRY} population is above average`)
  : console.log(`${COUNTRY} population is below average`);
