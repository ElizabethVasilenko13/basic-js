const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let arr = n.toString().split("");
  let additionArray = [...arr];

  for (let i = 0; i < additionArray.length; i++) {
    arr.splice(i, 1);
    let additionNum = Number(arr.join(''));
    if (additionNum > max) {
      max = additionNum;
    }
    arr.splice(i, 0, additionArray[i]);
  }
  return max;
}

module.exports = {
  deleteDigit
};
