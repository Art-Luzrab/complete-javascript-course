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
