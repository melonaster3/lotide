const middle = require ("../middle");
const assert = require('chai').assert;

let test1 = [1];
let test2 = [1,2,3];
let test3 = [1,2,3,4,5];
let test4 = [1,2,3,4];
let test5 = [1,2,3,4,5,6];

describe ("Middle Function:", () => {

  it ("Should return [] for [1]", () => {
    assert.deepEqual(middle(test1),[]);
  }),

  it ("Should return [2] for [1,2,3]", () => {
    assert.deepEqual(middle(test2),[2]);
  }),

  it ("Should return [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle(test3),[3]);
  }),

  it ("Should return [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle(test4),[2,3]);
  }),

  it ("Should return [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle(test5),[3,4]);
  });

});

