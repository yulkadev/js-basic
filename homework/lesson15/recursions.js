const getFactorial = (number) => {
    /*
    Write code that will return factorial for number using recursion
        @param {integer} number - any number
        @return {integer} factorial - factorial for number
    */

    // *** YOUR CODE START HERE ***
    const factorial = 0;
    // *** YOUR CODE END HERE ***

    return { factorial };
};
getFactorial(21);


const getReverseArray = (array) => {
    /*
    Write code that will return reversed array using recursion
        @param {array} array - array of any numbers
        @return {array} reversedArray - array with reversed values
    */

    // *** YOUR CODE START HERE ***
    const reversedArray = [];
    // *** YOUR CODE END HERE ***

    return { reversedArray };
};
getReverseArray([ 2, 3, 5, 7, 11, 13, 17, 19, 20, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109 ]);


const getFlattenArray = (array) => {
    /*
   Write code that will return return flatten array using recursion
       @param {array} array - array of any numbers
       @return {array} reversedArray - array with flattened values
   For example:
     @param {array} array - [1, 2, [3, 4, [5, 6]]]
     @return {array} reversedArray - [1, 2, 3, 4, 5, 6]
   */

    // *** YOUR CODE START HERE ***
    const flattenArray = [];
    // *** YOUR CODE END HERE ***

    return { flattenArray };
};
getFlattenArray([1, 2, [3, 4, [5, 6]]]);

const flow = (functions, x) => {
    /*
    Write code that will pass result from one function to another one using recursion,
        @param {array} functions - array of functions
        @param {integer} x - any number
        @return {integer} result - final result
    For Example:
        @param {array} functions - [pow, minusOne, multiplyByFour ]
        @param {integer} x - 10
        looks like: multiplyByFour(minusOne(pow(x)))
        @return {integer} result - ((10 * 10) -1) * 99 = 396
    */

    // *** YOUR CODE START HERE ***
    const result = 0;
    // *** YOUR CODE END HERE ***

    return { result };
};
flow();

const everythingIsReduce = () => {
    /*
    Choose any task from above and implement it using reduce
    */

    // *** YOUR CODE START HERE ***
    // *** YOUR CODE END HERE ***
};


/*
Theory:
 - What is tail recursion. Do you can write 2 recursions that will show the difference.
*/
