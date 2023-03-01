function Calculator() {

  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };

  this.calculate = function(string) {
    
    let method = string.split(" "),
    a = +method[0],
    b = +method[2],
    operand = method[1]

    if (!this.methods[operand] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[operand](a, b);
  };
};

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 * 3"); // 6
console.log(result);
result = powerCalc.calculate("string / 3"); // NaN
console.log(result);
result = powerCalc.calculate("2 % 3"); // NaN
console.log(result);