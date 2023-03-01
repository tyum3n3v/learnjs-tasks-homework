function Accumulator(startingValue = 0) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt("Какое значение Вы хотите прибавить?", 0);
  }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read(); 

alert(accumulator.value);