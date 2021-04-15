// fib takes fib(a-1) + fib(a-2) = result

// NBM (*not by myself*)
function fib(num, previous = []) {
  if (previous[num] !== undefined) {
    return previous[num];
  }

  let result;

  if (num <= 2) {
    result = 1;
  } else {
    result = fib(num - 1, previous) + fib(num - 2, previous);
  }

  previous[num] = result;

  return result;
}

console.log(fib(5));
// fib(5)
// fib(5 - 1 = 4, []) + fib( 5 - 3 = 2, [])
// fib(4 - 1 = 3, []) + 2
// 3 + 2

// Need to more explore
