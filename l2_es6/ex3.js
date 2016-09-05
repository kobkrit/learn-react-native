function unionsAndSort(a,b){
  console.log([a,b]);
  console.log([a,...b]);
  console.log([...a,b]);
  console.log([...a,...b]);
  return [...a,...b].sort();
}

console.log(unionsAndSort([1,2,3,4],[4,5,6,7]));
