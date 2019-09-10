// All additional information about methods you can find
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E

// 1. Log one billion and one thousands. Choose better way to write numbers.



// 2. Try to understand why code below works
const a = 0b11111111; // binary form of 255
const b = 0o377; // octal form of 255

console.log( a === b ); // true, the same number 255 at both sides

// 3. Cast variable myNum to string, Log result.
// Cast to sting using 3 base, Log result.
const myNum = 75;



// 4. Use 4 different methods to cast Real to Int.
const myRealNum = 3.14;



// 5. You know that sum will return  0.30000000000000004
const sum = 0.1 + 0.2;
// But I want to see 0.3..
//  Implement code that will calculate or display properly



// 6. I have number -1, and I want to divide it on zero, but as my num is negative,
// I will get -Infinity.
// Write code that will return +Infinity after some operations on -1



// 7.Do you have Infinity in task 6, number or NaN?
// Check it and Log result
// Hint: isFinite, isNaN, isInteger



// 8. I have two sentence '2 cows' and '0.5 kg each cow'/
const cowItems = ' 2 cows ';
const cowWeight = '0.5 kg each cow';
// Log numbers from this sentences



// 9. Do you remember task 3? Now try to cast variable castNum to string,
// but base you should not pass explicitly, you need to randomize this number and pass it.
// Note: that base can be from 2 to 36. And only int value.
const castNum = 25;


// 10. Look on code
const numToPrecist = 5.123456;
console.log(numToPrecist.toPrecision());
console.log(numToPrecist.toPrecision(5));

// Hmm, looks like toFixed.. and what the difference?
// Write difference


// 11. Run code
console.log(Math.pow(2, 54) + 1 === Math.pow(2, 54) + 2);
// First look into method pow, Log 2 in cube.
// Then explain why it return true.



// 12. Take root from variable squareRoot. Log result
// Note: root can be taken only from positive numbers
// Hint: take before module
const squareRoot = -8;

