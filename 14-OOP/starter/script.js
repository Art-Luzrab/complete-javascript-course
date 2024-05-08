'use strict';

/** 

// Lecture 209. Constructor Functions and the new Operator

// built in constructors start with capital letters
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never Do This!
  //   this.calcAge = function() {
  //     console.log(2037 - this.birthYear);
  //   }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// now the constructor is like a usable blueprint
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);
// >Person {firstName: 'Matilda', birthYear: 2017}
// >Person {firstName: 'Jack', birthYear: 1975}

const jay = 'Jay';

// instance of
console.log(jonas instanceof Person); // true
console.log(jonas instanceof Person); // false

// Lecture 210. Prototypes

// Prototypes
console.log(Person.prototype); // {...}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); // Have access to calcAge bc of prototypal inheritence
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__); // {calcAge: ƒ}
console.log(jonas.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// . prototypeOfLinkedObjects (more honest name)

// set properties on prototype

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species); // Homo Sapiens Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species'));
// not in object, but has access to it through prototype

// Lecture 211. Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__); // {species: 'Homo Sapiens', calcAge: ƒ ... }

// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)

const arr = [3, 6, 7, 8, 8, 5, 3]; // same as: new Array === []
console.log(arr.__proto__); // shows all the methods we already know
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__);
//{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // [3, 6, 7, 8, 5]

const h1 = document.querySelector('h1'); // prototype: HTMLHeadingElement
console.dir(x => x + 1); // anonymous()
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


// 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// 2
Car.prototype.accelerate = function () {
  console.log(`${(this.speed += 10)} km/h`);
};

// 3

Car.prototype.brake = function () {
  console.log(`${(this.speed -= 5)} km/h`);
};

// 4
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw, mercedes);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
*/
