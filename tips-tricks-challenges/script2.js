// 1. Reverse a string

// function reverseString(str){
// 	return str.split('').reverse().join('');
// }

// function reverseString(str){
// 	let reversedString = '';
// 	for (let i=str.length-1; i>=0; i--){
// 		reversedString += str[i];
// 	} return reversedString;
// }

// function reverseString(str){
// 	let reversedString = '';
// 	for (let i=0; i<=str.length -1; i++){
// 		reversedString = str[i] + reversedString ;
// 	} return reversedString;
// }

// function reverseString(str){
// 	let reversedString = '';
// 	for(let letter of str){
// 		console.log(letter);
// 		reversedString = letter + reversedString;
// 	} return reversedString;
// }

// function reverseString(str){
// 	let reversedString = '';
// 	letters = str.split('');
// 	letters.forEach((letter)=>{
// 		console.log(letter);
// 		reversedString = letter + reversedString;
// 	});
// 	return reversedString;
// }
// let str = 'hello'
// str.split('').reduce((reverseString, letter)=>{
// 	console.log(letter + reverseString);
// 	return letter + reverseString;
// }, '');

// const output = reverseString('hello');
// console.log(output);

// 2. Validate a Palidrome
// const str = 'boom';

// function isPalindrome(str){
// 	let reversedString = str.split('').reverse().join('');
// 	console.log(reversedString);
// 	if (reversedString === str){
// 		console.log(`${str} is a Palidrome`)
// 	} else {
// 		console.log(`${str} is not a Palindrome`)
// 	}
// }

// isPalindrome(str);


// 3. Reverse an Integer
// const number = 125;

// function reverseInt(num){
// 	let reversedInt = parseInt(num.toString().split('').reverse().join(''));
// 	console.log(reversedInt);
// 	// if negative number then parseInt(reversedInt) * Math.sign(num)
// }
// reverseInt(number);

// 4. Capitalize first letter of each word in a sentence
// let sentence = 'how now brown cow';

// function capitalize(str){
// 	const strArr = str.toLowerCase().split(' ');
// 	for (let i = 0; i < strArr.length; i++){
// 		strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].substring(1);
// 	}
// 	return strArr.join(' ');
// }
// function capitalize(str){
// 	const strArr = str.toLowerCase().split(' ');
// 	let capitalArr = strArr.map((word)=>{
// 		word = word[0].toUpperCase() + word.substring(1);
// 		return word;
// 	});
// 	return capitalArr.join(' ');
	
// 	return str
// 	.toLowerCase()
// 	.split(' ')
// 	.map((word)=>{
// 		return word[0].toUpperCase() + word.substring(1);
// 	})
// 	.join(' ');
// }
// console.log(capitalize(sentence));

// 5. find character repeated most times in a string
// const sentence = 'lorem ipsum dolor sit amet consectetur adipis cinge lit';

// function maxRepeatedChar(str){
// 	let charMap ={};
// 	let maxNum = 0;
// 	let maxChar = '';
// 	let letters = str.toLowerCase().split('').forEach((char)=>{
// 		if (charMap[char]){
// 			charMap[char]++;
// 		} else {
// 			charMap[char] = 1;
// 		}
// 	});
// 	console.log(charMap);
// 	for (let char in charMap){
// 		if(/[a-z]/.test(char))
// 		{if(charMap[char] > maxNum){
// 			maxNum = charMap[char];
// 			maxChar = char;
// 		}} 

// 	}
// 	return maxChar;
// 	}
// 	console.log(maxRepeatedChar(sentence));

// 6.Fizzbuzz - print all number 1-100 - for multiples of 3 print fizz for multiples of 5 print buzz
// for multiples of 3 & 5 print fizzbuzz
// function fizzBuzz(){
// let numArr = [];
// for (let i=1; i<=100; i++){
// 	if (i % 3 === 0 && i % 5 === 0){
// 		numArr.push('FizzBuzz');
// 	} else if (i % 5 === 0){
// 		numArr.push('Buzz');
// 	} else if (i % 3 === 0){
// 		numArr.push('Fizz');
// 	} else{
// 	numArr.push(i);}
// }return numArr;
// }

// console.log(fizzBuzz());



