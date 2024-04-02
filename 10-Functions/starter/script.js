'use strict';

/**  *

// Lecture 129. Default Values

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

// Lecture 130. How Passing Arguments Works: Value vs. Reference

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
*/
