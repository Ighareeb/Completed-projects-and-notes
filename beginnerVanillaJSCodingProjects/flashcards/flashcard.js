const  flashcards = document.getElementById("flashcards");
const createBox = document.getElementById("create-box")[0];
const question = document.getElementById("question")[0];
const answer = document.getElementById("answer")[0];

let flashcardsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

//checks if we have any flashcards saved in an array in LOCAL STORAGE so we dont create a new array every time. 
//JSON.parse checks localStorage and returns the array if it exists OR adds array if not.

flashcardsArray.forEach(divMaker); //readds flashcards onto the screen from the local storage that we had already saved from a previous session.
let divMaker = (index) => {
	let div = document.createElement("div");	//creates a new div element
	let h2_question = document.createElement("h2"); 
	let h2_answer = document.createElement("h2");
	div.className = "flashcard"; //note that style from the css file is applied here in .flashcard and .flashcard h2

	h2_question.setAttribute('style', 'border-top: 1px solid red; padding: 15px; margin-top: 30px;');

	h2_question.innerHTML = text.my_question;	//inserts the question into the h2 element using the 'my_question' in addFlashcard function
	h2_answer.setAttribute('style', 'text-align: center; display: none; color: red');
	//we will add event listener so we can display the answer when the user double-clicks on the h2 element
	h2_answer.innerHTML = text.my_answer;

	div.appendChild(h2_question);	//appends the h2 element to the div
	div.appendChild(h2_answer);	//appends the h2 element to the div

	div.addEventListener("dblclick", () => {	//adds an event listener to the h2 element so that we can display the answer
		if (h2_answer.style.display = 'none')
		h2_answer.style.display = 'block';
		else h2_answer.style.display === 'none';
	});
	flashcards.appendChild(div);    //appends the div element to the flashcards element
}
//this is the function that creates a div for each flashcard in the array. remember the function is part of the addFlashCard() function that is linked to the SAVE button i.e. placing the flashcard on the screen
let addFlashCard = () => {    //this refers to the SAVE button and adds a flashcard to the flashcardsArray
	let flashcard_info = {	//this stores the user input in a 'dictionary'
		'my_question': question.value,
		'my_answer': answer.value
	}
	flashcardsArray.push(flashcard_info);	//stores 'dictionary' into the array
	localStorage.setItem("items", JSON.stringify(flashcardsArray)); //updates local storage
	divMaker(flashcardsArray.length - 1);	//function to display the new flashcard on the screen. passes data from this particular flashcard that just got added/created.
	question.value = '';
    answer.value = '';	//clears both input fields after adding a flashcard
}
let delFlashCards = () => {
	localStorage.clear();
	flashcards.innerHTML = ''; //sets the innerHTML property of the flashcards element to an empty string, clearing its content.
	flashcardsArray = []; //sets the flashcardsArray to an empty array.
}

let showCreateCardBox = () => {
	createBox.style.display = 'block';
}  
//to make it reappear we need to use the function associated with the NEW CARD button
let hideCreateBox = () => {		//this refers to the 'close' button and hides/disappears the create flashcard box
	createBox.style.display = 'none';
}
//note: createBox variable is linked to id='create-box' div










