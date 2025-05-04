'use strict';

const currentYear = new Date().getFullYear();

// Constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const billy = new Person('Billy', 1999);

// Prototype
Person.prototype.calcAge = function () {
  console.log(currentYear - this.birthYear);
};

billy.calcAge();

