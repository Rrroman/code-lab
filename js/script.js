const objAZ = {
  4: 32,
  1: 100,
  z: 'String key',
  2: 'i am second',
  3: 'this works because all keys are numbers',
  a: 'strings keys not sorted alphabetically',
  b: 123,
};

Object.defineProperty(objAZ, 'q', {
  value: 'i am here from defineProperties',
  writable: false,
});

objAZ.q = 'Will i change?';

console.log(objAZ.q);

const myObj = Object.defineProperties(
  {},
  {
    hi: {
      value: 'Hello!',
      writable: true,
      configurable: true,
    },
  }
);
console.log(myObj.hi);
myObj.hi = [
  'i am array now? other type Hello?!?!? oh so part about type is for other descriptors',
];
console.log(myObj.hi);

delete myObj.hi;

console.log(myObj.hi);
