const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById("resetBtn");
// const timer = document.getElementById.apply('timer');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";
function stopWatch() {
	seconds++;
	if (seconds / 60 === 1) {
		seconds = 0;
		minutes++;
		if (minutes / 60 === 1) {
			minutes = 0;
			hours++;
		}
	}
	seconds < 10 ? (leadingSeconds = `0${seconds}`) : (leadingSeconds = seconds);
	minutes < 10 ? (leadingMinutes = `0${minutes}`) : (leadingMinutes = minutes);
	hours < 10 ? (leadingMinutes = `0${hours}`) : (leadingMinutes = seconds);
	let displayTimer = (document.getElementById(
		"timer"
	).innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`);
}

startStopBtn.addEventListener("click", () => {
	if (timerStatus === "stopped") {
		timerInterval = window.setInterval(stopWatch, 1000);
		startStopBtn.firstElementChild.classList.add("fa-pause");
		startStopBtn.firstElementChild.classList.remove("fa-play");
		timerStatus = "started";
	} else {
		window.clearInterval(timerInterval);
		startStopBtn.firstElementChild.classList.add("fa-play");
		startStopBtn.firstElementChild.classList.remove("fa-pause");
		timerStatus = "stopped";
	}
});
resetBtn.addEventListener("click", (e) => {
	window.clearInterval(timerInterval);
	seconds = 0;
	minutes = 0;
	hours = 0;
	document.getElementById('timer').innerText = `00:00:00`;
});
