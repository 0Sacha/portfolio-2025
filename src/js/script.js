// MENU HAMBURGER //

// const //

const menuHamburger = document.querySelector('#menu');
const nav_menu = document.querySelector('.menu-popup');
const close_menu = document.querySelector('#close-menu');

// code //

menuHamburger.addEventListener('click', (e) => {
    nav_menu.style.display = 'block';
    menuHamburger.style.display = 'none';
    close_menu.style.display = 'block';
})

close_menu.addEventListener('click', (e) => {
    nav_menu.style.display = 'none';
    menuHamburger.style.display = 'block';
    close_menu.style.display = 'none';
})

// DARK MODE //

// const //

const html = document.querySelector('html');
const main = document.querySelector('main');

const nav = document.querySelector('#nav');
const nav_a = document.querySelectorAll('nav a');
const nav_popup_menu = document.querySelectorAll('.menu-popup a');

const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');
const home = document.querySelector('#home');

// code //

moon.addEventListener('click', (e) => {
    moon.style.display = 'none';
    sun.style.display = 'block';

    nav_menu.style.background = 'var(--dark-bg-navbar-color)'
    main.style.background = 'var(--bg-color-dark)'
    html.style.background = 'var(--dark-html-bg-color)';

    home.style.color = 'var(--dark-text-navbar-color)';
    nav.style.color = 'var(--dark-text-navbar-color)';

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
    main.style.background = 'var(--bg-color-light)'
    html.style.background = 'var(--light-html-bg-color)';

    home.style.color = 'var(--light-text-navbar-color)';
    nav.style.color = 'var(--light-text-navbar-color)';


    menu.src = 'src/img/menu-dark.svg';
    close_menu.src = 'src/img/close-menu-dark.svg';

    nav_a.forEach(a => {
        a.style.color = 'var(--light-text-navbar-color)';
    });

    nav_popup_menu.forEach(a => {
        a.style.color = 'var(--light-text-navbar-color)';
    })

})

// CLICKED //

// const //

const card_button  = document.querySelector('.content p');
const cardSize = document.querySelector('.card');

// code //

card_button.addEventListener('click', (e) => {
        card_button.style.backgroundColor = 'red';
        cardSize.style.height = '280px';
})