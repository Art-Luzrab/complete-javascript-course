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
  neighbors: ["Russia", "Poland", "Hungary"],
};
*/
