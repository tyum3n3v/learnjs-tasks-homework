function inBetween(min, max) {
  return function(x) {
    return x >= min && x <= max;
  }
}

function inArray(array) {
  return function(x) {
    return array.includes(x);
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6)));

console.log(arr.filter(inArray([1, 2, 10])));