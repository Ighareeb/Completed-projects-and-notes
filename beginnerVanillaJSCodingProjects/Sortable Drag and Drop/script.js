const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.container');

draggables.forEach(draggable => {
	draggable.addEventListener('dragstart', () => {
		draggable.classList.add('dragging');
	});
	draggable.addEventListener('dragend', () => {
		draggable.classList.remove('dragging');
	});
});

containers.forEach(container => {
	container.addEventListener('dragover', e => {
		e.preventDefault();
		const afterElement = getDragAfterElement(container, e.clientY);
		const draggable = document.querySelector('.dragging');
		console.log(afterElement);
		if (afterElement == null){
			container.appendChild(draggable);
		} else {
			container.insertBefore(draggable, afterElement);
		}
		
		
	});

});

function getDragAfterElement(container, y){
	const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
	
	return draggableElements.reduce((prev, elem) => {
		const box = elem.getBoundingClientRect();
		const offset = y - box.top - box.height / 2;
		console.log(offset);
		if (offset < 0 && offset > prev.offset){
			return {offset: offset, element: elem}		
		} else {
			return prev;
		}
	}, {offset: Number.NEGATIVE_INFINITY}).element;
};

