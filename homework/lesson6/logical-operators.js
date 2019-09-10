// by using logical operator || and variables a, b, c, make d equal c operand
const a = 'firstValue';
const b = 'secondValue';
const c = 'thirdValue';

const d = 1;

// guess result of these operations, print as comment expected result, then run and see are you correct, mark
//what you don't understand

const e = 5 && 4 && 4;

const f = 5 && false && 6;

const g = undefined && 6 && 0;

const h = 5 && '' && 0;

const i = 5 && null && 4;

const j = (4 || 6) && null;

const k = 4 || 6 && null;

const l = -1 || 0 && 100;

const m = '' || false && 100;

const n = '' || 1 && 100;

/*
  imagine, that you need to take cows of someone, you try to take it from yourself, if you haven't - from father,
  if he hasn't - from mother, and otherwise you take 1 cow, write suitable expression
 */

const mineCows = 123;
const mothersCows = 23;
const fatherCows = 45;

const takedCows = ;

/*
   You want to know, does everyone have a cows and write a message:
   write suitable expression
 */


const mineCows = 0;
const mothersCows = 23;
const fatherCows = 45;

const allWithCows = 1;

if (allWithCows) {
    console.log('YAY');
}