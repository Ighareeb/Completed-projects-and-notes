let closeModal = document.getElementById('close');
let openModal = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');


openModal.addEventListener('click', ()=>{
	modalContainer.style.display = 'block';
});

closeModal.addEventListener('click', ()=>{
	modalContainer.style.display = 'none';
});

