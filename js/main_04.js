const navToggle = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
})

const navMenu = document.querySelector('.header_menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.remove('open');
})