// Theory: https://docs.google.com/document/d/1p3mFPl1q5XDPZ-CwjgCEjfVvfftQBTkzxqxli__preQ/edit?usp=sharing

// Numbers
const positive = 2;
const negative = -positive;
console.log(typeof(2 / 'q'));
console.log(2 / 'q');

// String
console.log('4'*7, '4fff'*7); // => 28, NaN


// Boolean
let isGreater = 4 > 1;
console.log( isGreater ); // true (the comparison result is "yes")

if (true) {
  console.log('here');
}

if (false) {
  console.log('here where false');
}

if ('true') {
  console.log('here 2');
}

if ('false') {
  console.log('here where false 2');
}

// typeof false => "boolean"
// typeof 'false' => "string"


//Null

// Undefined
const myVar = 2 + 2;
if (myVar) {
  // ...do smth
} else {
  // ...do else
}
// !!'' => FALSE
// !!false => FALSE
// !!0 => FALSE
// !!undefined => FALSE
// !!null => FALSE
// !!NaN => FALSE

// !'' => TRUE
// !'LISA' => FALSE
// !!'LISA' => TRUE

//Object
// Object
// Array
// function
// Dates
const today = new Date();
console.log(today);
console.log(today.toString());
console.log(typeof today);
