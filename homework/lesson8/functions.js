const isAdult = (age) => {
    /*
    This function check age. Code that written below is redundant. Your task
    is to rewrite it to make it more readable
        @param {integer} age - any number
        @return {boolean} is user adult
    */

    // *** YOUR CODE START HERE ***
    if (age > 18) {
        return true;
    } else {
        return false;
    }
    // *** YOUR CODE END HERE ***
};
isAdult(32);
isAdult(13);

const autocounter = () => {
    /*
    Write function that return 1 and then after next call 1 + 1, third call return 3, and so one
        @return {number}
    */

    // *** YOUR CODE START HERE ***
    // *** YOUR CODE END HERE ***
};
autocounter();
autocounter();
autocounter();
autocounter();
autocounter(); // expected 5


const getSum = () => {
    /*
    Write function that will return sum of 2 numbers, but function should be called twice.
        @param - determine by yourself
        @return {number} sum of two numbers
    For example:
        getSum(1)(2) => 3
        getSum(1)(5) => 6
    */

    // *** YOUR CODE START HERE ***
    // *** YOUR CODE END HERE ***
};
getSum(1)(10);
getSum(2)(3);



/*
Theory:
 - What type of value is a function?
 - What is the name property?
 - Does the length property count the rest parameter?
 - Difference between FE and FD
 - What cases to use Immediately Invoked Function Expressions
*/
