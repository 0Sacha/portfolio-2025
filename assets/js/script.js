const moonSwitchBtn = document.querySelector('#moonSwitchBtn');
const sunSwitchBtn = document.querySelector('#sunSwitchBtn');

const themeSwitch = document.querySelector('#themeSwitch');

moonSwitchBtn.addEventListener('click', (e) => {
    moonSwitchBtn.style.display = 'none';
    sunSwitchBtn.style.display = 'block';
    themeSwitch.href = './assets/css/lightStyle.css'
})

sunSwitchBtn.addEventListener('click', (e) => {
    moonSwitchBtn.style.display = 'block';
    sunSwitchBtn.style.display = 'none';
    themeSwitch.href = './assets/css/darkStyle.css'
})