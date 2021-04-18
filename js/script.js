function currySum(firstNumber) {
  return function (nextNumber) {
    if (nextNumber) {
      return currySum(firstNumber + nextNumber);
    }

    return firstNumber;
  };
}

const result = currySum(1)(2)(3)(4)();
console.log(result);
