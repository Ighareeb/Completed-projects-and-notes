// 1.
// // const me = {
// // 	talk: function(){
// // 		return 'talking';
// // 	}
// // }
// // console.log(me.talk());

// class Person{
// 	talk = function(){
// 		return 'Talking';
// 	}
// }
// const me = new Person();
// const you = new Person();
// Person.prototype.walk = function(){
// 	return 'Walking';
// }
// class Teacher extends Person{
// 	teach = function(){
// 		return 'Teaching';
// 	}
// }
// const teacher = new Teacher();
// teacher.age = 12;
// //Person.prototype === me.__proto__

// function Animal(name){
// 	this.name = name;
// 	this.age = 12
// 	this.myname = function(){
// 		return name;
// 	}
// }
// const dog = new Animal('Dog');

// 2.
// const dude = {}; //proto base Object i.e. instance of base Object constructor
// let myBrothers = ['taher', 'ayman']; //proto Array i.e. instance of Array constructor
// let name = 'Islam';
// name.__proto__

// function objectFactory(name){
// 	return{
// 		name: name,
// 		talk: function(){
// 			return 'talking';
// 		}
// 	};
// }

// let obj = objectFactory('obj');
// console.log(obj.talk());

// function Person(name){
// 	this.name = name;
// }
// let me = new Person('Islam');

// function talk(){
// 	return this;
// }
// function walk(){
// 	return `${this.name} is walking`;
// }
// const me = {
// 	name: 'Islam',
// 	talk: talk
// };
// // const meTalk = walk.bind(me);


//factory
let personFactory = function(name, age){
	return{
		name:name,
		age:age
	};
}
let them = personFactory('them', 12);

//constructor function
function Person(name){
	this.name = name;
}
let me = new Person('islam');

//class constructor function
class Human{
	constructor(name){
		this.name = name;
	}
	
}
let you = new Human('taher');

