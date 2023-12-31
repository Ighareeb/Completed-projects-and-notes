// const numbers = document.querySelectorAll(".number");
// const operators = document.querySelectorAll(".operator");
// const decimal = document.getElementById("decimal");
// const clear = document.getElementById("clear");
// const equal = document.getElementById("equal");
// const display = document.getElementById("display");
// console.log(numbers);

// numbers.forEach((number) =>
// 	number.addEventListener("click", (e) => {
// 		console.log(e.target);
// 	})
// );
// operators.forEach((operator) =>
// 	operator.addEventListener("click", (e) => {
// 		console.log(e.target);
// 	})
// );

// decimal.addEventListener("click", (e) => {
// 	console.log(e.target);
// });
// clear.addEventListener("click", (e) => {
// 	console.log(e.target);
// });
// equal.addEventListener("click", (e) => {
// 	console.log(e.target);
// });

document.addEventListener("DOMContentLoaded", function () {
	let currentInput = "";
	let previousInput = "";
	let currentOperator = "";

	const updateDisplay = () => {
		display.textContent = currentInput;
	};

	const clear = () => {
		currentInput = "";
		previousInput = "";
		currentOperator = "";
		updateDisplay();
	};

	const appendNumber = (num) => {
		if ((currentInput === "0" || currentInput === "-0")) {
			currentInput = num.toString();
		} else {
			currentInput += num.toString();
		}
		updateDisplay();
	};

	const appendDecimal = () => {
		if(!currentInput.includes('.')){
			currentInput += '.';
			updateDisplay();
		}
	};

	const setOperator = (operator) => {
		if (currentInput !== ''){
			currentInput += operator;
			previousInput = currentInput;
			currentInput = '';
		}
	};
	const calculate = () => {
		if (previousInput !== '' && currentInput !== '' && currentOperator !== ''){
			const num1 = parseFloat(previousInput);
			const num2 = parseFloat(currentInput);
			let result = 0;
			switch(currentOperator){
				case '+':
					result = num1 + num2;
					break;
				case '-':
					result = num1 - num2;
					break;
				case '*':
					result = num1 * num2;
					break;
				case '/':
					result = num1 / num2;
					break;
			};
			currentInput = result.toString();
			previousInput= '';
			currentOperator = '';
			updateDisplay();
		}
	};
	document.getElementById('clear').addEventListener('click', clear);
	document.querySelectorAll('.number').forEach((btn)=>{
		btn.addEventListener('click', ()=> appendNumber(btn.textContent));
	});
	document.getElementById('decimal').addEventListener('click', appendDecimal);
	document.querySelectorAll('.operator').forEach((btn)=>{
		btn.addEventListener('click', ()=> setOperator(btn.textContent));
	});
	
	document.getElementById('equal').addEventListener('click', calculate);

	updateDisplay();
});

