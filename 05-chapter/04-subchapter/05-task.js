/**
 * 
 * @param {array} array 
 * @returns {void} result maximum sum value of continuous subarray
 */
function maxInterval(array) {
  let maxValue = 0;
  let result = 0;

  for (let i = 0; i <  array.length; i++ ) {
    maxValue += array[i];
    if (maxValue < 0) {
      maxValue = 0;
    }
    result = Math.max(maxValue, result);
  }

  console.log(result);
}

maxInterval([-1, 2, 3, -9]); // 5
maxInterval([-1, 2, 3, -9, 11]); // 11
maxInterval([-2, -1, 1, 2]); // 3
maxInterval([1, 2, 3]); // 6
maxInterval([100, -9, 2, -3, 5]); // 100