// navbar re-sizing to scroll

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        nav.style.scale = '1.03';
    } else {
        nav.style.scale = '1.0';
    }
})

//

const selectBtn1 = document.querySelector('#selectBtn1')
const selectBtn2 = document.querySelector('#selectBtn2')
const selectBtn3 = document.querySelector('#selectBtn3')

const circle1 = document.querySelector('.circle1')
const circle2 = document.querySelector('.circle2')
const circle3 = document.querySelector('.circle3')


selectBtn1.addEventListener('click', (e) => {
    circle1.style.width = '64px'
    circle1.style.backgroundColor = '#51A2FF'
    circle2.style.width = '16px'
    circle2.style.backgroundColor = 'rgba(255,255,255,0.2)'
    circle3.style.width = '16px'
    circle3.style.backgroundColor = 'rgba(255,255,255,0.2)'
})

if (window.location.href === 'http://localhost:63342/portfolio-2025/index.html?_ijt=caqffodlu47qagr9b29h3ncfvt&_ij_reload=RELOAD_ON_SAVE#selectionCard01') {
    circle1.style.width = '64px'
    circle1.style.backgroundColor = '#51A2FF'
} else {
    circle1.style.width = '16px'
    circle1.style.backgroundColor = 'rgba(255,255,255,0.2)'
}

selectBtn2.addEventListener('click', (e) => {
    circle1.style.width = '16px'
    circle1.style.backgroundColor = 'rgba(255,255,255,0.2)'
    circle2.style.width = '64px'
    circle2.style.backgroundColor = '#51A2FF'
    circle3.style.width = '16px'
    circle3.style.backgroundColor = 'rgba(255,255,255,0.2)'
})

selectBtn3.addEventListener('click', (e) => {
    circle1.style.width = '16px'
    circle1.style.backgroundColor = 'rgba(255,255,255,0.2)'
    circle2.style.width = '16px'
    circle2.style.backgroundColor = 'rgba(255,255,255,0.2)'
    circle3.style.width = '64px'
    circle3.style.backgroundColor = '#51A2FF'
})

//

// const menu = document.querySelector('.menu');
// const hamburgerBtn = document.querySelector('#hamburgerBtn');
// const active = document.querySelector('.active');
//
// const hamburgerLines1 = document.querySelector('#hamburgerLines1');
// const hamburgerLines2 = document.querySelector('#hamburgerLines1');
// const hamburgerLines3 = document.querySelector('#hamburgerLines1');
//
// menu.addEventListener('click', (e) => {
//     nav.style.width = '75%'
//     menu.classList.replace('menu', 'active');
// })
//
// active.addEventListener('click', (e) => {
//     nav.style.width = '5%'
//     menu.classList.replace('active', 'menu');
// })