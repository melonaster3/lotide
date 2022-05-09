const tail = function(array) {
  if (array.length === 0 || array.length === []) {
    let empty = [];
    return empty;
  } else {
    return array.slice(1,array.length);
  }
};

module.exports = tail;