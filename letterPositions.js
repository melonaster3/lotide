const assertArraysEqual = require("./assertArraysEqual");


const letterPositions = function(sentence) {
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/\s/g, '');
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence.charAt(i)]) {
      results[sentence.charAt(i)].push(i);
    } else {
      results[sentence.charAt(i)] = [i];
    }
  }
  console.log(results);
  return results;
}

letterPositions("Hello Lighthouse Labs");

module.exports = letterPositions;