const start = document.getElementById("startTimer");
const stop = document.getElementById("stopTimer");
const reset = document.getElementById("resetTimer");
const display = document.getElementById("timerDisplay");


let seconds = 0;
let time = null;
const interval = 1000;
start.addEventListener("click", startTimer);
function startTimer() {
    if (time === null) {
        time = setInterval(() => {
            seconds++;
            display.textContent = seconds;
        }, interval); 
    }
    console.log(interval);
}

stop.addEventListener("click", stopTimer);
function stopTimer() {
    clearInterval(time);
    time = null;
}

reset.addEventListener("click", resetTimer);
function resetTimer() {
    clearInterval(time);
    time = null;
    seconds = 0;
    display.textContent = seconds;
}
