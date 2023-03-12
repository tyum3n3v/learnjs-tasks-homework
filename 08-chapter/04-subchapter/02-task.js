function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi(); // Вызов объекта rabbit, в котором this.name = Rabbit
Rabbit.prototype.sayHi(); // вызов прототипа, там не задано свойство this.name
Object.getPrototypeOf(rabbit).sayHi(); // аналогично
rabbit.__proto__.sayHi(); // аналогично