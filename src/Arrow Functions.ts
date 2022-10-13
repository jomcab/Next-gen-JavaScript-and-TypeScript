// Arrow Functions //

// basic structure
const myFuncBasic = () => {};

// function with parameters that returns a value
const myFuncWithParamAndReturn = (a: number, b: number) => {
  return a + b;
};

// functions with a single expression can be written without the curly brackets and return keyword
const myFuncWithParamAndSingleExpression = (a: number, b: number) =>  a + b;

// Default parameter values
const myFuncWithDefaltParam = (a: number, b: number = 1) =>  a + b;
// Incorrect: param with default values should come after the params without default because javascript adheres to order
const myFuncWithDefaltParamINC = (a: number = 1, b: number) =>  a + b;