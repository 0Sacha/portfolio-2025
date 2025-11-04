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