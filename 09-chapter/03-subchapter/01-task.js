class Rabbit extends Object {
  constructor(name) { 
    super(); // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log( rabbit.hasOwnProperty('name') ); 
