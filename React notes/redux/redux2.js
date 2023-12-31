const defaultState = {
	authenticated: false,
};

const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {authenticated:true};
			break;
		case 'LOGOUT':
			return {authenticated:false};
		default:
			return state;
			break;
	}
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
	return {
		type: "LOGIN",
	};
};

const logoutUser = () => {
	return {
		type: "LOGOUT",
	};
};
