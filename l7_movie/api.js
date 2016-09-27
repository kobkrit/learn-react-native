let rootURL = 'http://www.omdbapi.com/';

exports.search = function(q){
  let url = `${rootURL}?s=${q}`;
  console.log(url);
  return fetch(url)
    .then((resp)=>resp.json())
    .then((json)=>{
      return json.Search;
    });
}

exports.view = function(id){
  let url = `${rootURL}?i=${id}&plot=short&r=json`;
  return fetch(url)
    .then((resp)=>resp.json());
}
