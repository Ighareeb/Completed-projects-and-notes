const youTubeElements = document.querySelectorAll('.fa-brands');
if(youTubeElements.length > 0) {
youTubeElements[0].addEventListener('click', function(){
	window.open('https://www.youtube.com/watch?v=tDaZ52NO_Dw');
})
youTubeElements[1].addEventListener('click', function(){
	window.open('https://www.youtube.com/watch?v=Kq9qMWaMlbU');
})
youTubeElements[2].addEventListener('click', function(){
	window.open('https://www.youtube.com/watch?v=RPntpLXk6Go');
});
}

const articleElements = document.querySelectorAll('.article');
if(articleElements.length > 0) {
articleElements[0].addEventListener('click', function(){
	window.open('https://en.wikipedia.org/wiki/Knight')
})
articleElements[1].addEventListener('click', function(){
	window.open('https://en.wikipedia.org/wiki/Spartan_army')
})
articleElements[2].addEventListener('click', function(){
	window.open('https://en.wikipedia.org/wiki/Knights_Templar')
});
}