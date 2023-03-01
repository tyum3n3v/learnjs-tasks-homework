/**
 * 
 * @param {Number} year 
 * @param {Number} month 
 * @returns the last day of the {year} and {month}.
 */
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2013, 1));