function currySum(firstNumber) {
  return (nextNumber) => {
    if (nextNumber === undefined) {
      return firstNumber;
    }

    return currySum(firstNumber + nextNumber);
  };
}

const result = currySum(1)(2)(3)(4)();
console.log(result);
