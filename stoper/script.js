const startBtn = document.querySelector('.stoper__wrapper1__buttons__start');
const pauseBtn = document.querySelector('.stoper__wrapper1__buttons__pause');
const stopBtn = document.querySelector('.stoper__wrapper1__buttons__stop');
const resetBtn = document.querySelector('.stoper__wrapper1__buttons__reset');
const recordsBtn = document.querySelector('.stoper__wrapper1__buttons__records');
const stopwatch = document.querySelector('.stoper__wrapper1__stopwatch');
const time = document.querySelector('.stoper__wrapper1__time');
const timeList = document.querySelector('.stoper__wrapper1__time-list');

const infoBtn = document.querySelector('.stoper__wrapper1__info');
const modalShawod = document.querySelector('.stoper__modal-shadow');
const closeModalBtn = document.querySelector('.stoper__modal__p__btn-close');

let countTime;
let minutes = 0;
let secounds = 0;

let timesArr = [];

const handleStart = () => {
    clearInterval(countTime);

    countTime = setInterval(() => {
        if (secounds < 9) {
            secounds++;
            stopwatch.textContent = `${minutes}:0${secounds}`
        } else if (secounds >= 9 && secounds < 59) {
            secounds++
            stopwatch.textContent = `${minutes}:${secounds}`
        } else {
            minutes++;
            secounds = 0;
            stopwatch.textContent = `${minutes}:00`
        }
    }, 950);
};

const handleStop = () => {

    time.innerHTML = `Last time ${stopwatch.textContent}`

    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent);
    }
    clearStuff();
};

const handlePause = () => {
    clearInterval(countTime);
};

const handleReset = () => {
    time.style.visibility = 'hidden';
    timesArr = [];
    clearStuff();
};

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    secounds = 0;
    minutes = 0;
};

const showRecord = () => {

    timeList.textContent = '';
    let num = 1

    timesArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`

        timeList.appendChild(newTime);
        num++;
    })
};

const showModal = () => {
    if (!(modalShawod.style.display === 'block')) {
        modalShawod.style.display = 'block';
    } else {
        modalShawod.style.display = 'none';
    };

    modalShawod.classList.toggle('modal-animation');

};

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
recordsBtn.addEventListener('click', showRecord);
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modalShawod ? showModal() : false);