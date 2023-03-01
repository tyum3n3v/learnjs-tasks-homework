/**
 * 
 * @param {Array} arr numbers
 * @param {Number} a minimum occurrence
 * @param {Number} b maximum occurrence
 * @returns new array after deleting elements outside of the occurrence
 */
function filterRange(arr, a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }
  let result = [];

  result = arr.filter(item => (a <= item && item <= b));
  return result;
}

let array = [5, 3 , 8, 11, 1];

console.log(array); // [ 5, 3, 8, 11, 1 ]
console.log(filterRange(array, 5, 1)); // [ 5, 3, 1 ]
console.log(array === filterRange(array, 1, 5)); // false