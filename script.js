const menuToggle = document.querySelector('.navbar__button-menu');
const navigationBar = document.querySelector('.navbar__list');

menuToggle.addEventListener('click', () => {
    navigationBar.classList.toggle('active')
})