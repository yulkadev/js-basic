const deepCopyOfObject = (object) => {
    /*
    Write code that will return deep copy of own properties of object
        @param {object} object - any object
        @return {object} copiedObject - copied object
    */

    // *** YOUR CODE START HERE ***
    const copiedObject = {};
    // *** YOUR CODE END HERE ***

    return { copiedObject };
};
deepCopyOfObject({a: 1, b: 3, c: () => {}});

const isKeyValuePalindrome = (object) => {
    /*
    Write code that will return new object that has palindrome keys/values from input object
        @param {object} object - any object
        @return {object} palindromeObject - copied object
    */

    // *** YOUR CODE START HERE ***
    const palindromeObject = {};
    // *** YOUR CODE END HERE ***

    return { palindromeObject };
};
isKeyValuePalindrome({
    wow: 'wow',
    number: 2,
    madam: 'madam',
    stats: 'stats'
});

const filterValues = (object, comparator) => {
    /*
    Write code that will return all values that pass callback
        @param {object} object - any object
        @param {function} comparator - function
            @param {number} value
            @return {boolean} true/false
        @return {array} filteredValues - filtered values
    */

    // *** YOUR CODE START HERE ***
    const filteredValues = [];
    // *** YOUR CODE END HERE ***

    return { filteredValues };
};
filterValues([ 2, 4, 6, 22, 4, 10, 54, 87, 64, 0, 23, 89, 303, 21, 34, 543, 86, 12, 45, 23 ], value => value > 50);


const findAllPropertiesWithAcceptableValue = (arrays, comparator) => {
    /*
    Write code that will return all properties that have acceptable value
        @param {array} arrays - array of arrays of objects
        @param {array} comparator - array of acceptable words
        @return {array} result - properties
    For example:
        @param {array} arrays - [
            [ { peach: 'peach' }, { apple: 'green' } ],
            [ { car: 'red' }, { airplane: 'white' } ],
            [ { tomato: 'red' }, { aubergine: 'blue' } ]
        ]
        @param {array} comparator - [ 'black', 'red' ]
        @return {array} result - [ 'car', 'tomato' ]
    */

    // *** YOUR CODE START HERE ***
    const result = [];
    // *** YOUR CODE END HERE ***

    return { result };
};
findAllPropertiesWithAcceptableValue([
    [ { peach: 'peach' }, { apple: 'green' } ],
    [ { car: 'red' }, { airplane: 'white' } ],
    [ { tomato: 'red' }, { aubergine: 'blue' } ]
], [ 'black', 'red' ]);


const findAllPropertiesWithAcceptableValue = (arrays, comparator) => {
    /*
    Write code that will return all properties that have acceptable value
        @param {array} arrays - array of arrays of objects
        @param {array} comparator - array of acceptable words
        @return {array} result - properties
    For example:
        @param {array} arrays - [
            [ { peach: 'peach' }, { apple: 'green' } ],
            [ { car: 'red' }, { airplane: 'white' } ],
            [ { tomato: 'red' }, { aubergine: 'blue' } ]
        ]
        @param {array} comparator - [ 'black', 'red' ]
        @return {array} result - [ 'car', 'tomato' ]
    */

    // *** YOUR CODE START HERE ***
    const result = [];
    // *** YOUR CODE END HERE ***

    return { result };
};
findAllPropertiesWithAcceptableValue([
    [ { peach: 'peach' }, { apple: 'green' } ],
    [ { car: 'red' }, { airplane: 'white' } ],
    [ { tomato: 'red' }, { aubergine: 'blue' } ]
], [ 'black', 'red' ]);
