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

Person.hey = function () {
  console.log('Hey there 👋');
  console.log(this);
};

Person.hey(); // 'Hey there 👋' + entire constructor function

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

// Lecture 214. ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Method
  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear); // this is prototypal property
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }

  // Static methods do not be added to .prototype
  // property. Can't be used in other instances.
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica); // PersonCl {firstName: 'Jessica', birthYear: 1996}
jessica.calcAge(); // 41
console.log(jessica.age); // 41

console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet(); // Hey Jessica

// 1. Classes are NOT hoisted (cant use them b4 declared)
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
// ES6 classes puts in all in one code block

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

// Lecture 215. Setters and Getters

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  // getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // setter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300

account.latest = 50;
console.log(account.movements); // (5) [200, 530, 120, 300, 50]

//  Lecture 216. Static Methods

Array.from(document.querySelector('h1'));

// Lecture 217. Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// empty object connected to PersonProto as a prototype
const steven = Object.create(PersonProto);
console.log(steven); // {}
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); // 58;

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// // challenge 1 example
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// 1.

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     console.log(`${(this.speed += 10)} km/h`);
//   }

//   brake() {
//     console.log(`${(this.speed -= 5)} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = `${speed * 1.6} km/h`;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// Lecture 219. Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.intoduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.intoduce();
// mike.calcAge(); // works cause of prototype chain (grabs from 'Person')

console.log(mike.__proto__); // Person {intoduce: ƒ} from 'Student'
console.log(mike.__proto__.__proto__); // {calcAge: ƒ} from 'Person''

console.log(mike instanceof Student); // true
console.log(mike instanceof Person); // true
console.log(mike instanceof Object); // true

// fix
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  console.log(`${(this.speed += 10)} km/h`);
};

Car.prototype.brake = function () {
  console.log(`${(this.speed -= 5)} km/h`);
};

// 1
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

// 2

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// 3

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

// 4
const rivian = new EV('Rivian', 130, 90);
console.log(rivian);
rivian.accelerate();
rivian.accelerate();
rivian.brake();

// DATA CAR
const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();
