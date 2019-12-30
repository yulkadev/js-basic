const personalData = {
    firstName: 'John',
    lastName: 'Jefferson',
    age: 35
  }
  
  Object.keys(personalData).forEach(key => {
      let value = personalData[key];
  
       console.log(`${key}: ${value}`);
  });