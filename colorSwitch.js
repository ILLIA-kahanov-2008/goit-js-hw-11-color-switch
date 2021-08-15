const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.body,
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
}

console.log(refs.body);
refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);
let intervalId = null;


function onStartClick() {
   intervalId = setInterval(() => {
     refs.body.style.background = randomColor();
   }, 1000); 
  refs.startBtn.disabled = true;
}

function onStopClick() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

function randomColor() {
  return `rgb(${randomIntegerFromInterval(0,255)},${randomIntegerFromInterval(0,255)},${randomIntegerFromInterval(0,255)})`
}