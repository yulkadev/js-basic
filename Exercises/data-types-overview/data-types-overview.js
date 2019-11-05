//1. Declare a variable on each type using two options: plain creation, creation with constructor.

// 1.1 plain creation

const myNumber = 10;
const myString = 'My name is Yuliia';
const myBoolean = true;
const myNull = null;
const myUndefined;
const mySymbol = Symbol();
const myObject = { job:'QA' };

// 1.2 constructors

const valueNumber = new Number('23231');
console.log(valueNumber);

const valueString = new String('Some string');
console.log(valueString);

const valueObject = new Object({ a: 1 });
console.log(valueObject);

const valueBoolean = new Boolean(true);
console.log(valueBoolean);

const valueSymbol = Symbol('mySymbol');
console.log(valueSymbol);

//2. Use operator typeof on each of them.

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof mySymbol);
console.log(typeof myObject);

console.log(typeof valueNumber);
console.log(typeof valueString);
console.log(typeof valueObject);
console.log(typeof valueBoolean);
console.log(typeof valueSymbol);

//3. Demonstrate object's references.

const student = {
  firstName: 'John',
  lastName: 'Smith'
};

const student2 = student;
student2.firstName = 'Tommy';

console.log(student);
console.log(student2);

//3. Demonstrate string's backticks features.

const varForBactick = 1;
console.log(`Demonstrating string in backtick and here is variable ${varForBactick}`);

// Additional

//1. Declare an array containing different data types.

const myArray = [1, 'test', true, null, undefined];

//2. Iterate through it and collect amount of each data type to object.

const collectObject = {};

myArray.forEach(countObjectTypes);

function countObjectTypes(arrayElement) {
  if (collectObject[typeof arrayElement] == undefined) {
    collectObject[typeof arrayElement] = 1;
  } else {
    collectObject[typeof arrayElement] += 1;
  }
}

console.log(collectObject);
