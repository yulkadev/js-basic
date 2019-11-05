//1. Declare a variable which will be encapsulated from global scope.

if (true) {
  const encapsulatedFromGlobalScope = 10;
  console.log(encapsulatedFromGlobalScope);
}

//2. Declare a variable which will appear in global object.

const myVariable = 20;
{
  console.log(myVariable);
}

//3. Declare two variables which will be same-names but contain different values.

// example1

const sameNameVariable = 40;

function test() {
  const sameNameVariable = 50;
  console.log(sameNameVariable);
}

test();

// example2

const firstName = 'Jack';

if (true) {
  const firstName = 'Tom';
}

console.log(firstName);

//1. Declare a variable with hosting.

hoistVariable = true;
console.log(hoistVariable);
let hoistVariable;
