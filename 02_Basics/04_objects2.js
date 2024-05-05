// creating objects using constructor method.(singleton)

const student = new Object();

student.id = "001"; //assining key and value into the object.
student.name = "John"; //assining key and value into the object.
student.isLoggedIn = false; //assining key and value into the object.

// console.log(student);

//methods of object
console.log(Object.keys(student)); //to get the key of object in the form of array.
console.log(Object.values(student)); //to get the values of object in the form of array.
console.log(Object.entries(student)); // create array inside an array and  convert key and value in a array

console.log(student.hasOwnProperty("name")); //it check if the given property exist or not.
// // declearing objects inside object.
// const employee = {
//   id: "001",
//   fullName: {
//     firstName: "John",
//     lastName: "singleton",
//   },
//   isLoggedIn: false,
//   email: "john123@gmail.com",
// };

// console.log(employee.fullName.firstName); // accessing elements of object that is inside the another object.

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {
//   obj1,
//   obj2,
// }; //it will create object inside object

// // to combine two or more object together.
// const obj4 = Object.assign({}, obj1, obj2); // {} is the target object(empty) and obj1 , obj2 is source.All elements of the object obj1 and obj2 is copied to the empty object {},
// console.log(obj4);

// combining object using spread operator.

// const obj5 = { ...obj1, ...obj2 };
// console.log(obj5);
