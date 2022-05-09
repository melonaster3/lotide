const middle = require ("../middle");
const assertArraysEqual = require ("../assertArraysEqual");

let test1 = [1];
let test2 = [1,2,3];
let test3 = [1,2,3,4,5];
let test4 = [1,2,3,4];
let test5 = [1,2,3,4,5,6];

console.log(middle(test1)); // => [0]
console.log(middle(test2));  // => [2]
console.log(middle(test3)); // => [3]
console.log(middle(test4)); // => [2,3]
console.log(middle(test5)); // => [3,4]

assertArraysEqual(middle(test1),test1);
assertArraysEqual(middle(test1),[]);

assertArraysEqual(middle(test2),test2);
assertArraysEqual(middle(test2),[2]);

assertArraysEqual(middle(test3),test3);
assertArraysEqual(middle(test3),[3]);

assertArraysEqual(middle(test4),test4);
assertArraysEqual(middle(test4),[2,3]);

assertArraysEqual(middle(test5),test5);
assertArraysEqual(middle(test5),[3,4]);