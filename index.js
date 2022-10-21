const hamburger = document.querySelector('.menu-bars');
const nav = document.querySelector('.navbar');
const navLinks = document.querySelector('.menu-list');
const closeBtn = document.querySelector('.close-btn');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('hidden');
  nav.classList.toggle('menu');
  navLinks.classList.toggle('hidden');
  hamburger.classList.add('hidden');
});

closeBtn.addEventListener('click', () => {
  nav.classList.toggle('hidden');
  nav.classList.toggle('menu');
  navLinks.classList.toggle('hidden');
  hamburger.classList.remove('hidden');
});