
//Assign string with unicode to a variable.

const varWithUnicode = '\u00A9';
console.log(varWithUnicode);

//Declare a variable with string with escaped symbols.

let varWithEscapedSymbols = 'It\'s not a problem.';
console.log(varWithEscapedSymbols);

//Declare a variable which will contain name of your favourite animal.

let myFavoriteAnimalName = 'Tom';

//Log a message My favourite animal is with dynamic variable from previous task.

console.log(`My favourite naimal name is ${myFavoriteAnimalName}`);

//Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name with capitals first letters.

const myFavouriteWriter = 'conan doyle';

function capitalize(author) {  
  return author.split(' ').map(el => el.charAt(0).toUpperCase() + el.substring(1)).join(' ');  
}  

console.log(capitalize(myFavouriteWriter));

//Additional

//Declare a function which will receive password string. Check is password strong enough:
//should contain at least one capital letter;
//length no less than 8 characters.
//should contain at leas one special character.
//Make function which will generate password suggestion based on passed password, and required strongest.

function passwordStrong(passwordString) {

  if(!passwordString.match(/[A-Z]/)) {
    console.log('Password should contain at least one capital letter');
  }

  if(passwordString.length === 0 || passwordString.length <= 8) { 
    console.log('Password length should be no less than 8 characters');
  }
  if(!passwordString.match((/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/))) {  
    console.log('Password should contain at leas one special character');
  }
  else {
    console.log('Your password is strong enough!');
  }
}

passwordStrong('1#Gddddddddd');