let map = new Map();

map.set("name", "John");

console.log(map.keys()); // [Map Iterator] { 'name' }

let keys = Array.from(map.keys());
// Необходимо использовать Array.prototype.push()
// Array.from из итерируемого объекта создает массив
keys.push("more");

console.log(keys);