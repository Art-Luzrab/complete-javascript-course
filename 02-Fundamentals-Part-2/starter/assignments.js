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
*/
