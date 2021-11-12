const SIDEBAR = document.querySelector('.sidebar__main');
const CONTAINER = document.querySelector('.container');
const LIGHTBTN = document.querySelector('#light');
const DARKBTN = document.querySelector('#dark');
const INPUT = document.querySelector('input')

let colors = ['brown', 'darkgreen', 'blueviolet', 'chocolate', 'darkred',
    'indigo', 'midnightblue', 'darkslategrey', 'slateblue', 'teal'];

LIGHTBTN.addEventListener('click', changeMode);
DARKBTN.addEventListener('click', changeMode);

function changeMode(e) {
    if (e.target == DARKBTN) {
        CONTAINER.classList.remove('light');
        CONTAINER.classList.add('dark');
    }
    if (e.target == LIGHTBTN) {
        CONTAINER.classList.remove('dark');
        CONTAINER.classList.add('light');
    }
}

function changeAsideBgColor() {
    let random = Math.floor(Math.random() * colors.length);
    SIDEBAR.style.backgroundColor = colors[random];
}

setInterval(changeAsideBgColor, 1500);





