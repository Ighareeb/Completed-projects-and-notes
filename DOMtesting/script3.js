// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=> {
// 	console.log(res);
// 	return res.json()})
// .then((data)=> {console.log(data)});

// let getData = async()=>{
// 	let res = await fetch('https://jsonplaceholder.typicode.com/users');
// 	let data = await res.json();
// 	console.log(data);
// }
// async function getData(){
// 	try{
// 	let res = await fetch('https://jsonplaceholder.typicode.com/users');
// 	console.log(res);
// 	console.log(res.status);
// 	let data = await res.json();
// 	console.log(data);
// 	} catch (err){console.log(err)};

// };
// getData();

// const myPromise = new Promise((resolve, reject)=>{
// 	const random = Math.random();
// 	if (random > 1){
// 		resolve('success');
// 	} else {
// 		reject('fail');
// 	}
// });
// myPromise.then((res)=>{
// 	console.log(res)
// })
// .catch((err)=> {
// 	console.log(err)
// });

async function loadPokemon(){
	const res = await fetch('https://pokeapi.co/api/v2/pokemon/3');
	const data = await res.json();
	console.log(data.name);
}
loadPokemon();
