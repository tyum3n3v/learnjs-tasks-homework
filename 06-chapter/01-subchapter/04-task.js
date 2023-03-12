let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printListCycle(list) {
  let currentDeep = list;

  while (currentDeep) {
    console.log(currentDeep.value);
    currentDeep = currentDeep.next;
  }
}
printListCycle(list);


function printListRecursion(list) {
  console.log(list.value);

  if (list.next) {
    printListRecursion(list.next);
  }
}
printListRecursion(list);