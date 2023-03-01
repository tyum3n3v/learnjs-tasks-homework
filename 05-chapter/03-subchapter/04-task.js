/**
 * 
 * @param {string} string  
 * @returns witouth 1st symbol
 */
function extractCurrencyValue(str) {
  let result = str.slice(1);
  return +result; 
}

console.log(extractCurrencyValue('$12'));