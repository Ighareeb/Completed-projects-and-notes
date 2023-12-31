const powerBtn = document.querySelector('#power-button');
const audioClips = document.querySelectorAll('.clip');
const drumPads = document.querySelectorAll('.drum-pad');
const volumeSlider = document.getElementById('volume-slider');
const display = document.getElementById('display');
let powerOn=true;
console.log(display);
powerBtn.addEventListener('click', togglePower);
console.log(drumPads);
volumeSlider.addEventListener('input', ()=>{
	setVolume(volumeSlider.value);
});

for (let i=0; i<drumPads.length; i++){
	drumPads[i].addEventListener('click', ()=>{
		if(powerOn){
			playAudio(i);
		}
	});
}

document.addEventListener('keydown', (event)=>{
	const key = event.key.toUpperCase();
	const index = [...drumPads].findIndex((drumPad) =>
		drumPad.id === key);
	if (powerOn && index !== -1){
		playAudio(index);
	}
});

function playAudio(index){
	audioClips[index].currentTime = 0;
	audioClips[index].volume = volumeSlider.value;
	audioClips[index].play();
	display.textContent = audioClips[index].src.split('/').pop().replace('.mp3', '');
}

function setVolume(volume){
	audioClips.forEach((audioClip)=>{
		audioClip.volume = volume;
	});
}



function togglePower(){
	powerOn = !powerOn;
	const slider = document.querySelector('#volume-slider');
	slider.classList.toggle('power-off', !powerOn);
}