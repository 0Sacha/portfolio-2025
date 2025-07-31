const menuHamburger = document.querySelector('#menu');
const closeMenu = document.querySelector('#close-menu');
const navMenu = document.querySelector('.menu-popup');

const html = document.querySelector('html');
const body = document.querySelector('body');
const main = document.querySelector('main');

const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');


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

    // body.style.background = "#F8F8F8FF"

})

closeMenu.addEventListener('click', (e) => {
    navMenu.style.display = 'none';
    menuHamburger.style.display = 'block';
    moon.style.display = 'block';
    closeMenu.style.display = 'none';
})

moon.addEventListener('click', (e) => {
    moon.style.display = 'none';
    sun.style.display = 'block';
})

sun.addEventListener('click', (e) => {
    sun.style.display = 'none';
    moon.style.display = 'block';
})


