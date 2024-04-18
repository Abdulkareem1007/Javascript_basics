// Basic comparision operator

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 1);

//tricky comparision.

// console.log("2" > 1); //js automaticilly converts "2" into number.

// console.log("02" >= 1); // we must always compares two similar datatype.

//note: the equaility "==" operator and the comparision(>,<,>=,<=) works differently.
//the comparision operator converts the null into number and then it will compares.
// where equility operator only check the values without converting it.

console.log(null > 0); // we will get false because null is converted to 0.
console.log(null >= 0); //we will get true because null is converted to 0 and 0 is >= 0.
console.log(null == 0); //we will get false because null is not converted to 0 in equaility operation.

// strict check (===)

//strict check (===) check both the datatype  and the value.

console.log("2" === 2); // we wll get false because datatype is different.
