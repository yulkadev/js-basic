const richText = (text) => {
    /*
    Implement function that will return object with text value and methods to edit this text
       methods:
        - addLine: added new line to the text
        - addTab: added new tab to the text
        - preventXSS: optional, escape from XSS attach
        @param {string} text - any string
        @return {object} {
            value,
            addLine,
            addTab,
            preventXSS
        }
    */

    // *** YOUR CODE START HERE ***
    // *** YOUR CODE END HERE ***
};
richText('<SCRIPT SRC=//xss.rocks/.j>');


/*
Theory:
 - Think what will be in each getName function, test it, why we have this result?
 const obj = {
    name: 'Bob',
    getName1: function() {
        return this.name;
    },
    getName2() {
        return this.name;
    },
    getName3: () => this.name
};
- What is global scope in browser/node?
- Look code
    const person = {
        firstName: "John",
        sayHi() {
            console.log(`Hi, my name is ${this.firstName}!`);
        }
    };
    const greet = person.sayHi;
    greet();
    person.sayHi();
 Is there difference between greet() and person.sayHi() ?
*/

