const person = { name: 'Roman' };
const cat = { name: 'Fluffy' };

const group = new Map([
  [person, [cat, 'Mew mew', { age: 2, weight: [1, 2, 2.5] }]],
]);
const myMap = new Map([['hi', 42]]);

console.log('Get my cat obj -> ', group.get(person));
console.log(myMap);

console.log('===============');
for (const entry of group.entries()) {
  console.log(entry);
}
for (const [key, value] of group.entries()) {
  console.log(key, value);
}

console.log(group.has(cat));
console.log(group.has(person));
