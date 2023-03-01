function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name ); // Каким будет результат?
// this - undefined
// this ссылается на глобальный объект
globalThis.name = "John";
console.log( user.ref.name ); // Каким будет результат? John
