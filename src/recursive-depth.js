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
// class DepthCalculator {
//   calculateDepth(arr) {
//     let count = 1;
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         count += this.calculateDepth(arr[i]);
//         count++;
//       }
//     }
//     return count;
//   }
// }

class DepthCalculator {
  calculateDepth(arr) {
    
  }
}

const instance = new DepthCalculator();
console.log(instance.calculateDepth([1, 2, 3, [1], 4, 5, [1]])); // 2
console.log(instance.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []])); // 4
console.log(instance.calculateDepth([1, 2, 3, 4, 5, [1]])); // 2 */

// function calculateDepth(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'object') {
//         count += calculateDepth(arr[i]);
//         count++;
//       }
//     }
//     return count;
// }

// console.log(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]));

module.exports = {
  DepthCalculator
};
