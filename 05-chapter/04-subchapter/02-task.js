/**
 * 
 * @param {Array} array  
 * @param {String} str for add element into middle of array
 * @returns {void}
 */
function replacingValueInMiddle(arr, str) {
  let arrLength = arr.length;
  let averageIndex = Math.floor((arrLength - 1) / 2);
  arr[averageIndex] = str;
}
let styles = ["Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
replacingValueInMiddle(styles, "Классика");
console.log(styles);
console.log(styles, styles.shift());
styles.unshift("Рэп", "Регги");
console.log(styles);