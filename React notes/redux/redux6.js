// async data fetching using Redux.applyMiddleware(ReduxThunk.default)

//action types defined
const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

//action creators
const requestingData = () => {
	return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
	return { type: RECEIVED_DATA, users: data.users };
};

//simulated API call thunk function
// to create an asynchronous action, you return a function in the action creator that takes dispatch 
// as an argument. Within this function, you can dispatch actions and perform asynchronous requests.
const handleAsync = () => {
	return function (dispatch) {
		// Dispatch request action here
		dispatch(requestingData());
		setTimeout(function () {
			let data = {
				users: ["Jeff", "William", "Alice"],
			};
			// Dispatch received data action here
			dispatch(receivedData(data));
		}, 2500);
	};
};

const defaultState = {
	fetching: false,
	users: [],
};

const asyncDataReducer = (state = defaultState, action) => {
	switch (action.type) {
		case REQUESTING_DATA:
			return {
				fetching: true,
				users: [],
			};
		case RECEIVED_DATA:
			return {
				fetching: false,
				users: action.users,
			};
		default:
			return state;
	}
};

const store = Redux.createStore(
	asyncDataReducer,
	Redux.applyMiddleware(ReduxThunk.default)
);
