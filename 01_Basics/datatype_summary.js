// Javascript is a dynimically typed language which means we do not need to define the datatype ogf the variables.
// Datatypes is mainly divided into to types primitive type and non-primitive(reference type) type.
// It is divded into two type based on how the have store and retrived from memory.
// call by value and call by reference are the things that decide if the dataype is primitive or non-primitive(reference type).

//Primitive: It is call my value. which means that actual value is copied and given when we retrive the value from memory.

// these are 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail;

const id = Symbol("123"); //is is use to uniquely define a variable
const anotherId = Symbol("123");

console.log(id);
console.log(anotherId);

console.log(id === anotherId); // if we pass then same value to both the variable but the variables still will not be equal to each other.

const BigInt = 123456745674678n;

//Non-premitive(Reference type): It is call by Reference. which mean that the memmory refference of the value is given when we retrive the value from the memory.

// these are : Array, Objects, Functions.

// array
const fruits = ["Apple", "Banana", "Orange"];

//object
const myObj = {
  name: "Raj",
  age: 18,
  city: "Delhi",
};

const myfunc = function () {
  console.log("Hello Javascript");
};
