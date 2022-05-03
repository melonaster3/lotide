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

const without = function (source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        source.splice(i,1);
      }
    }
  }
  console.log(source);
  return source;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["what?"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);