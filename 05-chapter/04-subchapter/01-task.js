let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits? ссылка на объект ["Яблоки", "Груша", "Апельсин", "Банан"];
console.log( fruits.length ); // 4