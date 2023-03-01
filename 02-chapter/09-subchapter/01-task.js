let x = 5 > 4; // true
console.log(`x: ${x} ==  5 > 4`);
x = "ананас" > "яблоко"; // false
console.log(`x: ${x} == "ананас" > "яблоко"`);
x = "2" > "12"; // true
console.log(`x: ${x} == "2" > "12"`);
x = undefined == null; // true
console.log(`x: ${x} == undefined == null`);
x = undefined === null; // false
console.log(`x: ${x} == undefined === null`);
x = null == "\n0\n"; // false
console.log(`x: ${x} == null == "\n0\n"`);
x = null === +"\n0\n"; // false
console.log(`x: ${x} == null === +"\n0\n"`);