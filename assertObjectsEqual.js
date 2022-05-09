
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
    const inspect = require('util').inspect; // <= add this line
    let result = eqObjects(object1,object2);
    if (result === true) {
      console.log(`🟢🟢🟢 Yes! ${inspect(object1)} and ${inspect(object2)} are equal! 🟢🟢🟢`);
      return result;
    } else {
      console.log(`🚨🚨🚨 Unfortunately, ${inspect(object1)} and ${inspect(object2)} are not equal! 🚨🚨🚨`);
      return result;
    }
  };

  module.exports = assertObjectsEqual;

  /*
const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
assertObjectsEqual(ab, ba);
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
*/