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


const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(` ${firstName} has already retired 🎉 `);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);

const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
  } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));


//Lecture 39: Intro to Arrays

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//friends = ['Bob', 'Alice']

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];

console.log(jonas);
console.log(jonas.length);

//Excersize

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);


// Lecture 40: Basic Array Operations (Methods)

const friends = ["Micheal", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements

friends.pop(); // removes last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven.");
} else {
  console.log("You do not have a friend called Steven");
}


// Lecture 42. Intro to Objects
const arthur = {
  firstName: "Arthur",
  lastName: "Barzul",
  age: 2024 - 2002,
  job: "unemployed",
  friends: ["Scott", "Julia", "Yingshi", "Nikios"],
};


//Lecture 43: Dot vs Bracket notation

const arthur = {
  firstName: "Arthur",
  lastName: "Barzul",
  age: 2024 - 2002,
  job: "unemployed",
  friends: ["Scott", "Julia", "Yingshi", "Nikios"],
};

console.log(arthur);

// Dot notation
console.log(arthur.lastName);
console.log(arthur["lastName"]);

// Bracket Notation
const nameKey = "Name";
console.log(arthur["first" + nameKey]);
console.log(arthur["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Arthur? Choose between firstName, lastName, age, job and friends"
);

if (arthur[interestedIn]) {
  console.log(arthur[interestedIn]);
} else {
  console.log(
    "Wrong request! What do you want to know about Arthur? Choose between firstName, lastName, age, job and friends? "
  );
}

arthur.location = "Ukraine";
arthur["twitter"] = "none";
console.log(arthur);

// Challenge
// "Arthur has 3 friends, and his best friend is called Scott"

console.log(
  `${arthur.firstName} has ${arthur.friends.length} friends and his best friend is named ${arthur.friends[0]}.`
);


//Lecture 44: Object Methods

const arthur = {
  firstName: "Arthur",
  lastName: "Barzul",
  birthYear: 2002,
  job: "unemployed",
  friends: ["Scott", "Julia", "Yingshi", "Nikios"],
  hasDriversLicense: true,

  // calcAge: function (birthyear) {
  //   return 2024 - birthyear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } person, and he ${
      this.hasDriversLicense ? "has a" : "does not have a"
    } drivers license.`;
  },
};

console.log(arthur.calcAge());

console.log(arthur.age);
console.log(arthur.age);
console.log(arthur.age);
console.log(arthur.age);

// Challenge
// "Jonas is a 46 year old teacher. and he has a/no drivers license"
console.log(arthur.getSummary());


// Lecture 46: Iteration: The for loop

// console.log("Lifting weights repetition 1 🏋️‍♀️");
// console.log("Lifting weights repetition 2 🏋️‍♀️");
// console.log("Lifting weights repetition 3 🏋️‍♀️");
// console.log("Lifting weights repetition 4 🏋️‍♀️");
// console.log("Lifting weights repetition 5 🏋️‍♀️");
// console.log("Lifting weights repetition 6 🏋️‍♀️");
// console.log("Lifting weights repetition 7 🏋️‍♀️");
// console.log("Lifting weights repetition 8 🏋️‍♀️");
// console.log("Lifting weights repetition 9 🏋️‍♀️");
// console.log("Lifting weights repetition 10 🏋️‍♀️");

// for loop keeps running while condidition is true
for (let rep = 1; rep <= 50; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


//Lecture 47: looping arrays, breaking and continuing

const arthurArray = [
  "Arthur",
  "Barzul",
  2024 - 2002,
  "unemployed",
  ["Scott, Julia, Yingshi"],
  true,
];

const types = [];

for (let i = 0; i < arthurArray.length; i++) {
  // Reading from arthurArray
  console.log(arthurArray[i], typeof arthurArray[i]);

  // // Filling types array
  // types[i] = typeof arthurArray[i];

  types.push(typeof arthurArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

// continue and break
console.log("---ONLY STRINGS ---");
for (let i = 0; i < arthurArray.length; i++) {
  if (typeof arthurArray[i] !== "string") continue;
  console.log(arthurArray[i], typeof arthurArray[i]);
}

console.log("---BREAK WITH NUMBER---");
for (let i = 0; i < arthurArray.length; i++) {
  if (typeof arthurArray[i] === "number") break;
  console.log(arthurArray[i], typeof arthurArray[i]);
}
*/
