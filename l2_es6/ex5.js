function reverseDigit(num){
  console.log((Math.abs(num)+'').split(''));
  console.log((Math.abs(num)+'').split('').reverse());
  console.log((Math.abs(num)+'').split('').reverse().join(''));
  return Math.sign(num)*(
    (Math.abs(num)+'').split('').reverse().join('')
  );
}

console.log(reverseDigit(123));
console.log(reverseDigit(-456));
