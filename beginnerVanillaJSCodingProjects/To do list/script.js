const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

todoBtn.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);
document.addEventListener('DOMContentLoaded', getTodos)

function addToDo(event){
	event.preventDefault();
	
	const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

	const newToDo = document.createElement('li');
	newToDo.innerText = todoInput.value;
	newToDo.classList.add('todo-item');
	todoDiv.appendChild(newToDo);

	saveLocalToDos(todoInput.value);

	const completedBtn = document.createElement('button');
	completedBtn.innerHTML = '<i class="fas fa-check"></i>';
	completedBtn.classList.add('complete-btn');
	todoDiv.appendChild(completedBtn);
	
	const trashBtn = document.createElement('button');
	trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
	trashBtn.classList.add('trash-btn');
	todoDiv.appendChild(trashBtn);
	
	todoList.appendChild(todoDiv);
	todoInput.value="";
}

function deleteCheck(e){
	const item = e.target;
	// console.log(item);
	if (item.classList.contains('trash-btn')){
		item.parentElement.classList.add('fall');
		item.parentElement.addEventListener('transitionend', function(){
			item.parentElement.remove();
		})
		

	}
	if (item.classList.contains('complete-btn')){
		item.parentElement.classList.toggle('completed');
	}
}

function filterToDo(el){
	const todos = Array.from(todoList.childNodes).filter(node=>node.nodeType ===Node.ELEMENT_NODE);
	
	todos.forEach(function(todo){
		
		switch(el.target.value){
			case 'all':
				todo.style.display = 'flex';
				break;
			case 'completed':
				if (todo.classList.contains('completed')){
					todo.style.display = 'flex';
				} else{
					todo.style.display = 'none';
				} 
				break;
			case "uncompleted":
				if(!todo.classList.contains('completed')){
						todo.style.display = 'flex';
					} else {
						todo.style.display = 'none';	
					}
					break;
			
		}
	});
}

function saveLocalToDos(todo){
	let todos;
	if (localStorage.getItem('todos')===null){
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos(){
	let todos;
	if (localStorage.getItem('todos')===null){
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem('todos'));
	}
	todos.forEach((todo)=>{
		const todoDiv = document.createElement('div');
	todoDiv.classList.add('todo');

	const newToDo = document.createElement('li');
	newToDo.innerText = todo;
	newToDo.classList.add('todo-item');
	todoDiv.appendChild(newToDo);

	

	const completedBtn = document.createElement('button');
	completedBtn.innerHTML = '<i class="fas fa-check"></i>';
	completedBtn.classList.add('complete-btn');
	todoDiv.appendChild(completedBtn);
	
	const trashBtn = document.createElement('button');
	trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
	trashBtn.classList.add('trash-btn');
	todoDiv.appendChild(trashBtn);
	
	todoList.appendChild(todoDiv);
	});
}