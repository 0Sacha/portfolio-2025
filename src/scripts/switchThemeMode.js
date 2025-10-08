// DARK MODE //

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

const navbar = document.querySelector('nav');

const titreDeSection = document.querySelector('.titreDeSection');


// code //

moon.addEventListener('click', (e) => {

    // .display

    moon.style.display = 'none';
    sun.style.display = 'block';

    // .background

    nav_menu.style.background = 'var(--dark-bg-navbar-color)';
    main.style.background = 'var(--bg-color-dark)';
    html.style.background = 'var(--dark-html-bg-color)';
    scrollToUp.style.backgroundColor = 'var(--dark-bg-navbar-color)';

    // .color

    home.style.color = 'white';
    nav.style.color = 'var(--dark-text-navbar-color)';
    titreDeSection.style.color = 'var(--dark-text-navbar-color)';

    // .src

    menu.src = 'src/images/menu-light.svg';
    close_menu.src = './src/images/close-menu-light.svg';
    scrollToUp.src = './src/images/up-arrow-light.svg';
    // links
    linkedin.src = './src/images/icons/linkedin-light-icon.svg';
    github.src = './src/images/icons/github-light-icon.svg';
    mailto.src = './src/images/icons/mailto-light-icon.svg';
    navbar.style.background = "var(--dark-bg-navbar-color)";


    if (window.scrollY > 1) {
        navbar.style.background = 'var(--dark-bg-navbar-color)';
    } else {
        navbar.style.background = 'transparent';
    }
    // forEach

    nav_a.forEach(a => {
        a.style.color = 'var(--dark-text-navbar-color)';
    });

    nav_popup_menu.forEach(a => {
        a.style.color = 'var(--dark-text-navbar-color)';
    })

    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 1) {
            navbar.style.background = 'var(--dark-bg-navbar-color)';
        } else {
            navbar.style.background = 'transparent';
        }
    })
})

sun.addEventListener('click', (e) => {

    // .display

    sun.style.display = 'none';
    moon.style.display = 'block';

    // .background

    nav_menu.style.background = 'var(--light-bg-navbar-color)';
    main.style.background = 'var(--bg-color-light)';
    html.style.background = 'var(--light-html-bg-color)';
    scrollToUp.style.backgroundColor = 'var(--light-bg-navbar-color)';

    // .color

    home.style.color = 'var(--light-text-navbar-color)';
    nav.style.color = 'var(--light-text-navbar-color)';
    titreDeSection.style.color = 'var(--light-text-navbar-color)';

    // .src

    menu.src = 'src/images/menu-dark.svg';
    close_menu.src = './src/images/close-menu-dark.svg';
    scrollToUp.src = './src/images/up-arrow-dark.svg'
    // links
    linkedin.src = './src/images/icons/linkedin-dark-icon.svg';
    github.src = './src/images/icons/github-dark-icon.svg';
    mailto.src = './src/images/icons/mailto-dark-icon.svg';
    navbar.style.background = "var(--light-bg-navbar-color)";

    if (window.scrollY > 1) {
        navbar.style.background = 'var(--light-bg-navbar-color)';
        navbar.style.backdropFilter = 'blur(3px)';
    } else {
        navbar.style.background = 'transparent';
    }

    // forEach

    nav_a.forEach(a => {
        a.style.color = 'var(--light-text-navbar-color)';
    });

    nav_popup_menu.forEach(a => {
        a.style.color = 'var(--light-text-navbar-color)';
    })

    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 1) {
            navbar.style.background = 'var(--light-bg-navbar-color)';
        } else {
            navbar.style.background = 'transparent';
        }
    })

})