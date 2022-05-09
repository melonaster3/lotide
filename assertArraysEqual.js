const eqArrays = require("./eqArrays");

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

module.exports = assertArraysEqual;

