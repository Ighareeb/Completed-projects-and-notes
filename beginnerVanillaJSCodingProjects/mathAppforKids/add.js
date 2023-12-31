const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

var answer = 0;

function generateEquation(){
	let num1 = Math.floor(Math.random() * 13);
	let num2 = Math.floor(Math.random() * 13);
	let dummyAnswer1 = Math.floor(Math.random() * 13);
	let dummyAnswer2 = Math.floor(Math.random() * 13);

	let allAnswers = [];
	let switchAnswers = [];

	answer = num1 + num2;
	document.getElementById('num1').innerHTML = num1;
	document.getElementById('num2').innerHTML = num2;

	allAnswers = [answer, dummyAnswer1, dummyAnswer2];

	for (let i = 0; i < allAnswers.length; i--){
        if (allAnswers[i] === answer){
            switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
        }
    }

	option1.innerHTML = switchAnswers[0];
	option2.innerHTML = switchAnswers[1];
	option3.innerHTML = switchAnswers[2];
}

option1.addEventListener("click", function(){
    if (option1.innerHTML == answer){
		generateEquation();
	}

});
option2.addEventListener("click", function(){
    if (option2.innerHTML == answer){
		generateEquation();
	}
	
});
option3.addEventListener("click", function(){
    if (option3.innerHTML == answer){
		generateEquation();
	}
	
});

generateEquation();