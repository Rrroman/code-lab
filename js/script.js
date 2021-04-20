let person = { name: 'Roman' };
const cat = { name: 'Fluffy' };

let friend = { name: 'Bob' };

const group = new WeakSet();

group.add(friend);
console.log(group);

// some operations ...
friend = null;
console.log(group);

/**
 * new WeakSet() - release data for garbage collector so it can delete unused data/property,
 * browser decides when it wil be deleted.
 *
 * new Set() don't let garbage collector to delete, property will be deleted only if
 * we do this by ourself with help of .delete() method
 *
 * Same for WeakMap
 * also keys must be an object
 *
 * This structures is good when you don't want to delete manually clearing data'
 */

const personData = new WeakMap();

personData.set(person, 'Extra data here');

person = null;

console.log(personData);
