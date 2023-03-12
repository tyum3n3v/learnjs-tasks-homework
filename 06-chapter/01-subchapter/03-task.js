function fib(n) {
  let SQRT_5 = Math.sqrt(5);

  let firstArg = Math.pow(((1+SQRT_5)/2), n);
  let secondArg = Math.pow(((1-SQRT_5)/2), n);
  let result = Math.round((firstArg - secondArg)/SQRT_5);
  
  return result;
}

function fibRecusrion(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibRecusrion(n - 1) + fibRecusrion(n - 2);
  }
}
  
console.log(fibRecusrion(13)); // 233
console.log(fib(45)); // 1134903170 https://ru.wikipedia.org/wiki/Числа_Фибоначчи#Формула_Бине