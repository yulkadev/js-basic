//1. Create a object and using `defineProperty` define not writable property, not enumerable property and not
//configurable property. (PS: in real programming life I think you will never use it :) just for you to know)

let myObject = {};

Object.defineProperty(myObject, 'myProperty', {
    value: 10,
    writable: false,
    enumerable: false,
    configurable: false
  });  

console.log(myObject.myProperty);

//1. Generate array with keys, and array with values. Iterate through arrays and assign key/values to object.

const keys = ['name1', 'name2', 'name3'];
const values = [20, 30, 40];
const result = {};
keys.forEach((key, i) => result[key] = values[i]);
console.log(result);

//2. Make a function which will delete object key by reference, and other one - pure function.

const myObject1 = {"value1": 1,
                "value2": 2,
                "value3": 3};

delete myObject1.value1;

//3. Pass object values to function using destruction.

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

function myObjectDestruction({job = 'QA', experience = 1}){
  console.log(job, experience);
}
yObjectDestruction({
  job: 'Developer',
  experience: 2
});

//4. Add key/value to object using dynamic key value.

let obj = {
  property1: '',
  property2: ''
};

obj.property1 = 'some value';
obj.property2 = 'some other value';
obj['property3'] = 'some other value3';

let obj = {
  property1: 'value1',
  property2: 'value2',
  foo : function(){
          console.log(obj.property1);
  }
};

console.log(obj);
