//constant for addtodo action types
const ADD_TO_DO = "ADD_TO_DO";

// A array list of strings representing tasks to do:
const todos = [
	"Go to the store",
	"Clean the house",
	"Cook dinner",
	"Learn to code",
];

// addtodo reducer that changes state based on action received
const immutableReducer = (state = todos, action) => {
	switch (action.type) {
		case ADD_TO_DO:
			// Don't mutate state here or the tests will fail
// solution 1
			// const newTodos = [...state, action.todo];
			// return newTodos;
// solution 2
			// return state.concat(action.todo);
		default:
			return state;
	}
};

//action creator for creating an object that represents an action event
const addToDo = (todo) => {
	return {
		type: ADD_TO_DO,
		todo,
	};
};

const store = Redux.createStore(immutableReducer);


