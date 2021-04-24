const square = {
  color: 'yellow',
  side: 30,
};

// Object.prototype.perimeter = function () {
//   return this.side * 4;
// };

Object.setPrototypeOf(square, {
  // ...Object.getPrototypeOf(square),
  perimeter: function () {
    return this.side * 4;
  },
});

console.log(square.perimeter());
console.log(square.color);
console.log(square);
