let groceries = document.getElementsByClassName('groceries')[0];

let pencil = document.getElementById('pencil');

let allItems = document.getElementById('allItems');

let userInput = document.getElementById('userInput');
//input area where you can type grocery items out.
pencil.addEventListener('click', () => {
	allItems.innerHTML = ''; 	//clears the list that you have entered when you press the pencil icon
});

userInput.addEventListener('keydown', (e) => {
	if (e.key === "Enter") {
		addItem();			//when you press enter key function addItem() is called
	}
});	

function addItem(){
	let h2 = document.createElement('h2');
	h2.innerHTML = "- " + userInput.value;	
//function creates h2element adds userInput to the list
	h2.addEventListener('click', () => {
		h2.style.textDecoration = 'line-through';
	})	//when you click on an item in your list it gets crossed out
	allItems.insertAdjacentElement('beforeend', h2);
	userInput.value = '';	//adds item to the end of the list
}



