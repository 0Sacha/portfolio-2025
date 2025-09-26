// ---------------------------------------------------------------------------------------------//
// MENU HAMBURGER //

// const //

const menuHamburger = document.querySelector('#menu');
const nav_menu = document.querySelector('.menu-popup');
const close_menu = document.querySelector('#close-menu');

// code //

menuHamburger.addEventListener('click', (e) => {
    // .display
    nav_menu.style.display = 'block';
    menuHamburger.style.display = 'none';
    close_menu.style.display = 'block';
})

close_menu.addEventListener('click', (e) => {
    // .display
    nav_menu.style.display = 'none';
    menuHamburger.style.display = 'block';
    close_menu.style.display = 'none';
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

    menu.src = 'src/img/menu-light.svg';
    close_menu.src = './src/img/close-menu-light.svg';
    scrollToUp.src = './src/img/up-arrow-light.svg';
    // links
    linkedin.src = './src/img/icons/linkedin-light-icon.svg';
    github.src = './src/img/icons/github-light-icon.svg';
    mailto.src = './src/img/icons/mailto-light-icon.svg';
    navbar.style.background = "var(--dark-bg-navbar-color)";

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

    menu.src = 'src/img/menu-dark.svg';
    close_menu.src = './src/img/close-menu-dark.svg';
    scrollToUp.src = './src/img/up-arrow-dark.svg'
    // links
    linkedin.src = './src/img/icons/linkedin-dark-icon.svg';
    github.src = './src/img/icons/github-dark-icon.svg';
    mailto.src = './src/img/icons/mailto-dark-icon.svg';
    navbar.style.background = "var(--light-bg-navbar-color)";

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
            navbar.style.backdropFilter = 'blur(3px)';
        } else {
            navbar.style.background = 'transparent';
        }
    })

})

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
// SCROLL DEFAULT //

window.addEventListener('scroll', (e) => {
    if (window.scrollY > 1) {
        navbar.style.background = 'var(--dark-bg-navbar-color)';
    } else {
        navbar.style.background = 'transparent';
    }
})

// ---------------------------------------------------------------------------------------------//
// SHOW DETAILS IN CARD OF EXPERIENCE //

const show_experience_details = document.querySelector('#showExperienceDetails');
const show_more = document.querySelector('.enSavoirPlus #showMore');
const show_lower = document.querySelector('.enSavoirPlus #showLower');

const card_xp_2 = document.querySelector('.card_xp_2');

show_more.addEventListener('click', (e) => {
    show_more.style.display = 'none';
    show_lower.style.display = 'block';

    show_experience_details.style.display = 'block';
    card_xp_2.style.height = '39rem';
    card_xp_2.style.display = 'block';
    card_xp_2.style.justifyContent = 'center';
})

show_lower.addEventListener('click', (e) => {
    show_more.style.display = 'block';
    show_lower.style.display = 'none';

    show_experience_details.style.display = 'none';
    card_xp_2.style.height = '27.25rem';
    card_xp_2.style.display = 'flex';
    card_xp_2.style.justifyContent = 'space-between';

})