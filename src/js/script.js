const menuHamburger = document.querySelector('#menu');
const nav_menu = document.querySelector('.menu-popup');

const menu = document.querySelector('#menu');
const close_menu = document.querySelector('#close-menu');

const html = document.querySelector('html');
const body = document.querySelector('body');
const main = document.querySelector('.popup');

const nav = document.querySelector('nav');
const nav_a = document.querySelectorAll('nav a');
const nav_popup_menu = document.querySelectorAll('.menu-popup a');

const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');

const error_503 = document.querySelector('.error-503');


menuHamburger.addEventListener('click', (e) => {
    nav_menu.style.display = 'block';
    menuHamburger.style.display = 'none';
    close_menu.style.display = 'block';
    nav_menu.style.height = '120vh';
})

close_menu.addEventListener('click', (e) => {
    nav_menu.style.display = 'none';
    close_menu.style.display = 'none';
    nav_menu.style.height = '100vh';
})

moon.addEventListener('click', (e) => {
    moon.style.display = 'none';
    sun.style.display = 'block';
    nav_menu.style.background = 'var(--dark-bg-navbar-color)'
    body.style.background = 'var(--bg-color-dark)'
    error_503.style.color = 'red';

    menu.src = 'src/img/menu-light.svg';
    close_menu.src = 'src/img/close-menu-light.svg';

    nav_a.forEach(a => {
        a.style.color = 'var(--dark-text-navbar-color)';
    });

    nav_popup_menu.forEach(a => {
        a.style.color = 'var(--dark-text-navbar-color)';
    })
})

sun.addEventListener('click', (e) => {
    sun.style.display = 'none';
    moon.style.display = 'block';
    nav_menu.style.background = 'var(--light-bg-navbar-color)'
    body.style.background = 'var(--bg-color-light)'
    error_503.style.color = 'var(--light-text)';

    menu.src = 'src/img/menu-dark.svg';
    close_menu.src = 'src/img/close-menu-dark.svg';

    nav_a.forEach(a => {
        a.style.color = 'var(--light-text-navbar-color)';
    });

    nav_popup_menu.forEach(a => {
        a.style.color = 'var(--light-text-navbar-color)';
    })

})


