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

function printReverseListCycle(list) {
  let result = [];
  let currentDeep = list;

  while (currentDeep) {
    result.push(currentDeep.value)
    currentDeep = currentDeep.next;
  }

  for (let i = result.length - 1; i >= 0; i--) {
    console.log(result[i]);
  }
}
printReverseListCycle(list); // result = [ 1, 2, 3, 4 ]

function printReverseListRecursion(list) {
  if (list.next) {
    printReverseListRecursion(list.next);
  }

  console.log(list.value);
}
printReverseListRecursion(list);