const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

//note:- it we push dc_heros into marval_heros by using push() method then it will create an array inside an array (2d array).

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// to merge two array we use
// const new_heros = marvel_heros.concat(dc_heros); // concat() function does not change the original array it create new array that's why we need to store it in a new variable.
//console.log(new_heros);

//alternate of concat() is spread operator [...array1,...array2].

const all_new_heros = [...marvel_heros, ...dc_heros]; // it spread all the elements of arrays into a new array.
console.log(all_new_heros);

// if we have array inside another array an we want it to be single array.

const another_array = [1, 2, 3, [4, 5, 6], [8, 9, 8, [1, 2]]];
const new_usable_array = another_array.flat(Infinity);

console.log(new_usable_array);

//to convert string,object etc into array.

console.log(Array.isArray("Hello")); // to check if it is a  array or not.

console.log(Array.from("Hello")); // convert the string "Hello" into an array.

console.log(Array.from({ name: "Hello" })); // it will give an empty array.

// to convert multiple variable into array.

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;

console.log(Array.of(score1, score2, score3, score4, score5));
