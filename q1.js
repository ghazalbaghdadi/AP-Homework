// ? Question-1:follow these steps:
//todo-1:Write a function called "calculate" that takes 4 parameters.
//todo-2:The first and seconde parameters should be numbers.
//todo-3:The third parameter should be a string indicating either "add => addition" or "multiply => multiplication".
//todo-4:The fourth parameter should be a function that log the result of the calculation.
// not sure :/ ?

function calculate(numOne, numTwo, string, handleCalculationResult) {
  if (string === "add") {
    const add = numOne + numTwo;
    handleCalculationResult(add);
  } else if (string === "multiply") {
    const multiply = numOne * numTwo;
    handleCalculationResult(multiply);
  }
}
function handleCalculationResult(result) {
  console.log(`the answer is ${result}`);
}
calculate(5, 3, "add", handleCalculationResult);

calculate(4, 6, "multiply", handleCalculationResult);
