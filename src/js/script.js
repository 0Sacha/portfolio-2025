// ---------------------------------------------------------------------------------------------//
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
    responsiveCard.style.display = 'none';
})

close_menu.addEventListener('click', (e) => {
    nav_menu.style.display = 'none';
    menuHamburger.style.display = 'block';
    close_menu.style.display = 'none';
    responsiveCard.style.display = 'flex';
})

// ---------------------------------------------------------------------------------------------//
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

const linkedin = document.querySelector('#linkedin');
const github = document.querySelector('#github');
const mailto = document.querySelector('#mailto');

// code //

// moon.addEventListener('click', (e) => {
//
//     // .display
//
//     moon.style.display = 'none';
//     sun.style.display = 'block';
//
//     // .background
//
//     nav_menu.style.background = 'var(--dark-bg-navbar-color)'
//     main.style.background = 'var(--bg-color-dark)'
//     html.style.background = 'var(--dark-html-bg-color)';
//     scrollToUp.style.backgroundColor = 'var(--dark-bg-navbar-color)';
//
//     // .color
//
//     home.style.color = 'var(--dark-text-navbar-color)';
//     nav.style.color = 'var(--dark-text-navbar-color)';
//
//     // .src
//
//     menu.src = 'src/img/menu-light.svg';
//     close_menu.src = './src/img/close-menu-light.svg';
//     scrollToUp.src = './src/img/up-arrow-light.svg'
//     // links
//     linkedin.src = './src/img/icons/linkedin-light-icon.svg'
//     github.src = './src/img/icons/github-light-icon.svg'
//     mailto.src = './src/img/icons/mailto-light-icon.svg'
//
//     // forEach
//
//     nav_a.forEach(a => {
//         a.style.color = 'var(--dark-text-navbar-color)';
//     });
//
//     nav_popup_menu.forEach(a => {
//         a.style.color = 'var(--dark-text-navbar-color)';
//     })
// })
//
// sun.addEventListener('click', (e) => {
//
//     // .display
//
//     sun.style.display = 'none';
//     moon.style.display = 'block';
//
//     // .background
//
//     nav_menu.style.background = 'var(--light-bg-navbar-color)'
//     main.style.background = 'var(--bg-color-light)'
//     html.style.background = 'var(--light-html-bg-color)';
//     scrollToUp.style.backgroundColor = 'var(--light-bg-navbar-color)';
//
//     // .color
//
//     home.style.color = 'var(--light-text-navbar-color)';
//     nav.style.color = 'var(--light-text-navbar-color)';
//
//     // .src
//
//     menu.src = 'src/img/menu-dark.svg';
//     close_menu.src = './src/img/close-menu-dark.svg';
//     scrollToUp.src = './src/img/up-arrow-dark.svg'
//     // links
//     linkedin.src = './src/img/icons/linkedin-dark-icon.svg'
//     github.src = './src/img/icons/github-dark-icon.svg'
//     mailto.src = './src/img/icons/mailto-dark-icon.svg'
//
//     // forEach
//
//     nav_a.forEach(a => {
//         a.style.color = 'var(--light-text-navbar-color)';
//     });
//
//     nav_popup_menu.forEach(a => {
//         a.style.color = 'var(--light-text-navbar-color)';
//     })
//
// })

// ---------------------------------------------------------------------------------------------//
// CLICKED //

// const //

const card_button = document.querySelector('.button');
const cardSize = document.querySelector('.card');
const a = document.querySelector('.nextButton');
const desc = document.querySelector('.desc');
const show_desc = document.querySelector('.show-desc');
const closeButton = document.querySelector('.closeButton');
const card_img = document.querySelector('.img_card');
const cardContent = document.querySelector('.cardSetup');
const responsiveCard = document.querySelector('.responsiveCard');

// code //

// card_button.addEventListener('click', (e) => {
//     cardSize.style.clipPath = 'inset(0% 0% 33% 0% round 0%)';
//     a.style.display = 'flex';
//     card_button.style.display = 'none';
//     desc.style.display = 'none';
//     show_desc.style.display = 'block';
//     closeButton.style.display = 'flex';
// })

// closeButton.addEventListener('click', (e) => {
//     card_button.style.display = 'flex';
//     cardSize.style.clipPath = 'inset(0% 0% 33% 0% round 0%)';
//     a.style.display = 'none';
//     desc.style.display = 'block';
//     show_desc.style.display = 'none';
//     closeButton.style.display = 'none';
// })

// ---------------------------------------------------------------------------------------------//
// SCROLL TO WITH UP ARROW //

// Const //

const scrollToUp = document.querySelector('#scrollToUp');

// Code //

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 1) {
        scrollToUp.style.display = 'block';
        scrollToUp.style.transition = 'all 0.3s ease';

    } else {
        scrollToUp.style.display = 'none';
        scrollToUp.style.transition = 'all 0.3s ease';
    }
})

// ---------------------------------------------------------------------------------------------//
// SCROLL //

// Const //

const navbar = document.querySelector('nav');

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 1) {
        navbar.style.background = 'var(--dark-bg-navbar-color)';
    } else {
        navbar.style.background = 'transparent';
    }
})