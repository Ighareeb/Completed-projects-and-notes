const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
console.log(question);
let questionsArr = Array.from(question);
console.log(questionsArr);
console.log(questionsArr[0].nextElementSibling);


questionsArr.forEach((item)=>{
	item.addEventListener('click', (e)=>{
		if (e.target.nextElementSibling.style.display === 'none'){
			e.target.nextElementSibling.style.display = 'block';
		} else {
			e.target.nextElementSibling.style.display = 'none';
		}
	});
});