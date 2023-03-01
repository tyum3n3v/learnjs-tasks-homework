/**
 * 
 * @returns {Number} the number of seconds until tomorrow's date.
 */
function getSecondsToTommorow() {
  const secondsInDay = 86400;
  let date = new Date();

  let result = date.getHours() * 3600 + 
                date.getMinutes() * 60 +
                date. getSeconds();
  
  return secondsInDay - result;
}

console.log(getSecondsToTommorow());