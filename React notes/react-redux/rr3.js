const addMessage = (message) => {
	return {
		type: "ADD",
		message: message,
	};
};

const mapStateToProps = (state) => {
	return {
		messages: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		submitNewMessage: (message) => {
			dispatch(addMessage(message));
		},
	};
};

class Presentational extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <h3>This is a Presentational Component</h3>;
	}
}

const connect = ReactRedux.connect;
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
console.log(ConnectedComponent)
// the component you connected to Redux was named Presentational -this term generally refers to React components that are not directly connected to Redux.
// They are simply responsible for the presentation of UI and do this as a function of the props they receive.
// By contrast, container components are connected to Redux.
// These are typically responsible for dispatching actions to the store and often pass store state to child components as props.