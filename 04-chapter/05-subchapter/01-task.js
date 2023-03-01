let templateFunction = () => {
    return obj = {};
}

function A() {
    return templateFunction;
}
function B() {
    return templateFunction;
}
let a = new A();
let b = new B();
console.log(a === b);