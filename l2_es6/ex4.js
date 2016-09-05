function onlyStartWithA(str){
  return str.split(' ')
    .filter(x=>x.startsWith('a')||x.startsWith('A'))
    .join(' ');
}

console.log(onlyStartWithA('angulus is an angle in latin'));
