const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  for (let i = 0; i < domains.length; i++) {
    let s = domains[i].split('.').reverse();
    let str = '';
    for (let j = 0; j < s.length; j++) {
      str += `.${s[j]}`;
      if (res[str]) {
        res[str] += 1
      } else {
        res[str] = 1
      }
    }
  }
  return res
}
console.log(getDNSStats(['epam.com', 'info.epam.com']));
module.exports = {
  getDNSStats
};
