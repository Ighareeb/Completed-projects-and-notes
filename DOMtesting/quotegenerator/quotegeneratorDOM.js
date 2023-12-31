let quote = document.querySelector('.quote');
let btn = document.querySelector('#new-quote');
let person = document.querySelector('.person');



btn.addEventListener('click', ()=>{
	let quotes = fetch("https://api.quotable.io/random")
	.then(res => res.json())
	.then(data => {
		quote.textContent = data.content;
		person.textContent = data.author;
	})
	.catch(error => {
		console.log(error)
	});
	
});
