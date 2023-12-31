const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');

const previousOperandBtn = document.querySelector('[data-previous-operand]');
const currentOperandBtn = document.querySelector('[data-current-operand]');

class Calculator {
	constructor(previousOperandBtn, currentOperandBtn) {
		this.previousOperandBtn = previousOperandBtn;
		this.currentOperandBtn = currentOperandBtn;
		this.clear();
	}
	clear(){
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;
	}
	delete(){
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}
	//append number .toString to prevent operation...want to show to equation in the display
	appendNumber(number){
		
		if (number === '.' && this.currentOperand.includes('.')) return;
		this.currentOperand = this.currentOperand.toString() + number.toString();
	}
	chooseOperation(operation){
		if (this.currentOperand === '') return;
		if (this.previousOperand !== '') {
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}
	compute(){
		let computation;
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);
		if (isNaN(prev) || isNaN(current)) return;
		switch (this.operation){
			case '+':
				computation = prev + current;
				break;
			case '-':
				computation = prev - current;
				break;
			case '*':
				computation = prev * current;
				break;
			case '÷':
				computation = prev / current;
				break;
			default:
				return;
		}
		this.currentOperand = computation;
		this.operation = undefined;
		this.previousOperand = '';
	}
	//split the decimal number integer - decimal
	//.split turns the string into an array with [0] being the integer
	//and [1] being the decimal numbers according the ('.') split defined
	getDisplayNumber(number){
		const stringNumber = number.toString();
		const integerDigits = parseFloat(stringNumber.split('.')[0]);
		const decimalDigits = stringNumber.split('.')[1];
		let integerDisplay;
		if (isNaN(integerDigits)){
			integerDisplay = '';
		} else {
			integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
		}
		if (decimalDigits != null){
			return `${integerDisplay}.${decimalDigits}`;
		} else {
			return integerDisplay;
		}
	
	}
	updateDisplay(){
		this.currentOperandBtn.innerText = this.getDisplayNumber(this.currentOperand);
		if (this.operation != null){
			this.previousOperandBtn.innerText = 
			`${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
		} else 
		{this.previousOperandBtn.innerText = ''};
	}
}

const calculator = new Calculator(previousOperandBtn, currentOperandBtn);

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
	calculator.appendNumber(button.innerText);
	calculator.updateDisplay();
});
});
operationButtons.forEach(button => {
	button.addEventListener('click', () => {
	calculator.chooseOperation(button.innerText);
	calculator.updateDisplay();
});
});
equalButton.addEventListener('click', () => {
	calculator.compute();
	calculator.updateDisplay();
});
allClearButton.addEventListener('click', () => {
	calculator.clear();
	calculator.updateDisplay();
});
deleteButton.addEventListener('click', () => {
	calculator.delete();
	calculator.updateDisplay();
});



