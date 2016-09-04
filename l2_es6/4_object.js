//Declaration
let obj = {key:2, 'some-thing': 3};
const obj1 = {};
const obj2 = {
  a: 1,
  b:'hello',
  nested:{
    a: 'a',
    b: 'b'
  }
};

//Reference
obj = {b: 2};
console.log(obj); // => {b: 2}

//Assignment
obj['c'] = 3;
console.log(obj); // => {b: 2, c: 3}

//Retrieval
obj['c'] // => 3
obj.c // => 3
const sum = obj['c'] + obj['b']; // d = 5

//Re-Assignment
obj['c'] = sum;
obj.e = 4;
console.log(obj); // => { b: 2, c: 5, e: 4 }

//Deletion
delete obj.c;
console.log(obj); // => { b: 2, e: 4 }

//Getting array of keys
console.log(Object.keys(obj)); // => [ 'b', 'e' ]

//Getting size
console.log(Object.keys(obj).length); // => 2

//Loops
for (let i in obj){
  console.log(i, obj[i]); //=> b 2
                          //=> e 4
}

//Pass by Reference: They are never copied.
let obj3 = obj;
console.log(obj); // => { b: 2, e: 4 }
console.log(obj3); // => { b: 2, e: 4 }
obj3.e = 5;
console.log(obj); // => { b: 2, e: 5 }
console.log(obj3); // => { b: 2, e: 5 }

//Functional Pass by Reference: They are never copied.
let obj4 = {a:1};
let num = 1;
set0(obj4, num);
function set0(obj, num){
  obj['a'] = 0;
  num = 0;
}
console.log(obj4); // => {a: 0}
console.log(num); // => 1

//How to clone object? Object can be clone
//Object.assign(target, source) => copy members
//from source to target and also return target
let obj5 = {};
Object.assign(obj5, obj);
let obj6 = Object.assign({}, obj);
let obj7 = Object.assign({x: 123}, obj);
obj5.z = 'Test';
obj6.y = 'Hey';
console.log(obj); // => { b: 2, e: 5 }
console.log(obj5); // => { b: 2, e: 5, z: 'Test' }
console.log(obj6); // => { b: 2, e: 5, y: 'Hey' }
console.log(obj7); // => { x: 123, b: 2, e: 5 }

//Object can hold function, can refer to the
//object's members by 'this'
let obj8 = {
  a: 5,
  b: 6,
  c: 7,
  addWithA: function(addition){
    return this.a+addition;
  },
  addWithAAndSomeVar: function(addition, someVar){
    return this[someVar]+this.addWithA(addition);
  }
}
console.log(obj8.addWithA(5)); // => 10
console.log(obj8.addWithAAndSomeVar(5, 'b')); // => 16
console.log(obj8.addWithAAndSomeVar(5, 'c')); // => 17

//ES6: Dynamic Key & Function Shorthand
function addValue(value){
  return value+1;
}
let test = {
  ['a'+1+'b']:'a',
  [addValue(3)]:'b',
  // addValue(3):'c', // => Throw: Unexpected number errors,
                      // all dynamic key must be inside []
  fn: function(){
    return 'test';
  },
  fnShortHand(){
    return this.fn()+' short hand';
  }
};
console.log(test); // => { '4': 'b', a1b: 'a', fn: [Function],
                   //      fnShortHand: [Function: fnShortHand] }
console.log(test.fn()); // => test
console.log(test.fnShortHand()); // => test short hand

//ES6: Property Value Shorthand
let male = 'man';
let female = 'woman';
let test2 = {
  male,
  female,
  // 'a' // => Throw: Unexpected token errors
}
console.log(test2); // => { male: 'man', female: 'woman' }

//ES6: Destructuring
let capitals = {
  Bangkok: 'Thailand',
  Tokyo: 'Japan',
  London: 'England'
}
let {Bangkok, Tokyo, London} = capitals;
// Equals to
// let Bangkok = capitals.Bangkok;
// let Tokyo = capitals.Tokyo;
// let London = capitals.London;
console.log(Bangkok, Tokyo, London); // => Thailand Japan England


//ES6: Sprades Operators ...
let sprade1 = {
  a:1,
  b:2,
  c:3
}
let sprade2 = {
  ...sprade1,
  c:4,
  d:5,
  e:6
}
let sprade3 = {
  c:4,
  d:5,
  e:6,
  ...sprade1
}
console.log(sprade2); // => { a: 1, b: 2, c: 4, d: 5, e: 6 }
console.log(sprade3); // => { c: 3, d: 5, e: 6, a: 1, b: 2 }
