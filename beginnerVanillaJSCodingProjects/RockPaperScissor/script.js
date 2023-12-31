const game = () => {
	let pScore = 0;
	let cScore = 0;
	
	// 1. start the game + fade the intro div elements in and out
	const startGame =()=>{
		const playBtn = document.querySelector('.intro button');
		const introScreen = document.querySelector('.intro');
		const match = document.querySelector('.match');

		playBtn.addEventListener('click', ()=> {
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn');
		});
	};

	// 2. play match
	const playMatch = () => {
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player-hand');
		const computerHand = document.querySelector('.computer-hand');
		const hands = document.querySelectorAll('.hands img');

		hands.forEach((hand)=>{
			hand.addEventListener('animationend', function(){
				this.style.animation = '';
			});
		});
		//computer options
		const computerOptions = ['ROCK', 'PAPER', 'SCISSORS'];

		options.forEach((option) => {
			option.addEventListener('click', function(){
				const computerNumber = Math.floor(Math.random() * 3);
				const computerChoice = computerOptions[computerNumber];
				//compare hands
				
				setTimeout(()=>{
					compareHands(this.textContent, computerChoice);
				
				//update images
				playerHand.src = `imgs/${this.textContent}.png`;
				computerHand.src = `imgs/${computerChoice}.png`;
				}, 2000);
				playerHand.style.animation = 'shakePlayer 2s ease';
				computerHand.style.animation = 'shakeComputer 2s ease';
			});
		});
	
	};

	// 3. update score
	const updateScore = () => {
		const playerScore = document.querySelector('.player-score p');
		const computerScore = document.querySelector('.computer-score p');
		playerScore.textContent = pScore;
		computerScore.textContent = cScore;
	};



	//will be called inside the playMatch function
	const compareHands = (playerChoice, computerChoice) => {
		const winner = document.querySelector('.winner');
		
		if(playerChoice === computerChoice){
			winner.textContent = 'It is a tie';
			return;
		}

		if (playerChoice === 'ROCK'){
			if(computerChoice === 'SCISSORS'){
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			} else{
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}
		if (playerChoice === 'PAPER'){
			if(computerChoice === 'SCISSORS'){
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			} else{
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}
		if (playerChoice === 'SCISSORS'){
			if(computerChoice === 'PAPER'){
				winner.textContent = 'Player Wins';
				pScore++;
				updateScore();
				return;
			} else{
				winner.textContent = 'Computer Wins';
				cScore++;
				updateScore();
				return;
			}
		}
	}
		
		
	
		

	
	//call all the inner functions at the end of the main game function
	startGame();
	playMatch();
};

//start main game function
game();