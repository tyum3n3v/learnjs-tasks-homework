function Calculator() {
  this.read = function() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  }

  this.sum = function() {
    return `Сумма слагаемых ${this.a} + ${this.b} = ${this.a + this.b}`;
  }
  this.mul = function() {
    return `Произведение чисел ${this.a} * ${this.b} = ${this.a + this.b}`;
  } 
}

let calculator = new Calculator();
calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );