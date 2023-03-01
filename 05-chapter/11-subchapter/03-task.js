let date = new Date(2023, 1, 26);
/**
 * 
 * @param {Date} date 
 * @returns {Number} the "European" day of the week for the date date.
 */
function getLocalDay(date) {
  let result = date.getDay();

  if (result == 0) {
    result = 7;
  }

  return result;
}

console.log(date.getDay()); // 0
console.log(getLocalDay(date)); // 7

