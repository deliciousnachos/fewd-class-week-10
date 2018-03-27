console.log('main.js is connected!');

$(document).ready(function() {

  // grabbing various elements

  var $name = $('.name');
  var $eye_color = $('.eye_color');
  var $year = $('.year');
  var $hair_color = $('.hair_color');
  var $movie_count = $('.movie_count');

  // grab the form and add a submit event listener
  $('#charform').on('submit', function(event) {


    // deactivate the default
    event.preventDefault();

    // grab the value of the input
    var characterNumber = event.target.charnum.value;

    // make a fetch request to get information about that character
    // maybe to a url like 'https://swapi.co/api/people/' + characterNumber?? Just a thought
    fetch('https://swapi.co/api/people/' + characterNumber + '/')

    // then once you get the data back from the fetch
    .then(function(characterData) {
      return characterData.json();
    })

    // refer to the elements we grabbed above and set their text to the element they correspond to. 
    // Two slightly tricky things:
    // there are two name elements so you will have to add the name to both of them. Also, we get back an array of movies -- how can we count how many there are?

    .then(function(jsonCharacterData) {
      // console.log(jsonCharacterData);
      // console.log(jsonCharacterData.birth_year);
      $name.text(jsonCharacterData.name);
      $eye_color.text(jsonCharacterData.eye_color);
      $year.text(jsonCharacterData.birth_year);
      $hair_color.text(jsonCharacterData.hair_color);
      $movie_count.text(jsonCharacterData.films.length);
    })

    .catch(function(err) {
      console.log(err)
    })





  });
});