// Операция "-" преобразует в тип number
let x = "" + 1 + 0; // 10
console.log(`x: ${x} == "" + 1 + 0`)
x = "" - 1 + 0; // -1
console.log(`x: ${x} == "" - 1 + 0`)
x = true + false; // 1
console.log(`x: ${x} == true + false`)
x = 6 / "3"; // 2
console.log(`x: ${x} == 6 / "3"`)
x = "2" * "3"; // 6
console.log(`x: ${x} == "2" * "3"`)
x = 4 + 5 + "px"; // 9px
console.log(`x: ${x} == 4 + 5 + "px"`)
x = "$" + 4 + 5; // $45
console.log(`x: ${x} == "$" + 4 + 5`)
x = "4" - 2; // 2
console.log(`x: ${x} == "4" - 2`)
x = "4px" - 2; // NaN
console.log(`x: ${x} == "4px" - 2`)
x = "  -9  " + 5; // -9  5
console.log(`x: ${x} == "  -9  " + 5`)
x = "  -9  " - 5; // -14
console.log(`x: ${x} == "  -9  " - 5`)
x = null + 1; // 1
console.log(`x: ${x} == null + 1`)
x = undefined + 1; // NaN
console.log(`x: ${x} == undefined + 1`)
x = " \t \n" - 2; // "\t\n" -2
console.log(`x: ${x} == " \t \n" - 2`)