const assertEqual = require('./assertEqual');

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

module.exports = countLetters;