let arr = ["HTML", "JavaScript", "CSS"];
/**
 * 
 * @param {Array} array 
 * @returns sorted array
 */
function copySorted(array) {
  let result = array.slice().sort();
  return result;
}

let sorted = copySorted(arr);

console.log(arr); // [ 'HTML', 'JavaScript', 'CSS' ]
console.log(sorted); // [ 'CSS', 'HTML', 'JavaScript' ]