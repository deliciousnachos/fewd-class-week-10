// forEach

var forEachArr = [1, 2, 3, 4, 5];

forEachArr.forEach(function(element) {
  console.log(element);
});

// will log 1, 2, 3, 4, 5

// map

var arr = [1, 2, 3, 4, 5];

var mapArrPlusOne = arr.map(function(element) {
  return element + 1;
});

console.log(mapArrPlusOne) // [2, 3, 4, 5, 6]

var objects = [
  { name: 'j', age: 28 },
  { name: 'ryn', age: 29 },
  { name: 'moose', age: 18 },
];

var namesArr = objects.map(function(element) {
  return element.name;
});

console.log(namesArr) // [ j, ryn, moose ]

// filter

var evens = arr.map(function(element) {
  if (element % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evens) // [ 2, 4 ]

var inTwenties = arr.map(function(element) {
  if (element.age < 20) {
    return false;
  } else {
    return true;
  }
});

console.log(inTwenties) // [ { name: j, age: 28 }, { name: ryn, age: 29 } ]

// reduce

var sum = arr.reduce(function(accumulator, element) {
  accumulator = accumulator + element;
  return accumulator;
}, 0);

console.log(sum) // 15

var nameAge = objects.reduce(function(accumulator, element) {
  accumulator[element.name] = element.age;
  return accumulator;
}, {})

console.log(nameAge) // { j: 28, ryn: 29, moose: 18 }
