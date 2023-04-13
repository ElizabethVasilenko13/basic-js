const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // s1 = [...new Set(s1)].join('')
  // console.log(s1);
  let count = 0;
  for (let i = 0; i <= s1.length; i++) {
    if (s2.includes(s1[i])){
      console.log(s2);

      s2 = s2.replace(s1[i], '');
      count++;
    }
  }
  return count;
}

console.log(getCommonCharacterCount('aabcc', 'adcaa'));

module.exports = {
  getCommonCharacterCount
};
