# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @melonaster/lotide`

**Require it:**

`const _ = require('@melonaster/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Assertion of two arrays to see if they are equal or not 
* `assertEqual(actual, expected)`: Assertion of two values to see if they are equal or not
* `assertObjectsEqual(object1, object2)`: Assertion of two objects to see if they are equal or not 
* `countLetters(string)`: Input of a string to find how many letters there are 
* `countOnly (allItems, itemsToCount)`: Input of an array and a item to count, returns how many times the item was counted
* `eqArrays (array1, array2)`: Compares two arrays to see if they are equal or not
* `eqObjects (object1, object2)`: Compares two objects to see if they are equal or not
* `findKey (object, callback)`: Takes in an object and a callback to find its key. 
* `findKeyByValue (guide, want)`: Takes in an object and a value to find its key. 
* `flatten (array)`: Takes in an array and gets rid of all the nested array to return one array
* `head (array)`: Takes in an array to return the first element 
* `letterPositions (sentence)`: Takes in a sentence of string and returns the letter positions in an array
* `map (array, callback)`: Takes in an array to map and a call back function. It will return a new array based on the results of the call back function
* `middle (array)`: Takes in an array and returns the middle value
* `tail (array)`: Takes in an array and returns all the values after the first value
* `takeUntil (array, callback) `: Takes an array and a callback value. Will return an array of values before the callback 
* `without (source, itemsToRemove)`: Takes in a source array and returns the array with the itemsToRemove values removed.
