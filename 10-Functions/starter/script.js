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

// Lecture 135. The Bind Method ----------------------------------------------------------------------------------------------
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
// Dont need flight name bc its already binded
bookEW(23, 'Steven Williams');

//                                   Number is preset, all we need now is a name!
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Arthur Barzul');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// Dont need this, so we put null, and set the rate to 0.23, not touching the value parameter
const addVAT = addTax.bind(null, 0.23);
// same as:  addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge Function Returning Function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * 0.23;
  };
};
const addVAT2 = addTaxRate(0.23);

addVAT2(100);
addVAT2(23);
*/

// Coding Challenge #1 -----------------------------------------------------------------------------------------------------

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// // My Answer -------------------------------------------------------
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer: document
//     .querySelector('.poll')
//     .addEventListener('click', function () {
//       const userInput = parseInt(
//         prompt(`${poll.question}
//         ${poll.options[0]}
//         ${poll.options[1]}
//         ${poll.options[2]}
//         ${poll.options[3]}`)
//       );
//       console.log(userInput);
//       if (userInput > 3 || isNaN(userInput)) {
//         alert('Enter a number based on the choices listed!');
//       } else {
//         poll.answers[userInput] += 1;
//       }
//       poll.displayResults(poll.answers);
//     }),
//   displayResults: function (type) {
//     if (Array.isArray(type)) {
//       console.log(type);
//     } else if (typeof type === 'string') {
//       console.log(
//         `Poll Results are: ${poll.answers[0]}, ${poll.answers[1]}, ${poll.answers[2]}, ${poll.answers[3]}`
//       );
//     }
//   },
// };

//Lecture Answer
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    //Get Answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')} \n(Write Option Number)`
      )
    );
    console.log(answer);
    //Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// Bonus
// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
