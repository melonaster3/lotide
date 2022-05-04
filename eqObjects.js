const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    return console.log(`👎👎👎👎👎Assertion has failed ${actual} !== ${expected}`);
  } else {
    return console.log(`😉😉😉😉😉 Assertion has passed ${actual} === ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let answer = false; 

  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length === keys2.length) {
    for (let key of keys1) {
        
      if (Array.isArray(object1[key]) === true) {
        if (eqArrays(object1[key],object2[key]) === true) {
          answer = true;
        } else {
          return false;
        } 
      } 
      else if (object1[key] === object2[key]) {
        answer = true; 
      } else {
        return false;
      }
    }
    } else {
      return false;
    }
    return answer;
  }

  

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};

const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false); // => false
