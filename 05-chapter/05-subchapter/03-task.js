let arr = [5, 3, 8, 1];
/**
 * 
 * @param {Array} arr numbers
 * @param {Number} a minimum occurrence
 * @param {Number} b maximum occurrence
 * old array after deleting elements outside of the occurrence
 */
function filterRangeInPlace(arr, a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

console.log(arr); // [ 5, 3, 8, 1 ]
filterRangeInPlace(arr, 1, 4);
console.log(arr); // [ 3, 1 ]