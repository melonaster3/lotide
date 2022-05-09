
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
    console.log(`Unfortunately, ${array1} and ${array2} are nogit t equal!`);
    return result;
  }
};

const middle = function(array) {
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    let extract = (array.length / 2) - 1;
    let middleNums = [array[extract], array[extract+1]];
    return middleNums;
  } else if (array.length % 2 !== 0) {
    let extract = (array.length / 2) - 0.5;
    let middleNum = [array[extract]];
    return middleNum;
  }
}

let test1 = [1]; // => [0]
let test2 = [1,2,3]; // => [2]
let test3 = [1,2,3,4,5]; // => [3]
let test4 = [1,2,3,4]; // => [2,3]
let test5 = [1,2,3,4,5,6]; // => [3,4]

console.log(middle(test1));
console.log(middle(test2));
console.log(middle(test3));
console.log(middle(test4));
console.log(middle(test5));

assertArraysEqual(middle(test1),test1);
assertArraysEqual(middle(test2),test2);
assertArraysEqual(middle(test3),test3);
assertArraysEqual(middle(test4),test4);
assertArraysEqual(middle(test5),test5);
