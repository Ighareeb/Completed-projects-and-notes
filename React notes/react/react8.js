// Using .map example 1
// const textAreaStyles = {
// 	width:235,
// 	margin:5
//   };
  
//   class MyToDoList extends React.Component{
// 	constructor(props){
// 	  super(props);
// 	  this.state = {
// 		userInput : '',
// 		toDoList : []
// 	  };
// 	  this.handleSubmit = this.handleSubmit.bind(this);
// 	  this.handleChange = this.handleChange.bind(this);
// 	}
  
//   handleSubmit(){
// 	const itemsArray = this.state.userInput.split(',');
// 	this.setState({
// 	  toDoList: itemsArray
// 	});
//   }
  
//   handleChange(e){
// 	this.setState({
// 	  userInput : e.target.value
// 	});
//   }
//   render(){
// 	const items = toDoList.map((item)=>{
// 	  return <li>{item}</li>
// 	});
// 	return(
// 	  <div>
// 	  <textarea onChange={this.handleChange} value={this.state.userInput} style={textAreaStyles} placeholder='Separate items with Commas' />
// 	  <br />
// 	  <button onClick={this.handleSubmit}>Create List</button>
// 	  <h1>My "To Do" List</h1>
// 	  <ul>{items}</ul>
// 	  </div>
// 	);
//   }
//   };

// using .map example2
const frontEndFrameworks = [
	'React',
	'Angular',
	'Ember',
	'Knockout',
	'Backbone',
	'Vue'
  ];
  
  function Frameworks(){
	
	//(((using index as key))) const renderFrameworks = 
	// frontEndFrameworks
	// .map((item, index)=>{
	//   return <li key={index}>{item}</li>
	// });
	// (((using item as key))) 
	const renderFrameworks = 
	frontEndFrameworks
	.map((item)=>{
	  return <li key={item}>{item}</li>
	});
  
  
	return(
	  <div>
		<h1>Popular Front End JavaScript Framewords</h1>
		<ul>
		  {renderFrameworks}
		</ul>
	  </div>
	);
  };