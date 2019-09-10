const filterData = () => {
    /*
       Filter all odd numbers
        @param {function} - async function
        @return {array} array only with even numbers
    */

    // *** YOUR CODE START HERE ***
    // *** YOUR CODE END HERE ***
};
filterData(async () => [1,2,3,4,5,6,7,8,9]);

const errorHandling = () => {
    /*
       Catch error and return another one with customised name
        @param {function} - async function
        @return {error} error with name 'Catched ${errorName}'
    */

    // *** YOUR CODE START HERE ***
    // *** YOUR CODE END HERE ***
};
errorHandling(async () => {
    return new Error('Custom name');
});

const promiseQuque = () => {
    /*
       Write function that will call each promise after end of another one
        @param {array} - array of promises
        @return
    */

    // *** YOUR CODE START HERE ***
    // *** YOUR CODE END HERE ***
};
promiseQuque([new Promise(), new Promise(), new Promise()]);

const promisePolyfill = () => {
    /*
      Write your promise polyfill. This task is optional
    */

    // *** YOUR CODE START HERE ***
    // *** YOUR CODE END HERE ***
};


/*
Theory:
 - What the difference between XMLHttpRequest/promises/async await ?
 - What answer will be and why?
   const f1 = () => Promise.resolve(1);
   const f2 = n => n ==== 1 ? 2 : 0;
   f1().then(() => f2());
   f1().then(() => f2());
   f1().then(f2());
   f1().then(f2);
*/