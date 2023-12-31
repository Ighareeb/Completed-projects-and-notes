// increment, decrement buttons for break and session length
const breakD = document.getElementById('break-decrement');
const breakI = document.getElementById('break-increment');
const sessionD = document.getElementById('session-decrement');
const sessionI = document.getElementById('session-increment');
// start_stop, reset buttons
const startStopBtn = document.getElementById('start_stop');
const resetBtn = document.getElementById('reset');
// time left display
const timeLeftDisplay = document.getElementById('time-left');
const breakLengthDisplay = document.getElementById('break-length');
const sessionLengthDisplay = document.getElementById('session-length');
console.log(sessionLengthDisplay.innerText);
let timerStatus = 'stopped';
let timerInterval = null;
let seconds = 0
// let minutes = 0;
let minutes = `${sessionLengthDisplay.innerText}`;
let leadingSeconds = 0;
// let leadingMinutes = 0;
timeLeftDisplay.innerText = `${sessionLengthDisplay.innerText}:${leadingSeconds}${seconds}`;
// decrementincrement
breakD.addEventListener('click', ()=>{
	if(breakLengthDisplay && breakLengthDisplay.textContent > 0){
	breakLengthDisplay.textContent--;}
});
	
sessionD.addEventListener('click', ()=>{
	if(sessionLengthDisplay && sessionLengthDisplay.textContent > 0){
	sessionLengthDisplay.textContent--;
	leadingSeconds = '00';
}
});
	
breakI.addEventListener('click', ()=>{
	if(breakLengthDisplay && breakLengthDisplay.textContent < 60){
	breakLengthDisplay.textContent++;
	leadingSeconds = '00';
}
});

sessionI.addEventListener('click', ()=>{
	if(sessionLengthDisplay && sessionLengthDisplay.textContent < 60){
	sessionLengthDisplay.textContent++;}
});
function stopWatch(){
	seconds++;
	if(seconds / 60 === 1){
		seconds = 0;
		minutes++;
	}
	minutes = `${minutes}`;
	seconds < 10 ? (leadingSeconds = `0${seconds}`) : (leadingSeconds = seconds);
	// minutes < 10 ? (leadingMinutes = `0${minutes}`) : (leadingMinutes = minutes);

	// timeLeftDisplay.innerText = `${sessionLengthDisplay.innerText}:${leadingSeconds}`;
	timeLeftDisplay.innerText = `${minutes}:${leadingSeconds}`;
	// timeLeftDisplay.innerText = `${leadingMinutes}:${leadingSeconds}`;
}

startStopBtn.addEventListener('click', ()=>{
	if(timerStatus === 'stopped'){
		timerInterval = window.setInterval(stopWatch, 100);
		startStopBtn.firstElementChild.classList.add('fa-pause');
		startStopBtn.firstElementChild.classList.remove('fa-play');
		timerStatus = 'started';
	} else {
		window.clearInterval(timerInterval);
		startStopBtn.firstElementChild.classList.add('fa-play');
		startStopBtn.firstElementChild.classList.remove('fa-pause');
		timerStatus = 'stopped';
	}
});


resetBtn.addEventListener('click', ()=>{
	window.clearInterval(timerInterval);
	const sessionLength = parseInt(sessionLengthDisplay.innerText);
	// timeLeftDisplay.innerText = `${sessionLengthDisplay.innerText}:${leadingSeconds}`;
	// minutes = `${minutes}`;
	if (sessionLengthDisplay.innerText !=='25'){
	minutes = `${sessionLengthDisplay.innerText}`
	leadingSeconds = '00';
	timeLeftDisplay.innerText = `${minutes}:${leadingSeconds}`;
	
} else{
	sessionLengthDisplay.innerText = '25';
	minutes = '25'
	leadingSeconds = '00';
	timeLeftDisplay.innerText = `${minutes}:${leadingSeconds}`;
}
});

