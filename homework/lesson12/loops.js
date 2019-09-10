const getPrimeNumbers = (numbers) => {
    /*
    Write code that will return all prime numbers using for loop
        @param {array} numbers - array of any numbers
        @return {array} primeNumbers - array of prime numbers
    */

    // *** YOUR CODE START HERE ***
    const primeNumbers = [];
    // *** YOUR CODE END HERE ***

    return { primeNumbers };
};
getPrimeNumbers([ 2, 3, 4, 5, 7, 22, 11, 13, 34, 17, 19, 23, 29, 31, 37, 41, 1, 43, 47, 65, 98,53, 59, 61, 67, 71, 73, 79, 83, 89, 97 ]);


const repeatWhileNumberIsPrime = (numbers) => {
    /*
    Write code that will return prime numbers before first nonprime number using for loop
        @param {array} numbers - array of any numbers
        @return {array} primeNumbers - array of prime numbers
    */

    // *** YOUR CODE START HERE ***
    const primeNumbers = [];
    // *** YOUR CODE END HERE ***

    return { primeNumbers };
};
repeatWhileNumberIsPrime([ 2, 3, 5, 7, 11, 13, 17, 19, 20, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, ]);


const divedNumberWithComparator = (number, dividers) => {
    /*
    Write code that will divide number by each divider until number will be less than 100 using while loop,
    if in first iteration number is less then 100 than return this value without dividing
        @param {integer} number - integer number
        @param {array} dividers - array of any numbers
        @return {integer} resultNumber
    For Example:
         @param {integer} number = 3000
         @param {dividers} array = [ 1, 2, 8, 2, 4, 6 ]
         1. 3000/1 = 3000 - fist iteration
         2. 3000/2 = 1500 - second iteration
         3. 1500/8 = 187.5 - third iteration
         4. 187.5/2 = 93.74 - end of the loop
         @return {integer} resultNumber = 93.75
    */

    // *** YOUR CODE START HERE ***
    const resultNumber = 0;
    // *** YOUR CODE END HERE ***

    return { resultNumber };
};
divedNumberWithComparator(2000, [ 1, 2, 8, 2, 4, 6 ]);
divedNumberWithComparator(2000, [ 2000, 3 ]);


const getObjectKeys = (object) => {
    /*
    Write code that will return object keys using for loop,
    Optional task: there is possibility to do that without loop
        @param {object} object - any object
        @return {array} keys - own keys of object
    */

    // *** YOUR CODE START HERE ***
    const keys = [];
    // *** YOUR CODE END HERE ***

    return { keys };
};
getObjectKeys({ a: 1, b: 2, c: 3 });

/*
Theory:
 - What the difference between code? Why?
 for(i=0; i<5; i++){ console.log(i)}
 for(i=0; i<5; ++i){ console.log(i)}

- What the difference between code? Why?
 for(i=10;i--;){ console.log(i)}
 for(i=10;;i--){ console.log(i)};
*/
