
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

const takeUntil = function(array, callback) {
let newArray =[];
  for (let data of array) {
    if (callback(data) === true) {
      return newArray;
    } else {
      newArray.push(data);
    }
  }
  return newArray;
}



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1,[1, 2, 5, 7, 2]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);
console.log(results2);