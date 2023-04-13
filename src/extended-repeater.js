const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {

  let res = [];

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      res.push(String(str));
    }
  } else {
    res.push(str);
  }

  if (!options.separator) {
    options.separator = '+'
  } 

  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }

  if (options.addition || typeof options.addition === 'boolean' || typeof options.addition === 'object') {
    options.addition = String(options.addition);
    for (let i = 0; i < res.length; i++) {
      if (!options.additionRepeatTimes) {
        res[i] = res[i] + options.addition;
      }
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        if (options.additionSeparator) {
          res[i] = res[i] + options.addition + options.additionSeparator;
        } else {
          res[i] = res[i] + options.addition;
        }
      } 
      if (options.additionSeparator && options.additionRepeatTimes) {
        res[i] = res[i].substring(0, res[i].length - options.additionSeparator.length)
      }
    } 
  }

  return res.join(options.separator);

}

module.exports = {
  repeater
};
