let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
/**
 * 
 * @param {Object} salaries 
 * @returns {String} one of the keys with the highest value
 */
function topSalary(salaries) {
  let expensiveEmployee = null;
  let maxSalary = 0;

  for (let [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      expensiveEmployee = name;
    }
  }
  return expensiveEmployee;

}

console.log(topSalary(salaries));