const score = 400;

const balance = new Number(100); // to specifically define object to be in number data type.

console.log(balance);

// some methods of number.

console.log(balance.toString().length); // First it will convert balance into a string and the it will find its length.

console.log(balance.toFixed(2)); // it will roundoff up to 2 decimal value.

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(2)); //it will give the presicize value upto the value defined in the in .toPrecision().

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //o/p is 10,00,000.

//++++++++++++++++++   Maths   ++++++++++++++++++++//

// console.log(Math.abs(-4)); // give absolute value i.e postive value
// console.log(Math.round(3.678));
// console.log(Math.ceil(3.3)); // number exceeds with 0.1 also then it will round off to the maximum value.
// console.log(Math.floor(3.9)); // it will five lowest value even if the number is exceeded ny 0.9
// console.log(Math.min(4, 6, 7, 2, 8, 10));
// console.log(Math.max(4, 6, 7, 2, 8, 10));

// generate random value.
// console.log(Math.random()); // it will always generate value between 0 and 1.

// // to generate of random value between 1 to 10 .

// console.log(Math.floor(Math.random() * 10 + 1));

// General formula to generate random number in a given range.
const min = 10; //staring number
const max = 20; // ending number

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
