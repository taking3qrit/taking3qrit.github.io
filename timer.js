let seconds = 0;
let minutes = 0;
let hours = 0;

function updateTimer() {
    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displayHours = hours < 10 ? "0" + hours : hours;

    document.getElementById('timer').textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

window.onload = function() {
    setInterval(updateTimer, 1000);
}