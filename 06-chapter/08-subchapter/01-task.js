function printNumbersInterval(from, to) {
  let output = from;

  const interval = () => {
    console.log(output);

    if (output === to) {
      clearInterval(timer);
    }

    output++;
  }

  interval();

  const timer = setInterval(interval, 1000);
}

// printNumbersInterval(4, 16);


function printNumbersRecursion(from, to) {
  let output = from;

  const interval = () => {
    if (output <= to) {
      console.log(output);
      setTimeout(interval, 1000);
    }

    output++;
  }
  
  interval();
}

printNumbersRecursion(4, 16);