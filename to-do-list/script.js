const input = document.getElementById('input');
const addBtn =document.getElementById('add');
const newTaskContainer = document.querySelector('.newTaskContainer');

addBtn.addEventListener('click', (e)=>{
	e.preventDefault();

	let newTask = document.createElement('li');
	let completedBtn = document.createElement('button');
	completedBtn.innerHTML = `<i class='fa-solid fa-check'></i>`;
	let deleteBtn = document.createElement('button');
	deleteBtn.innerHTML = `<i class='fa-solid fa-trash'></i>`;
	let div = document.createElement('div');
	newTask.innerText = input.value;
	div.appendChild(completedBtn);
	div.appendChild(deleteBtn);
	newTask.appendChild(div);
	existingTaskList = newTaskContainer.querySelector('ol')
	if (input.value === ''){
		alert('Please add a task');
	}
	else if(existingTaskList && input.value !== ''){
		existingTaskList.appendChild(newTask);
	} else {
		let newTaskList = document.createElement('ol');
		newTaskList.appendChild(newTask);
		newTaskContainer.appendChild(newTaskList);
		
	}
	input.value = '';
	completedBtn.addEventListener('click', ()=>{
		newTask.style.textDecoration='line-through'
	});
	deleteBtn.addEventListener('click', ()=>{
		newTask.remove();
	});
});
	
	
	