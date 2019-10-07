//1. Declare a variable which will be encapsulated from global scope.

var encapsulatedFromGlobalScope = 10;
alert(window.encapsulatedFromGlobalScope);

//2. Declare a variable which will appear in global object.

var myVariable = 20;
{
    var hoisted = 30;
    console.log(myVariable);
}

//3. Declare two variables which will be same-names but contain different values.

var sameNameVariable = 40;

function test () {
    var sameNameVariable = 50;
    console.log(sameNameVariable);
}

test();

//1. Declare a variable with hosting.

let hoistVariable = true;

function hoist() {
    if (1 == 2) {
        let hoistVariable = false;
    }
    console.log(hoistVariable);
}

hoist();