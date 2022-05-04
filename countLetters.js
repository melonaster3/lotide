const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    return console.log(`👎👎👎👎👎Assertion has failed ${actual} !== ${expected}`);
  } else {
    return console.log(`😉😉😉😉😉 Assertion has passed ${actual} === ${expected}`);
  }
};

const countLetters = function (string) {
  string = string.toLowerCase();
  string = string.replace(/\s/g, '');
  let result = {};
  for (letters of string) {
    if (result[letters]) {
      result[letters] ++;
    } else {
      result[letters] = 1;
    }
  
  }
  console.log(result);
  return result;

}
countLetters("Hello What is up aiudasidias");