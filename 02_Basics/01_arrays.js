// // Arrays

// // array is a reference type.which mean if we make some changes in a copy of the array the original array will also change.

// //different ways to declearing arrays.

const myArr = [0, 1, 2, 3, 4];

// const myHeros = ["Spiderman", "Superman"];

// const myArr2 = new Array(1, 2, 3, 4, 5);

// console.log(myArr2[0]);

// // array methods

// myArr2.push(6); //add element at the end of the array
// myArr2.push(7);
// console.log(myArr2);

// myArr2.pop(); // remove element from end of the array
// console.log(myArr2);

// myArr2.unshift(9); // it will add element at the starting.
// console.log(myArr2);

// myArr2.shift(); // remove element from the starting of the array.
// console.log(myArr2);

// console.log(myArr2.includes(4)); // check if 4 is present in the array or not.

// console.log(myArr2.indexOf(5)); // give the index of the value.

// const newArr = myArr.join(); // add all elements of an array into a string
// console.log(newArr);
// console.log(typeof newArr);

// Slice and Splice.

console.log("A ", myArr);

const myna1 = myArr.slice(1, 3); //give a section of the array doesnot include the last index.
console.log(myna1);

console.log("B ", myArr); // slice doesnot change the original array it make a deep copy of the array.

//Splice

const myna2 = myArr.splice(1, 3);
console.log(myna2); // it will also give section of an array and it will include the last index of the range.

console.log("C ", myArr); // it makes shallow copy of the array it will change the original array.
