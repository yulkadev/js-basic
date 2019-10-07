//1. Declare a variable on each type using two options: plain creation, creation with constructor.

let myNumber = 10;
let myString = "My name is Yuliia";
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let MySymbol = Symbol();
let MyObject = {job:"QA"};

//2. Use operator typeof on each of them.

console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBoolean);
console.log(typeof myNull);
console.log(typeof myUndefined);
console.log(typeof MySymbol);
console.log(typeof MyObject);

//3. Demonstrate object's references.

var student = {
    firstName: "John",
    lastName: "Smith"   
  };
 console.log(student.firstName);

//3. Demonstrate string's backticks features.

let varForBactick = 1;
console.log(`Demonstrating string in backtick and here is variable ${varForBactick}`)

# Additional

//1. Declare an array containing different data types.

let myArray = [1, "test", true];
console.log(myArray);

//2. Iterate through it and collect amount of each data type to object.

for (let element in myArray) {
    console.log(typeof myArray[element]);
}
