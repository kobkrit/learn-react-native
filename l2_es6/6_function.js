//Declaration
const add = function(a,b){
  return a+b;
};

function add2(a,b,c){
  return a+b+c;
}

function printSomething(){
  console.log("print");
}

//Invocation
printSomething(); // => print
console.log(add(1,2)); // => 3
let sum = add2(1,2,3);
console.log(sum); // => 6


//ES6: Declaration, Arrows are a function shorthand (=>)
const add3 = (a,b) => {
  console.log('a+b=', a+b);
  return a+b;
}
//If there is only a return statement, you can remove {}
//and return keyword
const add1 = (a) => a+1;

console.log(add3(1,2)); // => 3
console.log(add1(1)); // => 2
console.log([1,2,3].map(add1)); // =>  [ 2, 3, 4 ]


//Anonymous Function: A function has no name (GoT Fan?)
setTimeout( // Set delay in invocation
  function () { // This function will be run after 10 ms.
    console.log('10 ms passed.') // Print '10 ms passed.' afrer 10ms.
  }
, 10)
setTimeout(
  () => { // This function will be run after 100 ms.
    console.log('100 ms passed.') //Print '100 ms passed.' after 100ms.
  }
, 100)

//Invorked anonymous function immediately.
console.log('Hey!'); // => Print 'Hey' immediately

(function(){ // Encapsulate with anonymous function.
  console.log('Hey!'); // => Print 'Hey' immediately
}());

(()=>{ // Encapsulate with anonymous function (short hand).
  console.log('Hey!'); // => Print 'Hey' immediately
})();






//Recursive
const fibonacci = (a) => {
  if (a < 1) return 1;
  return fibonacci(a-2)+fibonacci(a-1);
}
console.log(fibonacci(3)); // => 5


//Function can be used as arguments (Callback)
let callback1 = (total) => {
  console.log("Oh! Already finished! Total:", total);
}
let callback2 = (total) => {
  console.log("Wait so long. Boring. Total:", total);
}

let process = (cb) => {
  let total=0;
  for (let i=0;i<100;i++){
    total+=i;
  }
  cb(total); //Call the callback when the long operation done.
}

process(callback1); // => Oh! Already finished! Total: 4950
process(callback2); // => Wait so long. Boring. Total: 4950


// Exception: Mishap operations protector.
let strongCheckAdd1 = (a) => { // Callee function
  if (typeof(a) !== 'number'){
    throw {
      name: 'TypeError',
      message: 'add1 needs numbers'
    }; // Throw error to the caller function.
  }
  return a+1;
}

var try_it = ()=>{ // Caller function
  try{ // Try the following statements
    strongCheckAdd1('abc');
  }catch(e){ // If it throws some error!, CATCH!
    console.log("Error:", e); // print it out.
  }
}
try_it(); // => Error: { name: 'TypeError',
          // message: 'add1 needs numbers' }


//ES6: Rest Params (Spreads ... parameters)
function concatenateAll(...args){
  console.log(args[0], args[1]); // => Hey I
  console.log(args); // => 'Hey','I','kinda','miss','you'
  console.log(args.length); // => 5
  return args.join('');
}
console.log(concatenateAll('Hey','I','kinda','miss','you'));
// => HeyIkindamissyou

//ES6: Default parameters
function addWithDefaults(a = 0, b = 0){
  return a+b;
}
console.log(addWithDefaults()); // => 0

//ES6: Named params
function rectArea ({ width = 5, height = 5 } = {}) {
  return width*height;
}

console.log(rectArea()); // 25
console.log(rectArea({})); // 25
console.log(rectArea({width: 3, height: 30})); // 90














//
// for (let i=0;i<l;i++){
//   //Bad
//   function hey(text){
//     console.log(text);
//   }
//   hey(i);
// }
