
//2. Make a function which will delete object key by reference, and other one - pure function.
//3. Pass object values to function using destruction.
//4. Add key/value to object using dynamic key value.
//1. Generate array with keys, and array with values. Iterate through arrays and assign key/values to object.


//1. Create a object and using `defineProperty` define not writable property, not enumerable property and not
//configurable property. (PS: in real programming life I think you will never use it :) just for you to know)

const myObject = {};

Object.defineProperty(myObject, 'myProperty', {
    value: 10,
    name: 'Test name',
    writable: false
  });  

delete myObject.value;

//1. Generate array with keys, and array with values. Iterate through arrays and assign key/values to object.

const keys = ['name1', 'name2', 'name3'];
const values = [20, 30, 40];
const result = {};
keys.forEach((key, i) => result[key] = values[i]);
console.log(result);
