let timer;
let hours = 0, minutes = 0, seconds = 0;
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const toggleButton = document.getElementById('toggle');

function updateDisplay() {
    hoursDisplay.textContent = String(hours).padStart(2, '0');
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (timer) return; 
    timer = setInterval(() => {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }, 1000);
    toggleButton.textContent = 'Pause';
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
    toggleButton.textContent = 'Start';
}

function resetTimer() {
    pauseTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

toggleButton.addEventListener('click', () => {
    if (timer) {
        pauseTimer();
    } else {
        startTimer();
    }
});

document.getElementById('reset').addEventListener('click', resetTimer);
