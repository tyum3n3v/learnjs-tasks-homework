let date = new Date()
/**
 * 
 * @param {Date} current date 
 * @returns {String} day of the week in short format
 */
function getWeakDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  result = days[date.getDay()];

  return result;
}

console.log(getWeakDay(date));