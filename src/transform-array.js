const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-next') {
      if (i !== newArr.length) {
        newArr.splice(i + 1, 1);
      } 
    }
    if (newArr[i] === '--discard-prev') {
      if (i !== 0) {
        if (typeof newArr[i - 1] !== 'string') {
          newArr.splice(i - 1, 1);
        }
      } 
    }
    if (newArr[i] === '--double-next') {
      if (i !== newArr.length - 1) {
        newArr.splice(i + 1, 0, newArr[i + 1]);
      } 
    }
    if (newArr[i] === '--double-prev') {
      newArr.splice(i, 1);
      if (i !== 0) {
        if (typeof newArr[i - 2] !== "string")
          newArr.splice(i - 1, 0, newArr[i - 1]);
      }
    }
  }

  return newArr.filter(el => el !== '--discard-prev' && el !== '--double-prev' && el !== '--double-next' && el !== '--discard-next');
}


module.exports = {
  transform
};
