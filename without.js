
const assertArraysEqual = require("./assertArraysEqual");


const without = function (source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        source.splice(i,1);
      }
    }
  }
  console.log(source);
  return source;
}

/*
const words = ["hello", "world", "lighthouse","what?"];
without(words, ["what?"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse","what?"]);
*/

module.exports = without;