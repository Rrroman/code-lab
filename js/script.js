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

  const fruits = Object.keys(result);
  const sorted = fruits.sort((a, b) => result[b] - result[a]);
  return sorted;
};

sortFruits(fruits);
