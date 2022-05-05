const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    return console.log(`👎👎👎👎👎Assertion has failed ${actual} !== ${expected}`);
  } else {
    return console.log(`😉😉😉😉😉 Assertion has passed ${actual} === ${expected}`);
  }
};




const findKey = (object, callback) => {
  let keys = Object.keys(object);
  for (let key of keys) {
    if (callback(object[key]) === true) {
      return key;
    }
}
return undefined;
};

/*

assertEqual (
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
, "noma"
);

assertEqual (
  findKey({
    "Korea": { color: "blue"},
    "Japan": { color: "red" },
    "China": { color: "green"},
    "Vietnam": { color: "yellow" },
    "USA":     { color: "white" },
    "Canada":  { color: "black" }
  }, x => x.color === "blue") // => "noma"
  , "Korea"
  );

  */