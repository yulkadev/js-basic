// Task 1
/**
 * You should greet the user.
 * make constant which will store greet message and
 * use it to get string with full greet message with user name
 * function should return string with greeting message
 *
 * FYI: taskOne - just wrapper for task, don't pay attention to it,
 * imagine that you write code in separate file
 *
 * @param {string} name - user's name
 */
function  taskOne() {
   const GREETING_MESSAGE = 'I am happy to see you';
   
   function greetUser(name) {
     
   }

   //wrap in console log to check
   greetUser('Name1'); // I am happy to see you Name1
   greetUser('Name2'); // I am happy to see you Name2
   greetUser();  // ''
   greetUser('Name3', 'Name4'); //I am happy to see you Name3
}

taskOne();

// Task 2
/**
 * Write a function which will return function which
 * will get property from object by provided field  :D
 * Good luck! Have fun!
 *
 * @param {string} name - user's name
 */
function  taskTwo() {
  const user= {
    name: 'Test',
    surname: 'Testing',
  };

  function greetUser(user, getNameFunc) {
    return `I am happy to see you ${ getNameFunc(user) }`;
  }

  /**
   * @param field - name of property in object
   */
  const getGreetNameByField = (field) => {
    return (user) => user[field]
  };

  //wrap in console log to check
  greetUser(user, getGreetNameByField('name')); // I am happy to see you Test
  greetUser(user, getGreetNameByField('surname')); // I am happy to see you Testing
  greetUser(user, getGreetNameByField('nickname')); //''

}