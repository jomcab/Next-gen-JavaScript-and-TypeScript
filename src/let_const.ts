// const and let
const userName = 'Jomer'; // value cannot be changed
// userName = 'Joms' // will produce an error: Cannot assign to 'userName' because it is a constant.

let age = 29; // value can be changed
age = 30;

// let vs var
// let allows you to declare variables that are limited to the scope of a block statement, 
// or expression on which it is used, unlike the var keyword, which declares a variable globally, 
// or locally to an entire function regardless of block scope.

// var - scope is not limited to block
if (true) {
  var num = 1;
}

console.log(num);

// let - scope is limited to block. Hence, developers are forced to write cleaner code
if (true) {
  let num = 1;
}

console.log(num);