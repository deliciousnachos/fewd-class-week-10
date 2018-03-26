# APIs and Data on the Web

## What is an API?

API stand for _Application Programming Interface_. Here's how Wikipedia defines it:

> It is a set of clearly defined methods of **communication** between various software components.

APIs can be many things -- for example, a library might have an API you can use in order to build a web app -- but today we're going to be talking about external APIs that serve data of various kinds.

For example, let's say we are making a Star Wars website, and we want information about Luke Skywalker. It just so happens that someone has built a Star Wars API that we can query for data.

If we go to this link in the browser: `https://swapi.co/api/people/1`

We will receive this data:

```json
{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
    "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"
    ],
    "species": [
        "https://swapi.co/api/species/1/"
    ],
    "vehicles": [
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
}
```

This is really helpful for a lot of reasons! It means I don't have to do a lot of work typing out information about Luke Skywalker, for one. It also gives me other URLs that I can go to in order to get other data. And, it means that if any of this information about Luke Skywalker changes, I won't have to rework my code -- I just grab the updated information about Luke Skywalker.

### What is JSON data?

JSON stands for **Javascript Object Notation**. You might notice that it looks quite a bit like a normal JavaScript object, but it has double quotes around each property and value. A lot of data on the web is sent back and forth in JSON format.

When you get data from an API -- what's termed "making an API call" -- you receive data, usually in JSON format. You can access properties on it the same way as you would a normal JavaScript object. For example, assuming you've saved this data in a variable called `response`, you would say `response.name` to get Luke Skywalker's name.


## Requesting data

We are going to use what's called `fetch` to get data. There are a couple of other ways to make API calls -- you might see something called jQuery AJAX, or XHR requests, but `fetch` is a utility that's built into most modern browsers, so that's what we're going to use.

Here is what a basic fetch request looks like:

```js
fetch('https://swapi.co/api/people/1').then(function(response) {
    return response.json()
  }).then(function(jsonResponse) {
    console.log(jsonResponse)
  }).catch(function(error) {
    console.log(error)
  });

```

This probably looks a little bit funky, and not quite what you're used to. That's because `fetch` uses **JavaScript Promises** in order to accomplish what it needs to do.

Think of it this way: when you go to a site, the page takes a little bit of time to load, right? Well, the same thing happens when you fetch data. It takes some time to get the data. So, we need to wait for that to happen. Then, when we have the data, we need to make sure it's in a format we can use. Then, we can do whatever we want to with that data. We also need to catch any errors that might occur.

You don't need to worry too much about how promises work. Just know that that's a large, important part of getting data on the web, and that in order to get data from a `fetch` request, we need to use `.then` a couple of times.

### LAB!

Let's build a Star Wars site.

We're going to have an input where someone can put in a number and get information about the character that belongs to that number.


## Why use APIs?

Here are some things I've used APIs for in the past:

- To build a weather site that displays informatin about the current weather for any zipcode a user enters
- To get nutrition data for a user's meal based on its ingredients
- To get up-to-date information about current legislation and legislators in the House & Senate
- To pull keywords out of a specific string or question in order to add tags to flashcards
- To get current news about particular topics

I have also made some APIs:

- A quotes database
- A flashcards database
- An API that stores data about how "hot" a product currently is (how many times it's been viewed, etc.)
