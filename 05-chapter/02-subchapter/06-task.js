/**
 * 
 * @param {number} min Integer
 * @param {number} max Integer
 * @returns generates a random integer from min to max (inclusive).
 */
function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

for(let i = 0; i < 100; i++) {
  console.log(randomInteger(3,10))
}