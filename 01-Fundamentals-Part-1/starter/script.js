// SECTION 2: JavaScript Fundamentals - Part 1
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Billy";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let billy_mat = "BM";
let $function = 27;

let person = "billy";
const PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Billy");

javascriptIsFun = "Yes!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

// Math operators
const NOW = 2037;
const AGE_BILLY = NOW - 1999;
const AGE_SARAH = NOW - 2018;
console.log(AGE_BILLY, AGE_SARAH);

console.log(AGE_BILLY * 2, AGE_BILLY / 10, 2 ** 3);

const FIRST_NAME = "Billy";
const LAST_NAME = "Li";
console.log(FIRST_NAME + " " + LAST_NAME);

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(AGE_BILLY > AGE_SARAH);
console.log(AGE_SARAH >= 18);
const IS_FULL_AGE = AGE_SARAH >= 18;
console.log(NOW - 1991 > NOW - 2018);


// Operator precedence
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);


const FIRST_NAME = "Billy";
const JOB = "programmer";
const BIRTH_YEAR = 1999;

const BILLY =
  "I'm " + FIRST_NAME + ", a " + (2021 - BIRTH_YEAR) + " year old " + JOB + "!";
console.log(BILLY);

const NEW_BILLY = `${FIRST_NAME} is a ${JOB}, and he was born in ${BIRTH_YEAR}`;
console.log(NEW_BILLY);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`);


const AGE = 15;

if (AGE >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const YEARS_LEFT = 18 - AGE;
  console.log(`Sarah is too young. Wait another ${YEARS_LEFT} years :)`);
}

const BIRTH_YEAR = 2012;
let century;
if (BIRTH_YEAR <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// Type conversion
const INPUT_YEAR = "1991";
console.log(Number(INPUT_YEAR), INPUT_YEAR);
console.log(INPUT_YEAR + 18);

console.log(Number("Billy"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");


// Truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Billy"));
console.log(Boolean({}));
console.log(Boolean(""));

const MONEY = 0;
if (MONEY) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// Equality operators
const AGE = 18;
if (AGE === 18) {
  console.log("You just became an adult :D (strict)");
}
if (AGE == 18) {
  console.log("You just became an adult :D (loose)");
}

const FAVORITE = Number(prompt("What's your favorite number?"));
console.log(FAVORITE);

if (FAVORITE === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (FAVORITE === 7) {
  console.log("7 is also a cool number");
} else if (FAVORITE === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// Logical operators
const HAS_DRIVER_LICENSE = true;
const HAS_GOOD_VISION = true;

console.log(HAS_DRIVER_LICENSE && HAS_GOOD_VISION);
console.log(HAS_DRIVER_LICENSE || HAS_GOOD_VISION);
console.log(!HAS_DRIVER_LICENSE);

const IS_TIRED = false;
console.log(HAS_DRIVER_LICENSE && HAS_GOOD_VISION && IS_TIRED);

if (HAS_DRIVER_LICENSE && HAS_GOOD_VISION && !IS_TIRED) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}

const DAY = "monday";

switch (DAY) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

if (DAY === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (DAY === "tuesday") {
  console.log("Prepare theory videos");
} else if (DAY === "wednesday" || DAY === "thursday") {
  console.log("Write code examples");
} else if (DAY === "friday") {
  console.log("Record videos");
} else if (DAY === "saturday" || DAY === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}

3 + 4;
1991;
true && false && !true;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Billy";
console.log(`I'm ${2037 - 1991} years old ${me}`);

const AGE = 23;
AGE >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const DRINK = AGE >= 18 ? "wine 🍷" : "water 💧";
console.log(DRINK);

let DRINK2;
if (AGE >= 18) {
  DRINK2 = "wine 🍷";
} else {
  DRINK2 = "water 💧";
}
console.log(DRINK2);

console.log(`I like to drink ${AGE >= 18 ? "wine 🍷" : "water 💧"}`);
*/
