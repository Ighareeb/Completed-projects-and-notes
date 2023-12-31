class DisplayMessages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			messages: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
	}
	handleChange(e) {
		this.setState({
			input: e.target.value,
		});
	}
	submitMessage() {
		this.setState({
			messages: this.state.messages.concat(this.state.input),
			input: "",
		});
	}

	render() {
		const displayList = this.state.messages.map((message) => {
			return <li>{message}</li>;
		});
		return (
			<div>
				<h2>Type in a new Message</h2>
				<input onChange={this.handleChange} value={this.state.input} />
				<button onClick={this.submitMessage}>Submit</button>
				<ul>{displayList}</ul>
			</div>
		);
	}
}

//REDUX Define ADD, addMessage(), messageReducer(), and store here:

const ADD = "ADD";

const addMessage = (message) => {
	return {
		type: ADD,
		message
	};
};

const messageReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
		let newMessage = [...state, action.message];
		return newMessage;
		default:
			return state;
	}
};

const mapStateToProps = (state)=>{
	return{
		message: state
	}
};

const mapDispatchToProps =(dispatch)=>{
	return{
		submitNewMessage: (newMessage) =>{
			dispatch(addMessage(newMessage));
		} 	
	}
};



