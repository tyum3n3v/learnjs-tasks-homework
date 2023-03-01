let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
/**
 * 
 * @param {Array} objects 
 * @returns object instead of array
 */
function groupById(array) {
  return array.reduce((object, user) => {
    object[user.id] = user; 
    return object;
  }, {})
}
console.log(usersById)
/*
// после вызова у нас:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

