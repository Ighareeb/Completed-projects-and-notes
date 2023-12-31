const state = [];
function mapStateToProps(state) {
	return {
		messages: state,
	};
}


// The mapDispatchToProps() function is used to provide specific action creators
//  to your React components so they can dispatch actions against the Redux store.
// It returns an object that maps dispatch actions to property names, which become component props.
// However, instead of returning a piece of state, each property returns a function
// that calls dispatch with an action creator and any relevant action data.
// You have access to this dispatch because it's passed in to mapDispatchToProps() as a parameter 
// when you define the function
const addMessage = (message) => {
	return {
		type: "ADD",
		message: message,
	};
};

function mapDispatchToProps(dispatch) {
	return {
		submitNewMessage: function (message) {
			dispatch(addMessage(message));
		},
	};
}
// using connect() method to map state/dispatch to the props of one of your React components
const connect = ReactRedux.connect;
connect(mapStateToProps, mapDispatchToProps)(MyComponent)

