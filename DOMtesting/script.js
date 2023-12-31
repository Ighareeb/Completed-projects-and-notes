// const letterCounter = () => {
// 	const sentence = 'how many letter are there';
// 	// let total = 0;
// 	// letters = ''
// 	// for (let i = 0; i< sentence.length; i++){
// 	// 	console.log(total ++);
// 	// }
// 	for (const letter of sentence){
// 		console.log(letter);
// 	}
// };
// letterCounter();

// const sumArray = (array) => {
// 	let result = 1;
// 	for (let number of array){
// 		if (number > result){
// 			result = number;
// 		}
// 	}
	
// 	return result;
// }

// let numArray = [1,2,3,7,4,5,6];
// console.log(sumArray(numArray));

const frequency = (phrase) => {
	let obj = {};
	let wordsArr = phrase.split(' ');
	// for (let letter of phrase){
	for (let word of wordsArr){
		if (word in obj){
			obj[word]++;
		} else {
			obj[word] = 1;
		}
	}
	// 	if (letter in obj){
	// 		obj[letter] ++;
	// 	} else {
	// 		obj[letter] = 1;
	// 	}
	// }
	// letter in obj ? obj[letter]++ : obj[letter]=1;}
	return obj;
}

console.log(frequency('and and then then who when where why why'));
// let letter = 'abcd';
// let obj = {};
// obj[letter] = 1;
// console.log(obj);