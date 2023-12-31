const tilesContainer = document.querySelector('.tiles');
const colors = ['red', 'green', 'blue', 'purple', 'plum', 'aquamarine', 'crimson', 'gold'];
const colorsPickList = [...colors, ...colors];
const tileCount = colorsPickList.length;

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color){
	const tileEl = document.createElement('div');
	tileEl.classList.add('tile');
	tileEl.setAttribute('data-color', color);
	tileEl.setAttribute('data-revealed', 'false');

	tileEl.addEventListener('click', ()=>{
		const revealed = tileEl.getAttribute('data-revealed');
		if (awaitingEndOfMove || revealed ==='true' || tileEl === activeTile){
			return;
		}
		tileEl.style.backgroundColor = color;

		if(!activeTile){
			activeTile = tileEl;
			return;
		}

		const colorToMatch = activeTile.getAttribute('data-color');
		if (colorToMatch === color){
			activeTile.setAttribute('data-revealed', 'true');
			tileEl.setAttribute('data-revealed', 'true');
			activeTile = null;
			awaitingEndOfMove = false;
			revealedCount += 2;

			if(revealedCount === tileCount){
				alert('You win! Refresh to play again.');
			}
			return;
		}


		awaitingEndOfMove = true;
		setTimeout(()=>{
			tileEl.style.backgroundColor = null;
			activeTile.style.backgroundColor = null;
			awaitingEndOfMove = false;
			activeTile = null;
		}, 1000);
	});

	return tileEl;
}


for (let i = 0; i < tileCount; i++){
	const randomIndex = Math.floor(Math.random() * colorsPickList.length);
	const color = colorsPickList[randomIndex];
	const tile = buildTile(color);

	colorsPickList.splice(randomIndex, 1);
	tilesContainer.appendChild(tile);
}