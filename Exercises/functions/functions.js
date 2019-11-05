//1. Create a function declaration, function expression, lambda function, and using function object.

function funcDeclaration() {
  console.log('We declared a funcxtion using this code');
}

const myFuncExpression = function (parameter1) { return parameter1; };

const arrowFunc = (param1) => { console.log(param1); };

const myFunctionObject = new Function(console.log('Hello'));

//2. Get parameters amount of function `takeMyParametersAmount`.

function takeMyParametersAmount(...newArr) {
  return newArr.length;
}

//2. Create a function and log all passed parameters to it. Check the `length` of this function.

function logAllParameters(a, b, c) {

}
//3. Using anonymous function encapsulate function body from global scope.
