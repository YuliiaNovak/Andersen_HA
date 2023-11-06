let timerInterval;
let isRunning = false;
let timeInSeconds = 0;

function startTimer() {
  if (!isRunning) {
    const timeInput = document.getElementById("timeInput").value;
    const [hours, minutes, seconds] = timeInput.split(":").map(Number);
    timeInSeconds = hours * 3600 + minutes * 60 + seconds;

    if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
      isRunning = true;
      timerInterval = setInterval(updateTimer, 1000);
    }
  }
}

function updateTimer() {
  if (timeInSeconds > 0) {
    timeInSeconds--;
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    const timerDisplay = document.getElementById("timerDisplay");
    timerDisplay.textContent = `${addZero(hours)}:${addZero(minutes)}:${addZero(
      seconds
    )}`;
  } else {
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}
