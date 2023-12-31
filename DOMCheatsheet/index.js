let container = document.querySelector('.container');
// let content = document.createElement('div');

// content.classList.add('new-div');	
// content.innerHTML = '<p> Hello </p>'
// content.style.color = 'white';
// container.setAttribute('style', 'background-color: red;');

// container.appendChild(content);

// let para = document.createElement('p');
// para.setAttribute('style', 'text: white; color: green; font-size: 50px');
// para.innerText = "this is my para";
// content.appendChild(para);

// let hthree = document.createElement('h3');
// hthree.setAttribute('style', 'text-align: center; font-size: 50px; color:blue;');
// hthree.innerText = 'this is my h3';
// content.appendChild(hthree);

// let button = document.querySelector("#btn1")
// button.setAttribute('style', "width: 200px; height: 200px; background-color: purple; cursor: pointer; ");
// button.addEventListener('click', function() {
// 	hthree.innerText = "I clicked the button";
// })
// button.addEventListener('mouseover', function() {
// 	button.style.backgroundColor = 'black';
// })

let button = document.querySelector('#btn1').addEventListener('click', btnClick3);


let button2 = document.querySelector('#btn2').addEventListener('dblclick', btnClick2);
function btnClick2(){
	console.log("you clicked button 2");
	let btn3 = document.createElement('button');
	btn3.setAttribute('style', 'background :yellow; width:300px; height:300px; ');
	container.appendChild(btn3);

}
let input = document.querySelector('#input').addEventListener('input', btnClick3);
function btnClick3(e){
	console.log(e);
	let output = document.createElement('div');
	output.setAttribute('style', "font-size:50px; color:purple; width=200px; height=200px;");
	 container.appendChild(output);
	// output.innerHTML = e.inputValue;
	output.appendChild(document.createTextNode(e.target.value));

}
// let colorSquare = document.querySelector('.colorTrack');
// let blkSquare = document.querySelector('.container2');
// blkSquare.addEventListener('mousemove', trackEvent);
// let trackDiv = document.querySelector(".track");
// function trackEvent(e){
// 	trackDiv.innerHTML = `<h3> mouseX:${e.offsetX} mouseY:${e.offsetY}</h3>`;
// 	colorSquare.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;
// }