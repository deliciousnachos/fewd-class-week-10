# Advanced Data Handling with JavaScript

## Functional Programming vs Object-Oriented Programming

There are many, many, many types of programming languages. As you're learning about web development, you'll largely hear about two of them in particular: _object-oriented languages_ and _functional languages_. JavaScript has aspects of both types (technically it's a prototypal language).

There are a few major differences between object oriented and functional programming styles.

- Object Oriented programming keeps track of what's called the application's `state` -- a representation of what's going on at any given point. It modifies data based on this state, and vice versa.
- Functional programming looks at data as a stream of information coming into the program, and performs actions in order to transform that data into what the application needs. 

### An Analogy

Let's say you're a fish researcher who needs to count fish. You could go about this two ways:
- You find a lake with fish. You collect all the fish in a pen at one end of the lake, and then count them.
- You find a creek that has fish. You set up a gate that the fish will go through as they go down the creek. The fish keep going after they go through your gate, but now you have a count of the fish.

The first one is an object-oriented solution -- you're taking the data (fish) and changing it (moving the fish) in order to get the result you want (a number of fish). The second is a functional solution -- the data (fish) is coming into your program (where you're watching the creek) and you're not altering what they're doing -- you are just counting them as they go by to end up with the result you want (a number of fish).

### Why is this important?

For the purposes of what you're doing, using a functional style vs an object-oriented style probably won't make that much difference. But if this is something you're interested in, I recommend picking up a book on each style. [Practical Object-Oriented Design in Ruby](http://www.poodr.com/) is very good for OOP, while [A Gentle Introduction to Symbolic Computation](https://www.cs.cmu.edu/~dst/LispBook/book.pdf) is a good intro to FP. (Disclaimer: Neither of these books is written for JavaScript, but they should be at least readable nonetheless.)

## Array Methods

We've used some array methods before -- `.push()`, etc. There are also some array methods that we can use to iterate over an array as opposed to having to do it with a for loop.

### `forEach`

`forEach` is an array method that just loops through an array and performs an action for each element:

```js
var forEachArr = [1, 2, 3, 4, 5]

forEachArr.forEach(function(element) {
  console.log(element)
});

// will log 1, 2, 3, 4, 5
```

`forEach` is called on an array. It takes a function as an argument. `forEach` performs that function on every element of the array.

## Map, Filter, and Reduce

![emoji](http://www.globalnerdy.com/wordpress/wp-content/uploads/2016/06/map-filter-reduce-in-emoji-1.png)

### `map`

`map` is called on an array and takes a function as an argument. That function is performed on each element in the array, and returns a resulting value. A new array is created of all the resulting values, and the original array is unchanged.

```js

var mapArr = [1, 2, 3, 4, 5];

var mapArrPlusOne = mapArr.map(function(element) {
  return element + 1;
});

console.log(mapArrPlusOne) // [2, 3, 4, 5, 6]
```

```js
var objects = [
  { name: 'j', age: 28 },
  { name: 'ryn', age: 29 },
  { name: 'moose', age: 18 },
];

var namesArr = objects.map(function(element) {
  return element.name;
});

console.log(namesArr) // [ j, ryn, moose ]
```

#### EXERCISE:

Using `map`, create a new array that doubles each value in the array `[1, 2, 3, 4, 5]`.

### `filter`

`filter` is called on an array and takes a function as an argument. The function is called on each element of the array and returns either true or false. If the function returns true, the element is added to a new array. If not, it is not added to the array.

```js
var evens = arr.filter(function(element) {
  if (element % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

console.log(evens) // [ 2, 4 ]

var inTwenties = arr.filter(function(element) {
  if (element.age < 20) {
    return false;
  } else {
    return true;
  }
});

console.log(inTwenties) // [ { name: j, age: 28 }, { name: ryn, age: 29 } ]
```

#### EXERCISE:

From the array below, use `filter` to create an array of only numbers that are divisible by three. Then, create another array of only numbers that are divisible by five.

```js
var bigArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]
```

### `reduce`

Reduce is the trickiest one. It is called on an array and takes two arguments: a function and an accumulator. The function is called on every element of the array and performs an update to the accumulator. At the end, the accumulator is returned.

```js
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
```

Reduce is the one that took me the longest to get -- for a _long_ time, I had no idea what it was doing. But, it is very powerful and useful, especially if you're working with complex data and need it in a very specific format.

## LAB!

Let's do some map, filter, reduce exercises based on Transformers! (The original cartoons... not the Michael Bay movies.) [Open up this codepen and follow the instructions!](https://codepen.io/jlr7245/pen/ZxrEQX?editors=0010)
