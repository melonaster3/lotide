const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    return console.log(`👎👎👎👎👎Assertion has failed ${actual} !== ${expected}`);
  } else {
    return console.log(`😉😉😉😉😉 Assertion has passed ${actual} === ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1,1);
assertEqual("HELLO",1);