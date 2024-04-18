let score1 = "33";

console.log(typeof score1); // type is string.

let valueInNumber1 = Number(score1); // convert string into number.

console.log(typeof valueInNumber1); //type is number.

console.log(valueInNumber1); // value of score is 33.

let score2 = "33abc"; // vslue is mixed.

console.log(typeof score2); //type is string

let valueInNumber2 = Number(score2); //js convert the mixed value in to number but value will be NaN.

console.log(typeof valueInNumber2); // type is number.

console.log(valueInNumber2); // value od valueInNumber2 is NaN.

let score3 = null; // the value is null

console.log(typeof score3); //type of score3 is object.

let valueInNumber3 = Number(score3); // convert the value into number

console.log(typeof valueInNumber3); // type valueInNumber3 is number.

console.log(valueInNumber3); // value of valueInNmber3 is 0.

let score4 = undefined;

console.log(typeof score4); //type is undefined.

let valueInNumber4 = Number(score4); // convert the value into number.

console.log(typeof valueInNumber4); // type is number.

console.log(valueInNumber4); // the value is NaN.

let score5 = true;

console.log(typeof score5); // type is boolean.

let valueInNumber5 = Number(score5); // convert th value into number.

console.log(typeof valueInNumber5); // type is number.

console.log(valueInNumber5); //value is 1.

let score6 = "abcd";

console.log(typeof score6); // string
let valueInNumber6 = Number(score6); // convert the value into number.

console.log(typeof valueInNumber6); //number.

console.log(valueInNumber6); // value is NaN.

// Note:-
// "33" => 33.
// "33abc" => NaN.
// ture => 1 ; false => 0.

//bonous

let isLoggedIn = 1; //value is 1 ,number

console.log(typeof isLoggedIn);
let booleanIsLoggedIn = Boolean(isLoggedIn); // converted value into boolean.

console.log(typeof booleanIsLoggedIn); // type is boolean.

console.log(booleanIsLoggedIn); // value is true. Note:- string any number accept 0 gives ture value. null ,""(empty string),and undefined gives false value.

let someNumber = 12345;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// ############### Operations ########### //

let value = 3;

let negValue = -value;

// console.log(negValue);

//concat
let str1 = "Hello ";

let str2 = "world";

let str3 = str1 + str2;

console.log(str3);

//tricky operations.

console.log("1" + 2); // if string is first  then js convert both number into string.
console.log("1" + 2 + 3); //it also convert all the value into string.

console.log(1 + 2 + "3"); //here number is first then js will add first two value and concat the third value.

//Assignmnet operations
let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;
