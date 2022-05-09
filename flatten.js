const assertArraysEqual = require("./assertArraysEqual");

const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let num of array[i]) {
        newArray.push(num);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

/*
const send = [1, 2, [3, 4], 5, [6]];
console.log(flatten(send)); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten(send), send);
*/

module.exports = flatten;