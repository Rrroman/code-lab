// const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

// console.log(factorial(5));

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

function factorial(n, product = 1) {
  if (n === 0) {
    return product;
  }
  product = product * n;
  return factorial(n - 1, product);
  // return factorial(n - 1, product * n);
}

console.log(factorial(5));

// ==========
// factorial(5)
//  5 * factorial(5 - 1)
//   4 * factorial(4 - 1)
//     3 * factorial(3 - 1)
//      2 * factorial(2 - 1)
//        1
//      2 * 1 = 2
//    3 * 2 = 6
//   4 * 6 = 24
//  5 * 24 = 120

// ==========

// factorial(5, (result = 1));
//     factorial( 5 - 1 = 4, 5)
//      factorial( 4 - 1 = 3, 5*4=20)
//        factorial( 3 - 1 = 2, 20*3=60)
//          factorial( 2 - 1 = 1, 60*2 = 120)
//          factorial( 1, 120) = 120
