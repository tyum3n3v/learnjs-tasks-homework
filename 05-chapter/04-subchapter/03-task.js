let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // Вызовется функция, которая отобразит текущее
// состояние объекта, в данном случае - это arr;
// [ 'a', 'b', [Function (anonymous)] ]