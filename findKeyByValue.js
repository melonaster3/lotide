const assertEqual = require('./assertEqual');

const findKeyByValue = function (guide, want) {
  let keys = Object.keys(guide);
  let value = undefined;
  for (let i = 0; i < keys.length; i++) {
    if (guide[keys[i]] === want) {
      value = keys[i];
    }
  }  
  return value;
}

/*
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/


module.export = findKeyByValue;