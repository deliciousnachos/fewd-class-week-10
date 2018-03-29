
// using forEach - this will console log each element in the array

var someArray = [1, 2, 3, 4, 5];

someArray.forEach(function(element) {
  console.log(element);
})


// using forEach - this will create an h1 for each element on the page

someArray.forEach(function(x) {
  var h1 = document.createElement('h1')
  h1.innerHTML= x ;
  document.querySelector('body').append(h1)
})



// using a callback - this set of code will set up a callback: 

function attachElementToPage(element) {
  var h1 = document.createElement('h1')
  h1.innerHTML = element
  document.querySelector('body').append(h1)
}

var myArray = ['hello', 'world', 'here is an array'];

myArray.forEach(attachElementToPage);



// using map - 

var anArray = [6, 7, 8, 9, 10]

var arrPlusOne = anArray.map(function(element) {
  return element + 1;
})

console.log(anArray)
console.log(arrPlusOne)

// here is a map - 

function ourMap(array, callback) {
  var newArray = []
  for (var i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}


// try it again 

function plusOne(element) {
  return element + 1;
}

var elemPlusOne = ourMap(someArray, plusOne)
console.log(elemPlusOne)



// undefined if you don't use return, as seen below:

var blah = someArray.map(function(element) {
  element + 1
})
console.log(blah)



// exercise example - double each number in the array 

var exerciseArray = [1, 2, 3, 4, 5]

var doubleThisArray = exerciseArray.map(function(numero) {
  return numero * 2;
})
console.log(doubleThisArray)



// using filter - and % - aka "modulus" aka the remainder 

var someArray = [1, 2, 3, 4, 5]

var isEven = someArray.filter(function(element) {
  if (element % 2 === 0) {
    return true;
  } else {
    return false;
  }
})

console.log(isEven) // this is an array of only the items from someArray that are even


// another filter - using an object 

var objects = [
  { name: 'j', age: 28 },
  { name: 'ryn', age: 29 },
  { name: 'moose', age: 18 },
];

var overTwenty = objects.filter(function(element) {
  if (element.age > 20) {
    return true;
  } else {
    return false;
  }
})

console.log(objects)
console.log(overTwenty)



// filter exercise - take this big array and make new arrays with only the numbers in the array that are divisible by 3 and another divisible by 5

var bigArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];

var divisibleThree = bigArr.filter(function(element) {
  if (element % 3 === 0) {
    return true;
  } else {
    return false;
  }
})
console.log(divisibleThree)


var divisibleFive = bigArr.filter(function(element) {
  if (element % 5 === 0) {
    return true;
  } else {
    return false;
  }
})
console.log(divisibleFive)



// reduce returns an accumulator 

var sum = bigArr.reduce(function(accumulator, element) {
  accumulator = accumulator + element
  return accumulator
}, 0) //so, the function and then what number the accumulator will start at 

console.log(sum)


// another example 

var objects = [
  { name: 'j', age: 28 },
  { name: 'ryn', age: 29 },
  { name: 'moose', age: 18 },
];

var ageLookup = objects.reduce(function(acc, el) {
  acc[el.name] = el.age
  return acc
}, {})
console.log(ageLookup)
console.log(ageLookup.moose)














