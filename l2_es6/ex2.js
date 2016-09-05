function wordHistogram(str){
  let strArr = str.toLowerCase().split(' ');
   //=> [ 'dog', 'eat', 'cat', 'cat', 'eat', 'dog' ]
  let sum = {};
  for (let i=0;i<strArr.length;i++){
    let word = strArr[i];
    if (!sum[word]) sum[word] = 0;
    sum[word]+=1;
  }
  return sum;
}
console.log(wordHistogram('dog eat cat cat eat dog'));
