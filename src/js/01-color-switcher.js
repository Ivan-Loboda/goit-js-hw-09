function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timerId;

btnStart.addEventListener('click', () => {
    timerId = setInterval(() => document.querySelector('body').style.backgroundColor = getRandomHexColor(), 1000);
    btnStop.disabled = false;
    btnStart.disabled = true;
});

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStop.disabled = true;
    btnStart.disabled = false;
    // e.currentTarget.removeAttribute("disabled");
});