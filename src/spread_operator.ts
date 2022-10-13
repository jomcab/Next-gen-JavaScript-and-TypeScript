// Spread Operator (...)

const hobbies = ['Weight Lifting', 'Reading'];
const activeHobbies = ['Walking'];

// passing array values as arguments without using Spread Operator
activeHobbies.push(hobbies[0], hobbies[1])

// passing array values using Spread Operator
activeHobbies.push(...hobbies)

// Spread Operator can also be used when assigning values
const activeHobbies2 = ['Walking', ...hobbies];

// It works with objects too!
const person = {
  name: 'Jomer',
  age: 29
};

const copiedPerson = { ...person }