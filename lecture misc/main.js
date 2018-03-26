console.log('connected');

fetch('https://swapi.co/api/people')
  .then(function(response) {
    return response.json()
  })
// this is the only contact with the API 


  .then(function(jsonResponse) {
    console.log(jsonResponse);
  })
// this takes the return from the previous and then names it jsonResponse on the fly, could be named anything 


  .catch(function(err) {
    console.log(err);
  })
//