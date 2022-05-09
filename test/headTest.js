/*const assertEqual = require('../assertEqual');
const head = require('../head')


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([], undefined)); */

const assert = require('chai').assert; 
const head = require('../head');

describe ('#head', () => {
  it("Function should return 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]),5);
  }),
  it("Function should return Hello for ['Hello','Lighthouse','Labs]", () => {
    assert.strictEqual(head(['Hello','Lighthouse','Labs']),'Hello');
  }),
  it("Function should return undefined for []", () => {
    assert.strictEqual(head([]),undefined);
  });
});