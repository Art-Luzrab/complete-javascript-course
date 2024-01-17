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
