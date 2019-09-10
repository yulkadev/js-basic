//Task 1
//Declare an array for 100 elements

// *** YOUR CODE ***
//const oneHundredArray = ;

// Task 2
/**
 * Take the element from array by provided index
 * check cases: element on this index doesn't exist,
 * validate that index is number, if it isn't a number,
 * feel free to check another corner cases
 * try to convert it, and if it was unsuccessfully return null
 *
 * @param {object} array
 * @param {number} index number of element in array
 */
const takeElemByIndex = (array, index) => {
  // *** YOUR CODE ***
};

takeElemByIndex(['First elem', 'Second elem', 'Third elem'], '1');

takeElemByIndex([34, 54, 74], 10);

takeElemByIndex(['12', 10, 98], null);

//Task 3
/**
 * Print id of last element in array
 * check all corner cases you guessed
 *
 * @param {object} array with objects with next pattern
 * { id: number, name: 'string' }
 *
 */
const printLastId = (array) => {
  // *** YOUR CODE ***
};

const taskThirdArray = [
  {
    id: 1,
    name: 'a'
  },
  {
    id: 2,
    name: 'b'
  },
  {
    id: 3,
    name: 'c'
  },
];

printLastId(taskThirdArray);

printLastId([]);

//Task 4
/**
 * You need find element in array by index
 * make sure it is an object, and if it is,
 * get value by provided key if this key doesn't exist
 * print 'Not Found'
 * if it exists print an object
 *
 * @param array array with objects
 * @param index number of selected element
 * @param key name of property in object
 */

const takeKeyByIndex = (array, index, key) => {
  // *** YOUR CODE ***
};

const taskFourthArray = [
  {
    randomKey: 1,
  },
  {
    randomKey: 2,
  }
];

takeKeyByIndex(taskFourthArray, 1, 'randomKey');

takeKeyByIndex(taskFourthArray, 2, 'randomKey');

takeKeyByIndex(taskFourthArray, 0, 'random');

takeKeyByIndex([], 10, 'randomKey');

//Task 5
/**
 * Convert element in array by provided index into object by next logic:
 * object key should be index of element, object key value should be element by this index
 *  @example
 *  array = [ 1, 2, 3, 4 ];
 *  converting at index 0
 *  array = [ { 0: 1 }, 2, 3, 4 ];
 *
 * @param array  array with values
 * @param index  index element for converting
 */

const convertElemToObject = (array, index) => {

};

const taskFifthArray = ['1', 'a', 'b', 'ty', 'bi', 34, 100, null ];

convertElemToObject(taskFifthArray, 0);

convertElemToObject(taskFifthArray, 1);

convertElemToObject(taskFifthArray, 5);

convertElemToObject(taskFifthArray, 7);

convertElemToObject([], 0);

