//add an item from the input box and submit button
let form = document.querySelector('#addForm');
let submitBtn = document.querySelector('.btn');
let itemList = document.querySelector('#items');
let submitInput = document.querySelector('.inputForm2');
let filterInput = document.querySelector('#filter');
//form submit event

form.addEventListener('submit', addItem);

function addItem(e){
	e.preventDefault();
//create new li element
let li = document.createElement('li');
li.className = 'list-group-item';
//add textnode with input value
li.appendChild(document.createTextNode(submitInput.value));

itemList.appendChild(li);

//create delete btn element for new items
let delBtn = document.createElement('button');
delBtn.className = 'btn btn-danger btn-sm float-right delete';
delBtn.style.float = 'right';
delBtn.appendChild(document.createTextNode('X'));
li.appendChild(delBtn);

}

//delete items
itemList.addEventListener('click', removeItem);
function removeItem(e){
	if (e.target.classList.contains('delete')){
		if(confirm('Are you sure?')){
			e.target.parentElement.remove();
		}
	}
}

//filter items Search items input box

filterInput.addEventListener('keyup', filterItems);
function filterItems(event) {
  let searchText = event.target.value.toLowerCase();
  let items = itemList.getElementsByTagName('li');
  
  Array.from(items).forEach(function(item) {
	let itemName = item.firstChild.textContent.toLowerCase();
	
	if (itemName.includes(searchText)) {
	  item.style.display = 'block';
	} else {
	  item.style.display = 'none';
	}
  });
}
