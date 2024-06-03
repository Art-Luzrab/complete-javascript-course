/** 
 * // Named Exports ----------------------
// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price, tq);
// addToCart('bread', 5);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Default Function exports ------------------------------------

// import add, { addToCart, totalPrice as price, tq }  from './shoppingCart.js';
// add('pizza', 2);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart); // array of objects with products and quantities

// Lecture 274. Top-Level await (ES2022)
// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);


// Lecture 275. The Module Pattern

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
// Works because of closures
ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

// Lecture 276. CommonJs Modules

// Export
// export.addTocart = function (product, quantity) {
  //     cart.push({ product, quantity });
  //     console.log(
    //       `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    //     );
    // };
    
    // // Import
    // const { addTocart} = require('./shoppingCart.js')
]
    
*/

// After installing lodash-es using npm i lodash-es...
// Now we grab modules and use them in our file down below vvv
// import cloneDeep from '../node_modules/lodash-es/cloneDeep.js';
import cloneDeep from '../node_modules/lodash-es';
const state = {
  car: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
// Parse not working correctly as of lecture 280 :(

// Polyfilling
import 'core-js/stable';

// Polyfilling async functions
import 'regenerator-runtime';
