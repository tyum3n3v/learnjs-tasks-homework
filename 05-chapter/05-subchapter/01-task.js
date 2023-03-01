/**
 * 
 * @param {String} str with separation "-"
 * @returns {String} the "-" separations are replaced by a capital character
 */
function camelize(str) {
  let result = str.split('-')
  let output = "";
  console.log(result)
  for (let value of result) {
    if (value === '') {
      continue;
    } else if (value === result[0]) {
      output += value;
    } else {
      output += value[0].toUpperCase() + value.slice(1);
    }
  }
  console.log(output)
  return output;
}

camelize("background-color"); // backgroundColor
camelize("list-style-image"); // listStyleImage
camelize("-webkit-transition"); // WebkitTransition