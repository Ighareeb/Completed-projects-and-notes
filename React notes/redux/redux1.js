// action event - a JS object
const defaultState = {
	login: false,
};

//defining reducer fucntion that is needed as argument in createStore() method
const reducer = (state = defaultState, action) => {
	if (action.type === "LOGIN") {
		return { login: true };
	} else {
		return state;
	}
};

//creating store - reducer is responsible for state modifications that take place in response to actions
const store = Redux.createStore(reducer);

//action creator - a JS function that returns an action MUST HAVE A TYPE
const loginAction = () => {
	return { type: "LOGIN" };
};
