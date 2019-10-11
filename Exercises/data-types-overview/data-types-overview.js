//1. Declare a variable on each type using two options: plain creation, creation with constructor.

// 1.1 plain creation

let myNumber = 10;
let myString = 'My name is Yuliia';
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let mySymbol = Symbol();
let myObject = {job:'QA'};

// 1.2 constructors

let valueNumber = new Number('23231'); 
console.log(valueNumber);

let valueString = new String('Some string'); 
console.log(valueString);

let valueObject = new Object({a: 1}); 
console.log(valueObject);

let valueBoolean = new Boolean(true); 
console.log(valueBoolean);

let valueSymbol = Symbol('mySymbol'); 
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

let student = {
  firstName: 'John',
  lastName: 'Smith'   
};

let student2 = student;
student2.firstName = "Tommy";

console.log(student);
console.log(student2);

//3. Demonstrate string's backticks features.

let varForBactick = 1;
console.log(`Demonstrating string in backtick and here is variable ${varForBactick}`);

// Additional

//1. Declare an array containing different data types.

let myArray = [1, 'test', true, null, undefined];

//2. Iterate through it and collect amount of each data type to object.

let collectObject = {};

myArray.forEach(countObjectTypes);

function countObjectTypes(arrayElement) {
  if (collectObject[typeof arrayElement] == undefined) {
    collectObject[typeof arrayElement] = 1;
  }
  else {
    collectObject[typeof arrayElement] += 1;
  }
}

console.log(collectObject);