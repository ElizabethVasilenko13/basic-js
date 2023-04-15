const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr) {
    // let depth = 1;
    // for (let i = 0; i < arr.length; i++) {
    //   if (Array.isArray(arr[i])) {
    //     depth = Math.max(depth, 1 + this.calculateDepth(arr[i]));
    //   }
    // }
    // return depth;
  }
}

const instance = new DepthCalculator();
console.log(instance.calculateDepth([1, 2, 3, [1], 4, 5, [1]])); // 2
console.log(instance.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []])); // 4
console.log(instance.calculateDepth([1, 2, 3, 4, 5, [1]])); // 2  

module.exports = {
  DepthCalculator
};
