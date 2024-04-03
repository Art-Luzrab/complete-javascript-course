'use strict';

/**  *

// Lecture 129. Default Values -----------------------------------------------------------------------------------

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
  ) {
    // ES5
    //   numPassengers = numPassengers || 1;
    //   price = price || 199;
    const booking = {
      flightNum,
      numPassengers,
      price,
    };
    console.log(booking);
    bookings.push(booking);
  };
  
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 100);

// Cannot skip arguments, always in order unless you do it like this:
createBooking('LH123', undefined, 1000);

// Lecture 130. How Passing Arguments Works: Value vs. Reference --------------------------------------------------------------------------------

const flight = 'LH234';
const arthur = {
  name: 'Arthur Barzul',
  passport: 2473904642,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr. ' + passenger.name;
  
  if (passenger.passport === 2473904642) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, arthur);
// console.log(flight);
// console.log(arthur);

// // Passing a primitive type (string, num, boolean, null, etc) into a function
// // Is the same as doing...
// const flightNum = flight;

// // Passing an object type into a function it is like copying an object like this...
// // Whatever we change in a copy, will change in the original object.
// const passenger = arthur;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(arthur);
checkIn(flight, arthur);

// JavaScript does not have pass by reference!


// 132. Functions Accepting CallBack Functions -----------------------------------------------------------------------------------
// First-class function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
// First-class function
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String:, ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
//Higher-order                         First-class / Callback function
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time!
const high5 = function () {
  console.log('👋');
};
//            Higher-order             First-class / Callback function
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


// Lecture 133. Functions Returning Functions --------------------------------------------------------------------------------------------

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// // Challenge
// const greet = greeting => {
//   return name => console.log(`${greeting} ${name}`);
// };
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');
*/

// Lecture 134. The Call and Apply Methods ------------------------------------------------------------------------------------------------

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Arthur Barzul');
lufthansa.book(635, 'John Smith');
// console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// DOES NOT WORK
// book(23, 'Sarah Willams');

//Call Method
//       this.eurowings
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

//     this.lufthansa
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
//       this.swiss
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply Method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
