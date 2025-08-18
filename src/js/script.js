const menuHamburger = document.querySelector('#menu');
const nav_menu = document.querySelector('.menu-popup');

const menu = document.querySelector('#menu');
const close_menu = document.querySelector('#close-menu');

const html = document.querySelector('html');
const body = document.querySelector('body');
const main = document.querySelector('main');

const nav = document.querySelector('nav');
const nav_a = document.querySelectorAll('nav a');
const nav_popup_menu = document.querySelectorAll('.menu-popup a');

const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');


menuHamburger.addEventListener('click', (e) => {
    nav_menu.style.display = 'block';
    menuHamburger.style.display = 'none';
    close_menu.style.display = 'block';
    html.style.overflow = 'hidden';
})

close_menu.addEventListener('click', (e) => {
    nav_menu.style.display = 'none';
    close_menu.style.display = 'none';
    menuHamburger.style.display = 'block';
})

moon.addEventListener('click', (e) => {
    moon.style.display = 'none';
    sun.style.display = 'block';
    nav.style.background = 'var(--dark-bg-navbar-color)'
    nav_menu.style.background = 'var(--dark-bg-navbar-color)'
    body.style.background = 'var(--bg-color-black)'

    // nav.style.border = 'var(--dark-border-navbar-color)'

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
    nav.style.background = 'var(--light-bg-navbar-color)'
    nav_menu.style.background = 'var(--light-bg-navbar-color)'
    body.style.background = 'var(--bg-color-light)'

    // nav.style.border = 'var(--light-border-navbar-color)'

    menu.src = 'src/img/menu-dark.svg';
    close_menu.src = 'src/img/close-menu-dark.svg';

    nav_a.forEach(a => {
        a.style.color = 'var(--light-text-navbar-color)';
    });

    nav_popup_menu.forEach(a => {
        a.style.color = 'var(--light-text-navbar-color)';
    })

})


