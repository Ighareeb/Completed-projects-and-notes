// 1. find the longest word in a sentence, if more than one put into an array

// const longStr = 'Hello, my name is Isam and Mgdy';
// function findWord(str) {
// 	const wordArr = longStr.toLowerCase().match(/[a-z0-9]+/g);
// 	// console.log(wordArr);
// 	const sorted = wordArr.sort((a, b) => {
// 		return b.length - a.length;
// 	});
// 	// console.log(sorted);
// 	const longestWordArr = sorted.filter((word) => {
// 		return word.length === sorted[0].length;
// 	});
// 	if (longestWordArr.length === 1) {
// 		return longestWordArr[0];
// 	} else {
// 		return longestWordArr;
// 	}
// 	// console.log(longestWordArr);
// }
// console.log(findWord(longStr));

// 2. Array chuncking - split array arrays to a specific length

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// SOLUTION 1
// function chunkArray(arr, len) {
// 	let chunkedArray = [];
// 	let i = 0;
// 	while (i < arr.length) {
// 		chunkedArray.push(arr.slice(i, i + len));
// 		i += len;
// 	}
// 	return chunkedArray;
// }

// SOLUTION 2
// function chunkArray(arr, len){
// const chunkedArray = [];
// arr.forEach((val)=>{
// 	const last = chunkedArray[chunkedArray.length - 1];
	
// 	if (!last || last.length === len){
// 		chunkedArray.push([val]);
// 	} else {
// 		last.push(val);
// 	}
// 	console.log(chunkedArray);
// });
// }
// console.log(chunkArray(myArr, 3));

// 3. Flatten array
// const myArr = [[1, 2, 3], [4, 5, 6], [7, 8,[1,2,3,4,5], 9]];
// function flattenArray(arr){
	// solution1
	// let flatArray = [];
	// arr.forEach((element)=>{
	// 	element.length > 1 ? flatArray.push(element.flat()) : flatArray.push(element);
	// })
	// flatArray = flatArray.flat();
	// return flatArray;

	// solution2
	// let flatArray = arr.reduce((acc, item)=>{
	// 	if (Array.isArray(item)){
	// 		return acc.concat(item.flat());
	// 	} else{
	// 		return acc.push(item);
	// 	}
	// }, []);
	// return flatArray;

	// possible solutions with caveats
	// return [].concat.apply([], arr);
// 	return [].concat(...arr);
// }
// console.log(flattenArray(myArr));

// 4. Anagram - 2 strings with the same characters

// const w1 = 'Dormitory';
// const w2 = 'dirty room##';

// function checkAnagram(a,b){
	// return a.split('')
	// .sort()
	// .join('') === b.split('').sort().join('');
	
	// solution 2
// 	let word1 = a.toLowerCase().replace(/[^\w]/g, '');
// 	let word2 = b.toLowerCase().replace(/[^\w]/g, '');
// 	return word1.split('')
// 	.sort()
// 	.join('') === word2.split('').sort().join('');
// 	console.log(word1, word2);
// }

// console.log(checkAnagram(w1, w2));

// 5. Letter changes - change every letter of the string to the one that follows it and capitalize vowels
// const myStr = 'hello there';
// function letterChange(str){
// 	let newStr = str.replace(/[a-z]/gi, (char)=>{
// 		if(char ==='z'|| char === 'Z'){
// 			return 'a';
// 		} else {
// 			return String.fromCharCode(char.charCodeAt() + 1);
// 		} 
// 	});
// 	let vowelCapitalStr = newStr.replace(/[a|e|i|o|u]/gi, (char)=>{
// 		return char.toUpperCase();
// 	});
// 	return vowelCapitalStr;
// 	}
// console.log(letterChange(myStr));