function sumCurry(firstNum) {
  console.log('Logging...', firstNum);
  return (nextNumber) => sumCurry(firstNum + nextNumber);
}

sumCurry(5)(6)(3)(10)(20);

let str = 'avKkva';

const pal = (str) =>
  str.toLowerCase() === str.split('').reverse().join('').toLowerCase()
    ? 'It is Pallindrome'
    : 'It is not';

const pal2 = (str) => {
  str = str.toLowerCase();
  for (let i = 0, j = str.length - 1; i < str.length / 2, j / 2 > 0; i++, j--) {
    if (str[i] !== str[j]) {
      return 'It is not';
    }
  }
  return 'It is Pallindrome';
};

console.time();
console.log(pal(str));
console.timeEnd();
console.log('=====================');
console.time();
console.log(pal2(str));
console.timeEnd();
