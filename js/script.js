const sum = (a, b) => a + b;
const multiply = (a, b) => a * b;

function curry(callback) {
  return function operation(firstNumber) {
    return (nextNumber) => {
      if (nextNumber) {
        return operation(callback(firstNumber, nextNumber));
      }
      return firstNumber;
    };
  };
}

const resultSum = curry(sum)(2)(3)(2)();
console.log(resultSum);
const resultMultiply = curry(multiply)(2)(3)(2)();
console.log(resultMultiply);

// function curry(firstNumber) {
//   return (nextNumber) => {
//     if (nextNumber) {
//       return currySum(firstNumber + nextNumber);
//     }

//     return firstNumber;
//   };
// }
