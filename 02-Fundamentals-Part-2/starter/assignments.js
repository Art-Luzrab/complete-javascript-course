/** 
function describeCountry(country, population, capitalCity) {
  const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return countryDescription;
}

const Ukraine = describeCountry("Ukraine", 4.75, "Kyiv");
console.log(Ukraine);

const USA = describeCountry(
  "The United States of America",
  331,
  "Washington D.C"
);
console.log(USA);

const China = describeCountry("China", 1400, "Beijing");
console.log(China);


//Lecture Function Declarations vs. Expressions

const worldPopulation = 7900;

const percentageOfWorld1 = function (population) {
  return (population / worldPopulation) * 100;
};

const ukrainePercentage1 = percentageOfWorld1(4.75);
const americaPercentage1 = percentageOfWorld1(331);
console.log(ukrainePercentage1, americaPercentage1);

function percentageOfWorld2(population) {
  return (population / worldPopulation) * 100;
}

const ukrainePercentage2 = percentageOfWorld2(4.75);
const americaPercentage2 = percentageOfWorld2(331);
console.log(ukrainePercentage2, americaPercentage2);


const percentageOfWorld3 = (population) => (population / 7900) * 100;

const ukrainePercent = percentageOfWorld3(4.75);
const americaPercent = percentageOfWorld3(331);
console.log(
  `Percent of Ukrianes population: ${ukrainePercent} Percent of Americas population: ${americaPercent}`
);


const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const describePopulation = function (country, population) {
  const worldPercentage = percentageOfWorld1(population);
  return `${country} has a population of ${population} million people, which is about %${worldPercentage} of the world.`;
};

const unitedStates = describePopulation("USA", 331);
console.log(unitedStates);


//Lecture: Intro to Arrays

const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const populations = [4.75, 331, 83.2, 125.7];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);


const neighbors = ["Canada", "Mexico"];

neighbors.push("Utopia");
console.log(neighbors);

neighbors.pop("Utopia");
console.log(neighbors);

if (!neighbors.includes("Germany")) {
  console.log("Probably not a central European country.");
}

console.log(neighbors.indexOf("Canada"));
neighbors[0] = "Communist State";
console.log(neighbors);

//Lecture: Intro to Objects

const myCountry = {
  country: "Ukraine",
  capital: "Kyiv",
  language: "Ukrainian",
  population: 4.75,
  neighbors: ["Russia", "Poland", "Hungary"],
};


//Lecture 43 Dot vs. Bracket Notation

const myCountry = {
  country: "Ukraine",
  capital: "Kyiv",
  language: "Ukrainian",
  population: 4.75,
  neighbors: ["Russia", "Poland", "Hungary"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
);

console.log(myCountry.population + 2);
console.log(myCountry["population"] - 2);


// Lecture 43: Object methods

const myCountry = {
  country: "Ukraine",
  capital: "Kyiv",
  language: "Ukrainian",
  population: 4.75,
  neighbors: ["Russia", "Poland", "Hungary"],
  isIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
  },
  describe: function () {
    return `${this.country} has  ${this.population} million ${
      this.language
    } speaking people, ${
      this.neighbors.length
    } neigboring countries and a capital called ${this.capital}. ${
      this.country
    } is ${(this.isIsland = true ? "not an island." : "is and island.")}`;
  },
};
console.log(myCountry.describe());
myCountry.describe();
myCountry.isIsland;

console.log(myCountry);

//Lecture 46: The for loop

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}


//Lecture 47: Looping arrays, breaking and continuing

const populations = [4.75, 331, 83.2, 125.7];

function worldPop(population) {
  return (population / 7900) * 100;
}

const percentages2 = [];

for (i = 0; i < populations.length; i++) {
  percentages2.push(worldPop(populations[i]));
}

console.log(percentages2);


// Lecture 48: Looping backwards and loops in loops

const listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++) {
  console.log(listOfNeighbors[i]);
  for (let x = 0; x < listOfNeighbors[i].length; x++) {
    console.log(`Neigbors: ${listOfNeighbors[i][x]}`);
  }
}


// Lecture 49: While loop

const populations = [4.75, 331, 83.2, 125.7];
console.log(populations.length);
let percentages3 = [];

function worldPop(population) {
  return (population / 7900) * 100;
}

let i = 0;
while (i < populations.length) {
  const percent = worldPop(populations[i]);
  percentages3.push(percent);
  i++;
}

console.log(percentages3);
*/

// CHALLENGE #4 (because it was buggin on Udemy)

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

for (i = 0; i < bills.length; i++) {
  tipTotal = calcTip(bills[i]);
  tips.push(tipTotal);

  combined = tips[i] + bills[i];
  totals.push(combined);

  console.log(`Calculating... 🤓`);
}
console.log(bills);
console.log(tips);
console.log(totals);
