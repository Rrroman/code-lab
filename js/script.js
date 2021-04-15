// fib takes fib(a-1) + fib(a-2) = result

function fib(num) {
  if (num <= 1) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
}

console.log(fib(40));
