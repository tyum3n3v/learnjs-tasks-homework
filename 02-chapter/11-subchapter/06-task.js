let template = function checkParameters(age) {
    if(age >= 14 && age <= 90) {
        console.log(`${age} between 14 & 90`)
    };
    return age;
}
console.log(template(8));

