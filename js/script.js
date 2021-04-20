const mixedArray = [1, 2, 2, 3, 3, 3, 4, 5, 'hi', 'hi', 'I', 'am', 'Roman'];

const setNumbers = new Set(mixedArray);

if (setNumbers.has('hi')) {
  setNumbers.delete('hi');
}

for (const entry of setNumbers.entries()) {
  console.log(entry);
}

// for (const entry of setNumbers.keys()) {
//   console.log(entry);
// }
