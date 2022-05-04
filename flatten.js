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
    console.log(`Yes! ${array1} and ${array2} are equal!`);
    return result;
  } else {
    console.log(`Unfortunately, ${array1} and ${array2} are not equal!`);
    return result;
  }
};

const flatten = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let num of array[i]) {
        newArray.push(num);
      }
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

/*
const send = [1, 2, [3, 4], 5, [6]];
console.log(flatten(send)); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten(send), send);
*/