const openNavSideBar = document.querySelector('#open-sidebar');
const closeNavSideBar = document.querySelector('#close-sidebar');
const nav = document.querySelector('li');

openNavSideBar.addEventListener(`click`, (e) => {
    nav.style.display = 'block';
    openNavSideBar.style.display = 'none';
    closeNavSideBar.style.display = 'block';
    console.log("Open!");
})

closeNavSideBar.addEventListener(`click`, (e) => {
    nav.style.display = 'none';
    openNavSideBar.style.display = 'block';
    closeNavSideBar.style.display = 'none';
    console.log("Closed!");
})