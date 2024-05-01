'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

/** */
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
