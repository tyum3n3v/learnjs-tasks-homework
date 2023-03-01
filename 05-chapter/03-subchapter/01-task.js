let string = "hello";
/**
 * @param {string} string
 * @returns return string with string[0].toUpperCase()
 */
function ucFirst(str) {
    if(!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst(string));