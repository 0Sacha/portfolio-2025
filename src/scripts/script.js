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
        navbar.style.background = 'var(--bg-nav-color-default)';
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