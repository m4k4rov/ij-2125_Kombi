const burgerMenu = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuLink =document.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
    burgerMenu.classList.toggle('humburger-menu-active');
    menu.classList.toggle('menu-active');
};

burgerMenu.addEventListener('click', toggleMenu);
menuLink.forEach(item => item.addEventListener('click', toggleMenu));