/**
 * 
 * @param {Array} array 
 * sorted array on key [age]
 */
function sortByAge(array) {
  array.sort((a, b) => a.age - b.age);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];
console.log(arr);
/**
 * array = [
    { name: 'Вася', age: 25 },
    { name: 'Петя', age: 30 },
    { name: 'Маша', age: 28 }
  ]
 */

sortByAge(arr);
console.log(arr);
/**
 * array = [
    { name: 'Вася', age: 25 },
    { name: 'Маша', age: 28 },
    { name: 'Петя', age: 30 }
  ]
 */