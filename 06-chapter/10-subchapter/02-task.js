function f() {
  console.log(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
// Сперва привязывается {name: "Петя" }
// Затем перепривязывается {name: "Вася"}
f();