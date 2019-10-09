//1. Declare a variable which will be encapsulated from global scope.

if (true) {
  let encapsulatedFromGlobalScope = 10;
  console.log(encapsulatedFromGlobalScope);
}

//2. Declare a variable which will appear in global object.

var myVariable = 20;
{
  console.log(myVariable);
}

//3. Declare two variables which will be same-names but contain different values.

// example1

var sameNameVariable = 40;

function test () {
  var sameNameVariable = 50;
  console.log(sameNameVariable);
}

test();

// example2

let firstName = 'Jack';

if (true) {
  let firstName = 'Tom';
}

console.log(firstName);

//1. Declare a variable with hosting.

hoistVariable = true;
console.log(hoistVariable);
var hoistVariable;
   