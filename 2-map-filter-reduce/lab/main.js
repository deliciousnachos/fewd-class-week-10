console.log('transformers.js is connected!');

/**
 * PART 1
 * 
 * 1. Use `map` to return a new array of transformers' names.
 * 2. Use `filter` to return a new array of only Autobots.
 * 3. Use `filter` to return a new array of transformers with 
 *    only vehicle forms.
 * 4. Use `map` to return an array of objects that have a `name`
 *    and a `photo` property. Then, loop through the new array using forEach
 *    and append an `h1` with the name and an `img` with the photo
 *    to the `transformerslist` element. **You may use jQuery to do this.**
 * 
 */

var transformers = [
  {
    name: 'Optimus Prime',
    form: 'Freightliner Truck',
    form_type: 'vehicle',
    team: 'Autobot',
    photo: 'http://tfwiki.net/mediawiki/images2/2/2b/Shadowplay2_no_frikkin_way.jpg',
  },
  {
    name: 'Megatron',
    form: 'Gun',
    form_type: 'object',
    team: 'Decepticon',
    photo: 'http://tfwiki.net/mediawiki/images2/thumb/9/92/MTMTE50_megatron_class_dismissed.jpg/562px-MTMTE50_megatron_class_dismissed.jpg',
  },
  {
    name: 'Bumblebee',
    form: 'VW Beetle',
    form_type: 'vehicle',
    team: 'Autobot',
    photo: 'http://tfwiki.net/mediawiki/images2/4/4d/Bumblebee_car_Hawk_Among_the_Sparrows.jpg',
  },
  {
    name: 'Soundwave',
    form: 'Walkman',
    form_type: 'object',
    team: 'Decepticon',
    photo: 'http://tfwiki.net/mediawiki/images2/8/8d/Soundwaves-allofustogether.jpg',
  },
  {
    name: 'Starscream',
    form: 'Fighter Jet',
    form_type: 'vehicle',
    team: 'Decepticon',
    photo: 'http://tfwiki.net/mediawiki/images2/3/33/Ongoing13_sad_starscream_is_sad.jpg',
  },
  {
    name: 'Rodimus Prime',
    form: 'Ford GT',
    form_type: 'vehicle',
    team: 'Autobot',
    photo: 'http://tfwiki.net/mediawiki/images2/thumb/f/f6/SpotlightHotRod-HotRodcvrAexcerpt.jpg/470px-SpotlightHotRod-HotRodcvrAexcerpt.jpg',
  }
];



// 1
var transformerNames = transformers.map(function(element) {
  return element.name;
});
console.log(transformerNames);

// 2
var autobots = transformers.filter(function(element) {
  if (element.team === 'Autobot') {
    return true;
  } else
    return false;
});
console.log(autobots);

// 3 written a shorter way
var vehicles = transformers.filter(function(element) {
  return element.form_type === 'vehicle'
});
console.log(vehicles);

// 4


// * 4. Use `map` to return an array of objects that have a `name`
//  *    and a `photo` property. Then, loop through the new array using forEach
//  *    and append an `h1` with the name and an `img` with the photo
//  *    to the `transformerslist` element. **You may use jQuery to do this.**

var transformerNamesAndPhotos = transformers.map(function(element) {
  return {
    name: element.name,
    photo: element.photo,
  };
});
console.log(transformerNamesAndPhotos);

var pageItUp = transformerNamesAndPhotos.forEach(function(element) {
  var titleOf = $('<h1>').appendTo('body').text(element.name);
  var imageOf = $('<img>').appendTo('body').attr('src', element.photo);
})



/**
 * PART 2
 * 
 * Reduce the Constructicons to form Devastator!
 * The Devastator object should look like this:
 { 
    name: 'Devastator',
    team: 'Decepticons',
    form: {
      rightLeg: 'Scrapper',
      upperTorso: 'Hook',
      leftArm: 'Bonecrusher',
      rightArm: 'Scavenger',
      leftLeg: 'Mixmaster',
      lowerTorso: 'Long Haul',
     },
    }
 */

var constructicons = [
  {
    name: 'Scrapper',
    form: 'Freightliner Truck',
    team: 'Decepticon',
    bodyPart: 'rightLeg'
  },
  {
    name: 'Hook',
    form: 'Mobile Crane',
    team: 'Decepticon',
    bodyPart: 'upperTorso'
  },
  {
    name: 'Bonecrusher',
    form: 'Bulldozer',
    team: 'Decepticon',
    bodyPart: 'leftArm'
  },
  {
    name: 'Scavenger',
    form: 'Excavator',
    team: 'Decepticon',
    bodyPart: 'rightArm'
  },
  {
    name: 'Mixmaster',
    form: 'Concrete Mixer',
    team: 'Decepticon',
    bodyPart: 'leftLeg'
  },
  {
    name: 'Long Haul',
    form: 'Dump Truck',
    team: 'Decepticon',
    bodyPart: 'lowerTorso'
  }
];

// // theory version
// var devastatorParts = constructicons.reduce(function(accumulator, element){
//   //code of how the hell to get there goes here
//   accumulator = accumulator + element
//   return accumulator
// }, {})



//no it's this - J showed us: 

var devastator = constructicons.reduce(function(accumulator, element) {
  accumulator.form[element.bodyPart] = element.name;
  return accumulator; 
}, {
  name: 'Devastator',
  team: 'Decepticons',
  form: {},
})
console.log(devastator)
