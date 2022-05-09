const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  let result = {};
  for (let names of allItems) {
    if (itemsToCount[names]) {
      if (result[names]) {
        result[names] += 1;
      } else {
        result[names] = 1;
      }
    }
  }
  return result;
};

module.exports = countOnly;

/*
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];



const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/
