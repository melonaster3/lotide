
const eqArrays = function(array1, array2) {
  let result;
  if (array1.length !== array2.length) {
    result = false;
    return result;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = false;
        return result;
      } else {
        result = true;
      }
    }
    return result;
  }
};

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1,array2);
  if (result === true) {
    console.log(`🟢🟢🟢 Yes! ${array1} and ${array2} are equal! 🟢🟢🟢`);
    return result;
  } else {
    console.log(`🚨🚨🚨 Unfortunately, ${array1} and ${array2} are not equal! 🚨🚨🚨 `);
    return result;
  }
};

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