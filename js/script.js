const array = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 7];

const removeDuplicates = array.filter(
  (number, index, arr) => arr.indexOf(number) === index
);

console.log(removeDuplicates);

function removeDup(arr) {
  const filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

console.log(removeDup(array));

const filtered = [...new Set(array)];
console.log(filtered);
