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

  if (typeof object1 === 'object' && Array.isArray(object1) === false) {
  let key1 = Object.keys(object1); 

  for (let keys of key1) {
    if (Array.isArray(object1[keys])) {
      object1 = false;
    } else if (typeof object1[keys] === "object") {
      return eqObjects(object1[keys],object2);
    } else{
      return eqObjects(object2,object1[keys]);
    }
  }
  } else {
    if (object1 !== object2) {
     return object1 = false;
      } else {
       return object1 = true;
      }
  }
}

  

  console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true

  console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
  console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false