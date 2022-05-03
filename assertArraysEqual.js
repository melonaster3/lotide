const eqArrays = function(array1, array2) {
  let result;
  for (let num1 of array1) {
    if (array1[num1] !== array2[num1]) {
      result = false;
      return result;
    } else {
      result = true;
    }
  }
  return result;
};

const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1,array2);
  if (result === true) {
    console.log(`Yes! ${array1} and ${array2} are equal!`);
    return result;
  } else {
    console.log(`Unfortunately, ${array1} and ${array2} are not equal!`);
    return result;
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should PASS
