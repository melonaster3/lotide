
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

assertArraysEqual([3, 'world', 'lighthouse'], ['hello', 'world', 'lighthouse']); // => should PASS
