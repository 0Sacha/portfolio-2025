const menuHamburger = document.querySelector('#menu');
const closeMenu = document.querySelector('#close-menu');
const navMenu = document.querySelector('.menu-popup');

const html = document.querySelector('html');

const moon = document.querySelector('#moon');


menuHamburger.addEventListener('click', (e) => {

    if (menuHamburger.src === './src/img/close-menu.svg') {
        console.log('H');
    }})

menuHamburger.addEventListener('click', (e) => {
    console.log('Hamburger is clicked');
    navMenu.style.display = 'block';
    html.style.overflow = 'hidden';
    menuHamburger.style.display = 'none';
    moon.style.display = 'none';
    closeMenu.style.display = 'block';
})

closeMenu.addEventListener('click', (e) => {
    navMenu.style.display = 'none';
    menuHamburger.style.display = 'block';
    moon.style.display = 'block';
    closeMenu.style.display = 'none';
})


