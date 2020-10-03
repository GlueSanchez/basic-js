const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  throw new CustomError('Not implemented');
  let count = 0;
  for (let arr1 of matrix) {
    for (let arr2 of arr1) {
      if (arr2 == '^^') {
        count++;
      }
    }
  }
  return count;
};