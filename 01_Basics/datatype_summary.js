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

//Non-premitive(Reference type): It is call by Reference. which mean that the memory refference of the value is given when we retrive the value from the memory.

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

//+++++++++++ Memory +++++++++++++++++++++++//
// ++++++++++++++++++++++++++++++++++++++++++++++++//

// There are two type of memory  Stack and Heap.
// To store all the primitive datatype Stack memory is used.
// To Store all the non-primitive datatype Heap memory is used.

// values stored in stack memory are the call by value.It give a copy of the value, whatever changes we make it occur on the copied value not the original value.
// value stored in Heap memory are the call by reference. It give reference to the actual value if we make any changes on the value the change will occur in the original value.

/*

Sack memory:                        Heap Memory:
+++++++++++++++
+   userTwo   + + + +          +++++++++++++++++++++++++++++++++++++++++++
+++++++++++++++      +         +                                         +
+   userOne   + +     +        +                                         +
+++++++++++++++   +    +       +                                         +
+   messgage  +     +   +      +{ email:"user@gmail.com,upi:"user@ybl"}  +
+++++++++++++++       +  +     +                                         +
+  newMessage +         + +    +                                         +
+++++++++++++++           + +  +                                         +
+   message   +             +  +                                         +
+++++++++++++++                +++++++++++++++++++++++++++++++++++++++++++

*/

//Example of stack memory.
// let message = "Hello javascript";

// let newMessage = message; // assining value of message into newMessage variable.
// // console.log(newMessage);

// //making changes in newMessage doesnot change the actual value of message.

// newMessage = "hello world";

// console.log(message);
// console.log(newMessage);

//Example of Heap memory.

const userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

console.log("user1: " + userOne.email);
const userTwo = userOne;

//if we make any changes into userTwo same change will also occur to userOne
//because object is a reference type and if we assing same object to aother variable only the reference of the original object is passed it doesnot make a new copy of the original object.

userTwo.email = "abc@gmail.com";

console.log("user1: " + userOne.email);
console.log("user2: " + userTwo.email);
