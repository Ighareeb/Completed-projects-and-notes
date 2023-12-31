// you can also use other array methods to modify state. DO NOT mutate!
const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
	switch (action.type) {
		case "REMOVE_ITEM":
			// Don't mutate state here or the tests will fail
// solution 1
		return [
			...state.slice(0, action.index),
			...state.slice(action.index + 1, state.length)
		]
// solution 2
		return state.filter((item, index)=> index !== action.index);
		default:
			return state;
	}
};

const removeItem = (index) => {
	return {
		type: "REMOVE_ITEM",
		index,
	};
};

const store = Redux.createStore(immutableReducer);
