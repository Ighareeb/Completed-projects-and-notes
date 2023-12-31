const ADD = "ADD";

const reducer = (state = 0, action) => {
	switch (action.type) {
		case ADD:
			return state + 1;
		default:
			return state;
	}
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// answer 1
const increment = () => {
	count++;
};
store.subscribe(increment);

// answer2 
store.subscribe(() => count++);

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
