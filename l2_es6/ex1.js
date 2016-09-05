function sumArray1(arr){
  let sum = 0;
  for (let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}

function sumArray2(arr){
  return arr.reduce((x,y) => x+y);
}

console.log(sumArray1([12,3,4,1,2,3]));
console.log(sumArray2([12,3,4,1,2,3]));
