//function is used to group some line of code together so that we can use it when ever and as many time as we want.

// function greetings() {
//   console.log("Hello Javascript");
//   console.log("Hello Javascript");
//   console.log("Hello Javascript");
//   console.log("Hello Javascript");
//   console.log("Hello Javascript");
//   console.log("Hello Javascript");
//   console.log("Hello Javascript");
// }

// greetings; // if we dont give () while calling tunction then it is function reference.
// greetings(); // this is function execution.

//Add two number and printing the value.
// function addNum(num1, num2) {
//   let result = num1 + num2;
//   console.log(result);
// }

// addNum(56, 34);

// // adding two number and returning the value to another variable and then printing the value.

// function addTwoNum(num1, num2) {
//   return num1 + num2;
// }

// const result = addTwoNum(56, 34);
// console.log("Result: ", result);

// //if we dont give any value to the function argument it will give undefined as the result.

// function loginMessage(userName) {
//   if (userName === undefined) {
//     console.log("Please enter a user name");
//     return;
//   }
//   return `${userName} just logged in`;
// }

// const message = loginMessage();
// console.log(message);

// function loginMessage(userName) {
//   return `${userName} just logged in`;
// }

// const message = loginMessage("John");
// console.log(message);

// default value in the function paramerte: it it assign the value id the user doesnot give any value in the function arguments.

function loggedInUserMessage(userName2 = "Sam") {
  return `${userName2} user just Logged in. `;
}

console.log(loggedInUserMessage());
