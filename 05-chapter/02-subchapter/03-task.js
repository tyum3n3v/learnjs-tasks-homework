/**
 * 
 * @returns null if closed prompt like: cancalation or empty input, else number
 */
function readNumber() {
  let number;
  let flag = false;

  while( !flag ) {
    number = prompt("Введите число");
    if (number === null || number === "") {
      flag = true;
      return null;
    };
    if (isFinite(number)) {
      flag = true;
      return +number;
    }
  }
}

alert(`${readNumber()}`)