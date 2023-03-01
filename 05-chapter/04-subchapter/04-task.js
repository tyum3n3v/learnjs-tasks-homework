/**
 * input type: Prompt
 * Until something other than a number is entered
 * result: sum of inputs
 */
function sumInput() {
  let result = [];
  let flag = true;

  while (flag) {
    let input = prompt('Введите число', 0);
    if (input === "" || input === null || !isFinite(input)) {
      flag = false;
    } else {
      result.push(+input);
    }
  }

  let output = result.reduce((a, b) => a + b);
  alert(output);
}

sumInput();