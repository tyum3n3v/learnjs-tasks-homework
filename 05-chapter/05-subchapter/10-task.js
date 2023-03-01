/**
 * 
 * @param {Array} array 
 * evenly distributed shuffle
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    console.log(array[i], array [j]);
    [array[i], array[j]] = [array[j], array[i]];
  }
}
  
let arr = [1, 2, 3];
  
shuffle(arr);
console.log(arr);