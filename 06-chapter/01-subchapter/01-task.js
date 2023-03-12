function sumToCycle(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }

  return result;
}
console.log(sumToCycle(100));

function sumToRecursion(n) {
  if (n == 1) {
    return n;
  } else {
    return n + sumToRecursion(n - 1);
  }
}
console.log(sumToRecursion(100)); //sumToRecursion(1+e5) RangeError: Maximum call stack size exceeded

function sumToOrder(n) {
  return n * (n + 1) / 2;
}
console.log(sumToOrder(100)); // Быстрее
