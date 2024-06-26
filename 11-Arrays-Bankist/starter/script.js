'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Lecture 148. Creating DOM Elements
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i, arr) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>
`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Lecture 152 Computing Usernames

const createUsernames = function (acc) {
  acc.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const user = 'Steven Thomas Williams'; //stw

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // update ui
    updateUI(currentAccount);
  }
});
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
// Lecture 161. The findIndex() method
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //.indexOf(23)

    //Delete ACcount
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/** 
// Lecture 143. Simple Array Methods

let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice Method
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b','c']
console.log(arr.slice()); // creates a copy
console.log([...arr]); // creates a copy

// Splice Method (mutates array)
// console.log(arr.splice(2)); // removes c, d and e from array
arr.splice(-1); // removes last element ('e')
console.log(arr);
arr.splice(1, 2); // start index 1, remove 2 elements (including start index)
console.log(arr);

// Reverse

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // returns reversed array, and mutates it
console.log(arr2);

// Concat
const letters = arr.concat(arr2);
console.log(letters); // returns combined array
console.log([...arr, ...arr2]); // returns combined array

// Join
console.log(letters.join(' - ')); // returns a - b - c - d - e .....


// Lecture 144. The New At Method

const arr = [23, 11, 64];
console.log(arr[0]);

// At method
console.log(arr.at(0)); // array at position 0

// getting the last array element
console.log(arr[arr.length - 1]); // 64
console.log(arr.slice(-1)[0]); // 64
console.log(arr.at(-1)); // 64

// at method used if you want to get the last element of an array and or if you want to use method chaining

// brackets used when you need to quickly get an element from an array

console.log('jonas'.at(0)); // j
console.log('jonas'.at(-1)); // s


// Lecture 145: Looping Arrays: forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using a for of loop
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// Using forEach
console.log('----- FOREACH -----');
//                     current el, curr index, curr array (in order!)
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

// cannot break through a forEach loop

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


// Lecture 146. forEach with Maps and Sets

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
//                    curr value, curr key, curr map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

// key is not needed for sets, _ means a throwaway value!
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

///////////////////////////////////////
// Coding Challenge #1

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀

const checkDogs = function (dogsJulia, dogsKate) {
  // 1.

  const juliaCopy = dogsJulia.slice();
  juliaCopy.shift();
  juliaCopy.splice(-2);

  console.log(juliaCopy);

  // 2.

  const juliaAndKate = juliaCopy.concat(dogsKate);
  console.log(juliaAndKate);

  // 3.

  juliaAndKate.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i} is an adult and is ${dog} years old! 🐕‍🦺`);
    } else {
      console.log(`Dog number ${i} is a puppy and is ${dog} years old! 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


//Lecture 151. The map method

const eurtoUsd = 1.1;

// .map() method returns NEW array with the NEW elements!
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurtoUsd;
// });

// using arrow function             //  return here
const movementsUSD = movements.map(mov => {
  mov * eurtoUsd;
});

console.log(movements);
console.log(movementsUSD);

// Here we had to create a new array then push the elements into the array
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurtoUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);


// Lecture 153. The Filter Method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


// Lecture 154: The Reduce Method

console.log(movements);
// With Regular Function
// // accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// // initial value!

//With Arrow Function
const balance = movements.reduce((acc, cur) => acc + cur);
console.log(balance);

//for loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum Value

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

// Minimum Value

const min = movements.reduce((acc, mov) => {
  if (acc < mov) {
    return acc;
  } else {
    return mov;
  }
});
console.log(min);


// CODING CHALLENGE #2

// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
// 4. Run the function for both test datasets

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀

const calcAverageHumanAge = function (ages) {
  // 1
  const humanAges = ages.map(function (dogAge) {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  console.log(humanAges);
  // 2
  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);

  // 3

  // const avg =
  //   adults.reduce((acc, cur) => {
  //     return acc + cur;
  //   }, 0) / adults.length;
  // console.log(avg);

  const avg = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(avg);
};

// 2 3 (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

// 4
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


// Lecture 156. The Magic of Chaining Methods

const eurToUsd = 1.1;
console.log(movements);

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

// you can only chain methods if the first one
// returns an array!


// Coding Challenge #3

// Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// GOOD LUCK 😀

const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));


// Lecture 158. The Find Method

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
// find returns an element from an array, does not make a new one

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// for
for (const account of accounts) {
  if (account.owner === 'Jessica Davis') {
    console.log(account);
  }
}


// Lecture 162. some and every
console.log(movements);

//Equality
console.log(movements.includes(-130));

// Some: Condition
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate Callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


// 163. flat and flatMap

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// flat method (only goes one level deep)
console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8];

// unless you specify the depth.
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, curr) => acc + curr, 0);
// console.log(overallBalance);

// flat
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flatMap (only goes one level, for more, use flat())
const overallBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// Lecture 164. Sorting Arrays

// sort() mutates array
// Strings
const owners = ['Jonas', 'Zack', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0 B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;

//   if (a < b) return -1;
// });
// console.log(movements);

// faster way
movements.sort((a, b) => a - b);
console.log(movements);

// Desending
// movements.sort((a, b) => {
//   if (a > b) return -1;

//   if (a < b) return 1;
// });

// faster way
movements.sort((a, b) => b - a);
console.log(movements);


// Lecture 165. More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));

// x.fill(1, 3); // start filling with 1's at index 3
x.fill(1, 3, 5); // start filling at index 3 but ends at index 5 ()
x.fill(1);
console.log(x);

arr.fill(23, 2, 6); // fill with 23's at index 4, ends at index 6
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7]

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});


// Array Methods Practice

// 1. Taking array of array and turning it into one value
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2. Counting in an array

// first way of doing it
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

// second way of doing it (using reduce)
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// prefixed ++ operator
let a = 10;
console.log(++a);
console.log(a);

// 3. using reduce() with objects

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      // return sums;

      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// 4. creating a title case function
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'the', 'but', 'and', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
*/

////////////////////////////////////////////////////////////////////
// Coding Challenge 4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
console.log(
  'Question 1 ================================================================='
);
dogs.forEach(dog => {
  dog.recomendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  console.log(dogs);
});
console.log(
  'Question 1 ================================================================='
);

// 2
console.log(
  'Question 2 ================================================================='
);
console.log(dogs[2].owners[0]);

const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));
if (sarahsDog.curFood > sarahsDog.recomendedFood) {
  console.log(`Sarahs dog is eating too much!`);
} else if (sarahsDog.curFood < sarahsDog.recomendedFood) {
  console.log(`Sarahs dog is eating too little!`);
} else if (
  sarahsDog.curFood > sarahsDog.recomendedFood * 0.9 &&
  sarahsDog.curFood < sarahsDog.recomendedFood * 1.1
) {
  console.log(`Sarahs dog is eating an okay amount of food!`);
}
console.log(sarahsDog);

console.log(
  'Question 2 ================================================================='
);

// 3.
console.log(
  'Question 3 ================================================================='
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recomendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recomendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

console.log(
  'Question 3 ================================================================='
);

// 4
console.log(
  'Question 4 ================================================================='
);
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs ate too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs ate too little!`);
console.log(
  'Question 4 ================================================================='
);

// 5
console.log(
  'Question 5 ================================================================='
);
console.log(dogs.some(dog => dog.curFood === dog.recomendedFood));
console.log(
  'Question 5 ================================================================='
);

// 6
console.log(
  'Question 6 ================================================================='
);

console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recomendedFood * 0.9 &&
      dog.curFood < dog.recomendedFood * 1.1
  )
);

console.log(
  'Question 6 ================================================================='
);

// 7

console.log(
  'Question 7 ================================================================='
);

const okayFood = dogs.filter(
  dog =>
    dog.curFood > dog.recomendedFood * 0.9 &&
    dog.curFood < dog.recomendedFood * 1.1
);
console.log(okayFood);

console.log(
  'Question 7 ================================================================='
);

// 8

console.log(
  'Question 8 ================================================================='
);
// My way
// const dogsShallowCopy = [...dogs];
// console.log(dogsShallowCopy);

// const ascending = dogsShallowCopy
//   .map(dog => dog.recomendedFood)
//   .sort((a, b) => a - b);
// console.log(ascending);

// Better way

const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recomendedFood - b.recomendedFood);
console.log(dogsSorted);
console.log(
  'Question 8 ================================================================='
);
