// burger menu

const openBurger = document.querySelector('#openBurger');
const closeBurger = document.querySelector('#closeBurger');
const openElement = document.querySelector('.burger');

openBurger.addEventListener('click', () => {
    openBurger.style.display = 'none';
    closeBurger.style.display = 'block';
    openElement.style.display = 'flex';
})

closeBurger.addEventListener('click', () => {
    openBurger.style.display = 'block';
    closeBurger.style.display = 'none';
    openElement.style.display = 'none';
})

// navbar sizing to scroll

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        nav.style.scale = '1.03';
    } else {
        nav.style.scale = '1.0';
    }
})