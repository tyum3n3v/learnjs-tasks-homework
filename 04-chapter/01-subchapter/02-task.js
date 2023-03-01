/**
 * 
 * @param {*} object 
 * @returns boolean: true - the object is empty, 
 *                   false - it has a property
 */
function isEmpty(object) {
  for(let property in object) return false; 
  return true;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false