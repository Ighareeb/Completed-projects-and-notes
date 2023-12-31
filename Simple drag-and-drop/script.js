const listItems = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");
console.log(listItems);
console.log(lists);
let draggedItem = null;

for (let i = 0; i<listItems.length; i++){
	const item = listItems[i];

	item.addEventListener('dragstart', (e)=>{
		console.log(e);
		draggedItem = item;
		setTimeout(()=>{
			item.style.display = 'none';

		}, 0);
	});

	item.addEventListener('dragend', (e)=>{
		console.log(e);
		setTimeout(()=>{
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	});

	for (let j = 0; j < lists.length; j++){
		const list = lists[j];
		list.addEventListener('dragover',(e)=>{
			e.preventDefault();
		});
		list.addEventListener('dragenter',(e)=>{
			e.preventDefault();
			list.style.backgroundColor = 'rgba(0,0,0,0.5)';
		});
		list.addEventListener('dragleave',(e)=>{
			
			list.style.backgroundColor = 'rgba(0,0,0,0.1)';
		});
		list.addEventListener('drop', (e)=>{
			list.append(draggedItem);
			list.style.backgroundColor = 'rgba(0,0,0,0.1)';
		});
	}
}