// there are two ways to create a object by object literals and by object constructor(singleton object).

// object constructor (create singleton object).

//Object.create

// object literals

const mySym = Symbol("mysym1");
// console.log(typeof mySym);
const jsUser = {
  name: "John",
  age: 18,
  location: "Bengaluru",
  email: "john123@gmail.com",
  isLoggedIn: false,
  "lastLogin Days": ["Monday", "Saturday"],
  [mySym]: "mysym2", //correct way of using sumbol in a object.
};

// note if the key has a space between two words then we have to use [] notation to access the elements of the object.
// console.log(jsUser["lastLogin Days"]);
// console.log(jsUser.name);
// console.log(jsUser["name"]); // if we use [] to access the key then we need to use "" as under the hood the key are stored as string in js.
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// to change the value of the object.

// jsUser.email = "John8989@gmail.com";

// console.log(jsUser.email);

// // is we dont want any one to change the value of the object we can freeze the value of the object.

// Object.freeze(jsUser);

// jsUser.email = "John05555@gmail.com";

// console.log(jsUser.email);

// console.log(jsUser);

// to add a function in the object

console.log(jsUser);
jsUser.greeting = function () {
  console.log("hello javascript");
};

console.log(jsUser.greeting());

// to access the key of the object inside the function.
jsUser.greeting2 = function () {
  console.log(`hello ${this.name}`); // to refer the same object we can use this operator.
};

console.log(jsUser.greeting2());
