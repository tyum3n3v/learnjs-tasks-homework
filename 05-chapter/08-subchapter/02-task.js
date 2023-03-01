let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

// В WeakMap - ключи должны быть объектами

let readMap = new WeakMap();

for (let message of messages) {
  readMap.set(message, new Date());
}