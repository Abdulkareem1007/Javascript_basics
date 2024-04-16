const accountId = 123456;
let accountEmail = "json1234@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur"; // In javascript variables can be defined without let,cont and var,but we should not perfer this.
let accountState; // Default value of the accountState is Undefined if we don't declear any value to it.

//accountId = 2;  //const can not be updated.
console.log(accountId);

accountEmail = "json56789@gmail.com"; // let allows to update the variables.
console.log(accountEmail);

//let accountEmail = "json090@gmail.com"; //let can not be re-declear.

accountPassword = "678900"; // var allows to update the variable.
console.log(accountId);
var accountPassword = 1111000; //var can be re-declear.
console.log(accountPassword);

//To console lof all the variable at once in table format.

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
