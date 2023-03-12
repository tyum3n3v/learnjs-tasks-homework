promise
  .then(f1)
  .catch(f2);
// Не эквивалентны
promise
  .then(f1, f2);