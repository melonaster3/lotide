const tail = require('../tail');
const assert = require('chai').assert;


describe ("Tail Function", () => {

  it("Should return ['Lighthouse', 'Labs'] for ['YO YO','Lighthouse','Labs']", () => {
    assert.deepEqual(tail(['YO YO','Lighthouse','Labs']),['Lighthouse','Labs'])
  });

  it("Should return [4, 3, 5, 3] for [5, 4, 3, 5, 3]", () => {
    assert.deepEqual(tail([5,4,3,5,3]),[4,3,5,3])
  });

})



