let template = function checkParameters(age) {
    if(!(age >= 14 && age <= 90)) {
        console.log(`${age}: Is NOT in the range between 14 & 90`)
    };
    if(age < 14 || age > 90) {
        console.log(`${age}: Is NOT in the range between 14 & 90`)
    };

    return age;
}
console.log(template(8));