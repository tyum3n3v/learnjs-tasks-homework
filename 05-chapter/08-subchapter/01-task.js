let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();
for (let message of messages) {
  readMessages.add(message)
}

console.log(readMessages.has(messages[2])); // true
// Коллекция содержит 3-ий элемент
messages.pop(); // Удаляем 3-ий элемент
console.log(readMessages.has(messages[2])); // false
// Объект удалён из коллекции
