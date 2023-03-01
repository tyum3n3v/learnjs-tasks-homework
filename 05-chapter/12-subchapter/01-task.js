let user = {
  name: "Василий Иванович",
  age: 35
};

let result = JSON.parse(JSON.stringify(user));

console.log(result); // { name: 'Василий Иванович', age: 35 }