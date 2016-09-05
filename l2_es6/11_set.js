//Creating a set
let x = new Set([1, 2, 3, 4, 4, 4, 5]);
x.add(6); //Add a new member
x.delete(2); //Delete a member
console.log(x); // => Set { 1, 3, 4, 5, 6 }
console.log('The set contains', x.size, 'elements.');
 //=> The set contains 5 elements.
console.log('The set has 1:', x.has(1));
 //=> The set has 1: true
console.log('The set has 8:', x.has(8));
 //=> The set has 8: false

//iterable
for (let value of x) {
  console.log(value); //=> 1, 3, 4, 5, 6
}
