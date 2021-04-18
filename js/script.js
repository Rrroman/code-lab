const inc = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    console.log(counter);
    // return counter;
  };
})();

inc();
inc();
inc();
inc();
inc();

//===============

const obj = {
  a: 42,
  say: function () {
    setTimeout(
      // () => without arrow function
      function () {
        console.log(this.a);
      }.bind(this)
    );
  },
};

obj.say();

//=================

const fruits = ['banana', 'cherry', 'grape', 'banana', 'banana', 'grape'];

const sortFruits = (arr) => {
  const result = arr.reduce((obj, fruit) => {
    obj[fruit] = obj[fruit] ? obj[fruit] + 1 : 1;
    return obj;
  }, {});

  const objKeys = Object.keys(result);
  const sorted = objKeys.sort(
    (keyValueSmaller, keyValueBigger) =>
      result[keyValueBigger] - result[keyValueSmaller]
  );
  return sorted;
};

console.log(sortFruits(fruits));

//================

const multiplyByTwo = (...rest) => {
  return rest.map((number) => number * 2);
};

console.log(multiplyByTwo(1, 2, 3, 4, 10));
