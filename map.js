
const assertArraysEqual = require ("./assertArraysEqual");

const map = function (array, callback) {
const results = [];
for (let item of array) {
  results.push(callback(item));
}
return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["sang", "likes", "to", "coding"];
const words2 = ["what", "is", "going", "on", "major", "tom"];


const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);
const results3 = map(words2, word => word[0]);


assertArraysEqual(results1,["g",'c',"t","m","t"]);
assertArraysEqual(results2,["s",'l',"t","c"]);
assertArraysEqual(results3,["w",'i',"g","o","m","t"]);

module.exports = map;