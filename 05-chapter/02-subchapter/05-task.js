/**
 * 
 * @param {number} min Integer
 * @param {number} max Integer
 * @returns generates a random floating point number 
 * from min to max (but not including max).
 */
function random(min, max) {
  return min + Math.random() * (max - min);
}

for(let i = 0; i < 100; i++) {
  console.log(random(3,10))
}