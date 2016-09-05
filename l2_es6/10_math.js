



//ES6 come with great Math library
console.log(1+1); //2
console.log(3/2); //1.5 (Warning! NOT Integer Div)
console.log(Math.trunc(3/2)); //1 (Integer Div)
console.log(3.0/2); //1.5
console.log(7%4); //3 (Mod)
console.log(5*5); //25

console.log(parseInt('100')); //=> 100
console.log(parseInt('111', 2)); //=> 7
console.log(parseInt('FF', 16)); //=> 255
console.log(parseFloat('123.123')) //=> 123.123

console.log((255).toString(16)); //=> ff
console.log((7).toString(2)); //=> 111

console.log(Math.sign(10)); // 1
console.log(Math.sign(-10)); // -1
console.log(Math.abs(-100)); //=> 100
console.log(Math.ceil(5.1)); //=> 6
console.log(Math.floor(5.7)); //=> 5
console.log(Math.round(5.7)); //=> 6
console.log(Math.round(5.7)); //=> 6

console.log(Math.log10(100)); //=>2
console.log(Math.log2(8)); //=>3
console.log(Math.log(Math.E)); //=>1

console.log(Math.pow(2,2)); //=>4
console.log(Math.pow(-2,3)); //=>-8
console.log(Math.sqrt(4)); //=> 2
console.log(Math.cbrt(-8)); //=> -2

console.log(Math.min(1,2,3,4,5)); //=>1
console.log(Math.max(1,2,3,4,5,6,7,8,9,10)); //=>10
console.log(Math.random()); //=> Randomly pick [0, 1) => 0.334
//Want to get random number between [0, 9]?
console.log(Math.trunc(Math.random()*10));
