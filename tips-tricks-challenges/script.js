// 1. Flatten an array
// const data = [[1,2],3,4,[5,[6,7]]];
// function flatten(arr){
// 	let flatArr = [];
// 	arr.forEach((element)=>{
// 		if (Array.isArray(element)){
			
// 			flatArr = flatArr.concat(flatten(element));
// 		} else {
// 			flatArr.push(element);
// 		}
// 	});
// 	return flatArr;
// }
// const newArray = flatten(data);
// console.log(newArray);

// 2. Remove element from an Array
// const myArray = [10, 2, 4, 15, 20];
// const myItemIndex = myArray.indexOf(10);
// myArray.splice(myItemIndex, 1);
// const newArr = myArray.filter((item)=>{
// 	return item !== 4;
// 	});
// console.log(newArr);

// 3. Check if a string contains a substring
// const testString = 'something';
// const subString = 'thing';
// testString.includes(subString)
// console.log(testString.indexOf(subString) !== -1);
// testString.indexOf(subString);

// 4. Slice vs Splice
// const myArray = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
//returns new array with sliced items without modifying original
// const slicedArr = myArray.slice(1, 3);
// console.log(slicedArr);

//modifies original array. returns new array with spliced items; can insert items
// const splicedArr = myArray.splice(1, 2, 'abcd');
// console.log(slicedArr);
// console.log(myArray);

// 5. Left rotation operation on an array (each rotation shift items left by one)
// const myArray = [1, 2, 3, 4, 5];
// const numRotation = 4;

// function leftRotate(arr, rotations){
// 	let arrCopy = [...arr];
// 	for(let i=1; i<=numRotation; i++)
// 	{console.log(arrCopy);
// 	let firstItem = arrCopy.shift();
// 	console.log(firstItem);
// 	arrCopy.push(firstItem);
// 	}
// 	return arrCopy;
// };
// console.log(leftRotate(myArray, numRotation));

// 6. How to create a 2D Array
// const rows = 10;
// const cols = 8;

// const myArray = new Array(rows);
// console.log(myArray);
// for (let i = 0; i<rows; i++){
// 	myArray[i] = new Array(cols);
// }

// const myArray1 = [];
// for (let i=0; i < rows; i++){
// 	myArray1[i] = [];
// 	for (let j = 0; j < cols; j++){
// 		myArray1[i][j] = null;
// 	} 
// }
// console.log(myArray1);

// const myArray2 = Array.from(Array(rows), ()=> new Array(cols));
// console.log(myArray2);







