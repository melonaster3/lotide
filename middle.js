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

module.exports = middle;


