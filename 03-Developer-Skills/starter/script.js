// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/* 
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [4, 1, 10, 3, 20, -1, "error"];

// 1) Understanding the problem

// -What is temperature apmlitude? Answer: Difference between highest and lowest temp.

// How to compute a max and min temperatures?
// What's a sensor error? And what to do?

// 2) Breaking up into sub-problems

// - How to ignore errors?
// - Find Max Value in temp array
// - Find Min Value in temp array
// - Subtract min from max  (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now recieve two arrays of temps

// 1) Understanding the problem
//- With 2 arrays, should we implement functionality twice? No! Just merge 2 arrays

// 2) Breaking up into sub-problems
// - merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // C) FIX
    // value: Number(prompt("Degrees Celcius:")),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) Identify
console.log(measureKelvin());

// Using a debugger
const bug = function (t1, t2) {
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    debugger;
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitudeBug = bug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFTY
console.log(amplitudeBug);
**/

//Challenge

//Given an array of forecasted maximun temperatures, the thermometer displays a string with these temperatures.

//Example: [17, 21, 23] will print: "... 17C in 1 days ... 21C in 2 days... 23C in 3 days ... "

//Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Test Data 1: [17, 21, 23]
// Test Data 2: [12, 5, -5, 0, 4]

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];
// console.log(testData1.indexOf(17) + 1);

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C is in ${i + 1} days ... `;
  }
  console.log("... " + str);
};

printForecast(testData1);
// printForecast(testData2);
