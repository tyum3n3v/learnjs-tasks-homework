let calculator = {
  read() {
    this.a = +prompt("Введите первое значение", 0);
    this.b = +prompt("Введите второе значение", 0);
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  }
}

calculator.read();
alert( `Сумма чисел ${calculator.a} и ${calculator.b} = ${calculator.sum()}` );
alert( `Произведение чисел ${calculator.a} и ${calculator.b} = ${calculator.mul()}` );