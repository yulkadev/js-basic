// Log - mean console.log(**some code**)
// 1. Write code that will displayed string as


// TODO:
// - do my homework
// - buy milk
// - read javascript.info

// Now write code in other way that will displayed the same string



// 2. You know that special character escaped by backslash (\).
// But what if I expect to see this character in string, for example: The backslash: \
// Log code that will display backslash



// 3. You have word 'MADAM', this is polynomium word and middle of it is 'D'
// Write code that will calculate middle of odd word and Log this data
// Expected to see:  console.log(**some code**) => "D"
const madam = 'MADAM';



// 4. You know one way to getting a characte of string (str[n]), another way to do that is
// method charAt, e.g.: str.charAt(n). Square brackets is more modern way,
// while charAt  exists mostly for historical reasons.
// They have one difference, please Log character that out of length
// in variable mister using [] and charAt and observ difference
const mister = 'MISTER';



// 5. Log sentence 'What a good day TODAY' in lowercase and in uppercase



// 6.
// Помните у нас было предложение
const sentence = 'Oooo, this Widget with id';
// И слово
const word = 'Widget';
// Мы пытались скопировать это слово с предложения sentence
// Сначала мы использовали метод indexOf для нахождения индекса вхождения
const index = sentence.indexOf(word);
// Находили длину слова
const wordLen = word.length;
// Потом мы копировали это значение используя slice
let slisedWord = sentence.slice(index, wordLen);
// Но результат был не ожидаемый, a пустая строка
console.log(slisedWord);
// Давайте взглянем на документацию метода slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
// Первый парраметр begin - index at which to begin extraction.
// Второй парраметр end - Optional index before which to end extraction. The character at this index will not be included.
// Что же получается, мы передавали вторым параметром длину слова, а не индекс на котором заканчивается это слово
// Поэтому перепешите slisedWord так что бы он возвращал 'Widget' вместо пустой строки, и залогируйте значение



// 7. Good work, but code from task 6 looks like to complicated, fortunately we have method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
// Rewrite slisedWord using method substr




// 7.Look into indexOf documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
// Look into fromIndex param.
// Write code that will Log index of 'id' inside sentence from variable secondSentence
const secondSentence = 'Oooo, this Widget with id';



// 8. You already write task 7 using indexOf, now look into method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf
// And rewrite task 7 using this new method



// 9. Using slice method write code that will return all string from variable alphabet except last character
// Hint: use negative endIndex
const alphabet = 'abcde'; // expected to see in Log "abcd"



// 10. Includes! or not? You have html class name
const elementClass = 'table column-container column-container-reverse border-red';
// - So you need to know does it is contain table, column-container-reverse and border-red inside class
// Try to implement code using methods startsWith, endsWith, includes



// 11. You have empty spaces before and after variable
const userAnswer = '     What to say.. I like vegetables       ';
// - So you need to remove this empty spaces
// Try to implement code using methods trim, trimStart, trimEnd


// 12. Optional. You have two numbers
const firstNum =  1;
const secondNum = 2;
// You need to write code that will display '12' as string, but you can't use backticks
// Hint lookup methods




// Obviously! Read this paragraph
// http://javascript.info/string#comparing-strings

// Theory:
// Do you notice that we have substr and substring method?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
// What the difference?
// https://stackoverflow.com/questions/3745515/what-is-the-difference-between-substr-and-substring
// Hmmm, okay... in this case what the difference between substring and slice?
// https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
// In free time try to play with substring and slice and see what will output in all cases.














