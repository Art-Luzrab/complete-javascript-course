"use strict";
/** 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I am Ryan Gosling. I can Drive");

// const interface = "Audio";
// const private = 543;
// const if = 34;



// Lecture 33: Functions

function logger() {
  console.log("My name is Arthur");
}

// calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Lecture 34 Function Declarations vs. Expressions

//Function Declaration

function calcAge1(birthyear) {
  return 2037 - birthyear;
}
const age1 = calcAge1(1991);

//Function Expression
const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);


//Lecture 35: Arrow Functions

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Arthur"));
console.log(yearsUntilRetirement(1980, "Ryan"));


function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
