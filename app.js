const SIDEBAR = document.querySelector('.sidebar__main');
let colors = ['brown', 'darkgreen', 'blueviolet', 'chocolate', 'darkred',
    'indigo', 'midnightblue', 'darkslategrey', 'slateblue', 'teal'];

function changeBgColor() {
    let random = Math.floor(Math.random() * colors.length);
    SIDEBAR.style.backgroundColor = colors[random];
}

setInterval(changeBgColor, 1500);





