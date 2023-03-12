new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log); // Код не выполнится
// throw new Error() - выполняется после всего кода