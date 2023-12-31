


const prompt = require('prompt-sync')(); //imports function from prompt-sync package

//global variables
const ROWS = 3;
const COLS = 3;

//number of symbols in each reel
const SYMBOLS_COUNT = {
	A:2,
	B:4,
	C:6,
	D:8 
}
//multiplier for the bet if you match all lines
const SYMBOLS_VALUES = {
	A:5,
	B:4,
	C:3,
	D:2 
}







// 1 how much money the user has to play with? Deposit some money

//by default the prompt() returns a string so we need to convert to int/number - 
// check if valid number and do operations
const deposit = () => {
	while(true){
	const depositAmount = prompt('Enter a deposit amount: ');
	const numDepositAmount = parseFloat(depositAmount); 

	if(isNaN(numDepositAmount) || numDepositAmount <= 0){
		console.log('Invalid deposit amount, try again.');
	} else {return numDepositAmount;}
}
};

// 2 how much the user is betting - collect bet amount USING PROMPT-SYNC PACKAGE
// 3 determine number of lines they are betting 

const getNumberofLines = () => {
	while(true){
	const lines = prompt('Enter the number of lines to bet on (1-3): ');
	const numLines = parseFloat(lines); 

	if(isNaN(numLines) || numLines <= 0 || numLines > 3){
		console.log('Invalid number of lines, try again.');
	} else {return numLines;}
}
};

// 4 collect a bet amount
const getBet = (balance, lines) => {
	while(true){
		const bet = prompt('Enter the bet per line: ');
		const numBet = parseFloat(bet); 
	
		if(isNaN(numBet) || numBet <= 0 || numBet > balance / lines){
			console.log('Invalid bet, try again.');
		} else {return numBet;
		}
	}
};

// 5 spin the slot machine
const spin = () => {
	const symbols = [];
	for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
		for (let i = 0; i < count; i++){
			symbols.push(symbol);
		}
	}

const reels =[];
for (let i = 0; i < COLS;i++){
	reels.push([]);
	const reelSymbols = [...symbols];
	for (let j = 0; j<ROWS;j++){
		const randomIndex = Math.floor(Math.random() * reelSymbols.length);
		const selectedSymbol = reelSymbols[randomIndex];
		reels[i].push(selectedSymbol);
		reelSymbols.splice(randomIndex, 1);
	}	
}
return reels;
};

// 6 check if user Won
// 7 give user winnings
// 8 play again
//we need to transpose the columns array into rows
const transpose = (reels) => {
	const rows =[];

	for (let i = 0; i < ROWS; i++){
		rows.push([]);
		for (let j=0; j <COLS; j++){
			rows[i].push(reels[j][i]);
		}
	}
	return rows;
};

const printRows = (rows) => {
	for (const row of rows){
		let rowString = '';
		for (const [i, symbol] of row.entries()){
			rowString += symbol;
			if (i != row.length - 1){
				rowString += ' | ';
			}
		}
		console.log(rowString);
	}
};

const getWinnings = (rows, bets, lines) =>{
	let winnings = 0;
	for (let row = 0; row<lines; row++){
		const symbols = rows[row];
		let allSame = true;
		for (const symbol of symbols){
			if (symbol != symbols[0]){
				allSame = false;
				break;
			}
		}

		if (allSame){
			winnings += bets * SYMBOLS_VALUES[symbols[0]];
		}
	}
	return winnings;
}; 

const game = () => {
	let balance = deposit();
	
	
	while(true){
		console.log('You have a balance of $' + balance);
const numberOfLines = getNumberofLines();
const bet = getBet(balance, numberOfLines);
balance -= bet * numberOfLines;
const reels = spin();
const rows = transpose(reels);
printRows(rows);
const winnings = getWinnings (rows, bet, numberOfLines);
balance += winnings;
console.log('You won, $' + winnings.toString());
if (balance <= 0){
	console.log('You ran out of money!');
	break;
}
const playAgain = prompt('Do you want to play again (y/n)?');
if (playAgain != 'y') break;
	};
};

game();