/**
 * 
 * @param {string} str 
 * @param {number} maxlength 
 * @returns {string} reduced string to maxLength size
 */
function truncate(str, maxlength) {
  let blank = "…";
  let result = str;

  if (result.length > maxlength) {
    result = result.slice(0, maxlength - 1) + blank;
  }
  return result;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))