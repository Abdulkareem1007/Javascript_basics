const name = "John";

const reopCount = 50;

console.log(`My name is ${name} and my repo count is ${reopCount}.`);

// there is a another way is declearing string by using objects.

const gameName = new String("nexGenGammer");

console.log(gameName); //it will give string in the from of object(key value pair) and we can use various methods on the string.

console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName.__proto__); // to see all the values.it will works in browser.

// some methods of strings.

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(1));

console.log(gameName.indexOf("a"));

console.log(gameName.substring(2, 4)); // starting index is included and ending index is excluded.

console.log(gameName.slice(0, 4)); // it works same as substring but in slice we can use negative value then it will starts from reverse.

console.log(gameName.slice(-3)); // first it will count from the end.

// to remove white space and line erminators(\n) from start and the end of the string.

const myName = "  John  ";

console.log(myName);

console.log(myName.trim());

// replace.

const email = "qwerty123hn@gmail.com";

console.log(email);
const newEmail = email.replace("hn", "rlr");
console.log(newEmail);

//to check if the string contains some particular word or not.

console.log(email.includes("gmail.com")); // it will give o/p as true.

//if we want to split a string into array based on any delimitor.

const myStr = "John-hc-com";

console.log(myStr.split("-"));
