const array = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 7];

function removeDup(arr) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (filtered.indexOf(arr[i]) === -1) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

console.log(removeDup(array));

const removeDuplicates = (arr) => {
  const temp = [];

  arr.forEach((number) => {
    temp.indexOf(number) === -1 ? temp.push(number) : false;
  });

  return temp;
};

console.log(removeDuplicates(array));
