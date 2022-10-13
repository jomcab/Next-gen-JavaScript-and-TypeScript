// Array & object Destructuring
const hobbiesArray = ['Weight Lifting', 'Reading', 'Walking', 'Content Creating'];

// assigning values from array without destructuring
const hobby1 = hobbiesArray[0];
const hobby2 = hobbiesArray[1];
const hobby3 = hobbiesArray[2];
const hobby4 = hobbiesArray[3];

// assigning value from array with destructuring
const [hobbyOne, hobbyTwo, ...remainingHobbies] = hobbiesArray
// above code will copy the first 2 elements of hobbiesArray to hobbyOne and hobbyTwo +
// will copy the remaining elements to remainingHobbies (array)

// in array destructuring, values are being pulled in order
// while in object destructuring, values are pulled by keywords
const personObj = {
  firstName: 'Jomer',
  age: 29
};

const { firstName, age } = personObj
// OR to change the variable name:
// const { firstName: userName, age } = personObj