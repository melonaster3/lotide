const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    return console.log(`πππππAssertion has failed ${actual} !== ${expected}`);
  } else {
    return console.log(`πππππ Assertion has passed ${actual} === ${expected}`);
  }
};

module.exports = assertEqual;