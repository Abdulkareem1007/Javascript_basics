//Dates

let myDate = new Date(); // t will create a date object.

// console.log(myDate); // we need to convert date because it is difficult to understand and compare date in  this format.

//convert to string.

// console.log(myDate.toString()); // Sun Apr 21 2024 15:45:59 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); // Sun Apr 21 2024

// console.log(myDate.toISOString()); //2024-04-21T10:15:59.134Z

// console.log(myDate.toJSON()); //2024-04-21T10:15:59.134Z

console.log(myDate.toLocaleString()); //21/4/2024, 3:45:59 pm

//we can customize  .toLocalString in many ways refer MND page for more.

//to give full name of weekday: o/p Monday,Tuesday.
console.log(
  myDate.toLocaleString("default", {
    weekday: "long",
  })
);
// console.log(myDate.toLocaleDateString()); // 21/4/2024

// console.log(myDate.toLocaleTimeString()); //3:45:59 pm

// console.log(typeof myDate); // object

//to declear specific date.
// let newDate = new Date(2024, 0, 21); // note month always starts from 0 in js
// console.log(newDate.toString());

//to declear specific date and time.

// let myNewDate = new Date(2024, 0, 4, 5, 3, 3);

// console.log(myNewDate.getTime()); // as myNewDate is a object we can use getTime method to get the value from object .it will give time in milli seconds
// console.log(myNewDate.toLocaleString());

// //other format of declearing date.

// let myDate = new Date("01-04-2024");
// console.log(myDate.toLocaleString());

// //time stamp.

// let myTimestamp = Date.now();
// console.log(myTimestamp); // it will give output in milli-second.

// to convet time in seconds.

// console.log(Math.floor(Date.now() / 1000));

// //to acces property of date object.
// let newDate2 = new Date();
// console.log(newDate2.getMonth()); // to get the month number fron the date object we can also get year,day,hour,minutes etc.

// // example of complex date complex date.

// console.log(
//   `Today is ${newDate2.getDay()}, the month is ${newDate2.getMonth()} and the yaer is ${newDate2.getFullYear()}`
// );
