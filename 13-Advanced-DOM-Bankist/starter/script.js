'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// Lecture 189: Implementing Smooth Scrolling
// Button Scrollijng

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); // grabs coordinates of element
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset); // current window position

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); // x and y of viewable viewport

  // Scrolling (oldschool way)
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, // current position + current scroll
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // }); // creates smooth scroll effect

  // Modern Way (works only with modern browsers)
  section1.scrollIntoView({ behavior: 'smooth' });
});

////////////////////////////////////////////////////////////////////////////////////
// Page Navigation

// Lecture 193. Event Delegation: Implementing Page Navigation

// less effecient way (when theres not a lot of elements)
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  // Matching Strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Lecture 195. Building A Tabbed Component

// Tabbed component
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard Clause
  if (!clicked) return; // will return null if clicked doesn't exist

  // old way
  // if(clicked) {
  //   clicked.classList.add('operations__tab--active');
  // }
  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate Tab
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate Content Area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
  // console.log(clicked.dataset.tab); // data-tab='1' 2 or 3
});

// Lecture 196. Passing Arguments to Event Handlers

// Menu fade animation

const handleHover = function (e) {
  console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
      /** bc of .bind */
    });
    logo.style.opacity = this;
  }
};
// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
/**literally turns this = 0.5 */

nav.addEventListener('mouseout', handleHover.bind(1));
/**literally turns this = 1 */

// Lecture 197. Implementing A Sticky Navigation: The Scroll Event

// old way unefficient
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);
  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
/** 
// Lecture 187. Selecting, Creating and Deleting Elements

// Selecting Elements

console.log(document.documentElement); // grabs entire html
console.log(document.head); // grabs head
console.log(document.body); // grabs body

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('sectoin--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // HTML collection (live collection)

console.log(document.getElementsByClassName('btn')); // HTML collection

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for impoved functionality and analytics.';
message.innerHTML =
  'We use cookies for impoved functionality and analytics. <button class="btn btn--close-cookie"> Got it! </button>';

// header.prepend(message); // adds it as the first child of header element
header.append(message); // adds it as the last child of the header element
// header.append(message.cloneNode(true)); // clones so that we can have both

// header.before(message); // before as a sibling
header.after(message); // after as a sibling

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); // new way
    // message.parentElement.removeChild(message); // old way (dom traversing)
  });

// Lecture 188. Styles, Attributes and Classes
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); // doesnt work
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

console.log(getComputedStyle(message).color); // shows the color property of message
console.log(getComputedStyle(message).height); // shows height of message

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'; // adds 40px to height
// root
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes (src, alt, class, id)
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //Bankist logo
console.log(logo.className); // nav__logo

logo.alt = 'Beautiful Minimalist Logo';

// Non-standard
console.log(logo.designer); // undefined
console.log(logo.getAttribute('designer')); // Jonas
logo.setAttribute('company', 'Bankist'); // creates new 'company' attribute

console.log(logo.src); //http://127.0.0.1:5500/13-Advanced-DOM-Bankist/starter/img/logo.png
console.log(logo.getAttribute('src')); //img/logo.png

const link = document.querySelector('.nav__link--btn');

console.log(link.href); // http://127.0.0.1:5500/13-Advanced-DOM-Bankist/starter/index.html#
console.log(link.getAttribute('href')); // #

// Data attributes
// added attribute data-version-number="3.0" to nav image
console.log(logo.dataset.versionNumber); // 3.0

// Classes

// Does not interfere with original classes
logo.classList.add('c');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes()

// Don't use, will override all classes
logo.className = 'jonas';
*/
/** 
// Lecture 190: Types of Events and Event Handlers
// event reference on MDN

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading!');
}; // mouse hover

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); // remove w/timer

// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading!');
// };
*/

/** 
// Lecture 192. Event Propagation (bubbling) in Practice

// rgb(255,255,255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this); // true

  // Stop propagation
  // e.stopPropagation(); // color only changes on '.nav__link'
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});

// capturing is rarely used in modern days


// Lecture 194. DOM traversing

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight')); //NodeList(2) [span.highlight, span.highlight]
console.log(h1.childNodes); //NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(h1.children); // HTMLCollection(3) [span.highlight, br, span.highlight]
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling); // null
console.log(h1.nextElementSibling); // h4

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children); // HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img]
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
*/
