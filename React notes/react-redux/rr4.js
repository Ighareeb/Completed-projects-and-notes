// Redux:
const ADD = "ADD";

const addMessage = (message) => {
	return {
		type: ADD,
		message: message,
	};
};

const messageReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [...state, action.message];
		default:
			return state;
	}
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;
// Now that Redux is connected, you need to extract the
// state management out of the Presentational component and into Redux.
// Currently, you have Redux connected, but you are handling the state locally within the Presentational component.

// Change code below this line

// 1. remove the messages property in the local state. These messages will be managed by Redux.

// 2. modify the submitMessage() method so that it dispatches
// submitNewMessage() from this.props, and pass in the current message input from local state as an argument.
// Because you removed messages from local state, remove the messages property from the call to this.setState() here as well.

// 3. modify the render() method so that it maps over the messages received from props rather than state.
class Presentational extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			//1. , messages: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
	}
	handleChange(event) {
		this.setState({
			input: event.target.value,
		});
	}
	submitMessage() {
		this.props.submitNewMessage(this.state.input);
		this.setState({ input: "" });

		//2. this.setState((state) => ({
		// input: "",
		//  messages: state.messages.concat(state.input),
		// }));
	}
	render() {
		return (
			<div>
				<h2>Type in a new Message:</h2>
				<input value={this.state.input} onChange={this.handleChange} />
				<br />
				<button onClick={this.submitMessage}>Submit</button>
				<ul>
					{this.props.messages.map((message, idx)=>{
						return <li key={idx}>{message}</li>;
					})}
					{/*3 {this.state.messages.map((message, idx) => {
						return <li key={idx}>{message}</li>;
					})} */}
				</ul>
			</div>
		);
	}
}
// Change code above this line

const mapStateToProps = (state) => {
	return { messages: state };
};

const mapDispatchToProps = (dispatch) => {
	return {
		submitNewMessage: (message) => {
			dispatch(addMessage(message));
		},
	};
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Container />
			</Provider>
		);
	}
}
