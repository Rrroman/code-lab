// return new array, use element, index, array,
// callback

const arr = [2, 4, 6, 7, 9, 21];

Array.prototype.myFilter = function myFilter(callback) {
  const arr = [...this];
  const tempArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      tempArray.push(arr[i]);
    }
  }
  return tempArray;
};

console.log(arr.myFilter((number) => number < 7));
