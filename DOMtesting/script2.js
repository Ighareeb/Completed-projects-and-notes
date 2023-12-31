// function getCats(){
// 	return new Promise((resolve, reject)=>{
// 	const random = Math.random() * 1000;
// 	setTimeout(()=>{
// 		resolve(['cat1', 'cat2', 'cat3']);
// 	}, random);
// });
// }

function getDogs(){
	return new Promise((resolve, reject)=>{
	const random = Math.random() * 1000;
	setTimeout(()=>{
		resolve(['dog1', 'dog2', 'dog3']);
	}, random);
});
}

function getBirds(){
	return new Promise((resolve, reject)=>{
	const random = Math.random() * 1000;
	setTimeout(()=>{
		resolve(['bird1', 'bird2', 'bird3']);
	}, 1000);
});
}

function superSecretOrder(items){
	return new Promise ((resolve, reject)=>{
	const random = Math.random() * 1000;
	setTimeout(()=>{
		resolve([...items].sort());
	}, random);
});
}

// (async function(){
// 	const [cats, dogs, birds] = await Promise.all([getCats(), getDogs(), getBirds()]);
// 	const allAnimals = [...cats, ...dogs, ...birds];
// 	const sortedNames = await superSecretOrder(allAnimals);
// 	console.log(sortedNames);
// })
// ();

async function getCats(){
	const dogs = await getDogs();
	
	return ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', ...dogs];
}
console.log(getCats());
getCats().then((cats)=>{
	console.log(cats);
})