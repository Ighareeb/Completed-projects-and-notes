// increment, decrement buttons for break and session length
const breakD = document.getElementById("break-decrement");
const breakI = document.getElementById("break-increment");
const sessionD = document.getElementById("session-decrement");
const sessionI = document.getElementById("session-increment");
// start_stop, reset buttons
const startStopBtn = document.getElementById("start_stop");
const resetBtn = document.getElementById("reset");
// time left display
const timeLeftDisplay = document.getElementById("time-left");
const breakLengthDisplay = document.getElementById("break-length");
const sessionLengthDisplay = document.getElementById("session-length");
const timerLabel = document.getElementById('timer-label');
console.log(sessionLengthDisplay.innerText);

let timerStatus = "stopped";
let timerInterval = null;
let seconds = 0;
let minutes = `${sessionLengthDisplay.innerText}`;
let leadingSeconds = 0;


function startTimer(){
timerInterval = setInterval(()=>{
	seconds--;
	if (seconds < 0){
		seconds = 59;
		minutes--;
	}
	if (minutes < 0){
		if (timerLabel.innerText === 'Session'){
			timerLabel.innerText = 'Break';
			minutes = parseInt(breakLengthDisplay.innerText) - 1;
		} else {
			timerLabel.innerText = 'Session';
			minutes = parseInt(sessionLengthDisplay.innerText) - 1;
		}
	}
	leadingSeconds = seconds < 10 ? `0${seconds}` : seconds;
	timeLeftDisplay.innerText = `${minutes}:${leadingSeconds}`;
}, 1000);
if(minutes === 0 && seconds === 0){
	document.getElementById('ping').play();
}
}

function pauseTimer(){
	clearInterval(timerInterval);
}
function resetTimer(){
	clearInterval(timerInterval);
	timerStatus = 'stopped';
	timerLabel.innerText = 'Session';
	minutes = parseInt(sessionLengthDisplay.innerText);
	seconds = 0;
	leadingSeconds = '00';
	timeLeftDisplay.innerText = `${minutes}:${leadingSeconds}`;
}
breakD.addEventListener("click", () => {
	if (breakLengthDisplay && breakLengthDisplay.textContent > 0) {
		breakLengthDisplay.textContent--;
	}
});

sessionD.addEventListener("click", () => {
	if (sessionLengthDisplay && sessionLengthDisplay.textContent >1) {
		sessionLengthDisplay.textContent--;
		minutes = `${sessionLengthDisplay.innerText}`;
		leadingSeconds = '00'
		timerLeftDisplay.innerText = `${minutes}:${leadingSeconds}`;
	}
});

breakI.addEventListener("click", () => {
	if (breakLengthDisplay && breakLengthDisplay.textContent < 60) {
		breakLengthDisplay.textContent++;
		
	}
});
sessionI.addEventListener("click", () => {
	if (sessionLengthDisplay && sessionLengthDisplay.textContent < 60) {
		sessionLengthDisplay.textContent++;
		minutes = `${sessionLengthDisplay.innerText}`;
		leadingSeconds = "00";
		timeLeftDisplay.innerText = `${minutes}:${leadingSeconds}`;
	}
});

startStopBtn.addEventListener("click", () => {
	if (timerStatus === 'stopped'){
		timerStatus = 'started';
		startTimer();
		startStopBtn.firstElementChild.classList.add('fa-pause');
		startStopBtn.firstElementChild.classList.remove('fa-play');
	} else {
		timerStatus = 'stopped';
		pauseTimer();
		startStopBtn.firstElementChild.classList.add('fa-play');
		startStopBtn.firstElementChild.classList.remove('fa-pause');
	}
});



resetBtn.addEventListener("click", () => {
resetTimer();
});
