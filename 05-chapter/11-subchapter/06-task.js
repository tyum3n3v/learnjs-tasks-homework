/**
 * 
 * @returns {Number} the number of seconds since the beginning of today.
 */
function getSecondsToday() {
  let date = new Date();
  let result = date.getHours() * 3600 + 
                date.getMinutes() * 60 +
                date. getSeconds();
  
  return result;
}

console.log(getSecondsToday());