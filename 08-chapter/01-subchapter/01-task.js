let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

console.log( rabbit.jumps ); // true from rabbit

delete rabbit.jumps;

console.log( rabbit.jumps ); // null from animal

delete animal.jumps;

console.log( rabbit.jumps ); // undefined from Object