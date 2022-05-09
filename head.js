const assertEqual = require('./assertEqual');

/*const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    return console.log(`👎👎👎👎👎Assertion has failed ${actual} !== ${expected}`);
  } else {
    return console.log(`😉😉😉😉😉 Assertion has passed ${actual} === ${expected}`);
  }
};
*/

const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    return array[0];
  }

};

module.exports = head;


