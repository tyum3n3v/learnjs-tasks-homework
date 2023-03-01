let date = new Date();
/**
 * 
 * @param {Date} date 
 * @param {Number} how many days ago 
 * @returns {Number} the number that was days days ago from the date date.
 */
function getDateAgo(date, days) {
  let dateAgo = new Date(date);

  dateAgo.setDate(date.getDate() - days);

  return dateAgo.getDate();
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));