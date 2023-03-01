/**
 * 
 * @param {*} object 
 * @returns {void} numberic keys in the object multiply of 2
 */
function multiplyNumberic(object) {
  for (let key in object) {
    if (typeof object[key] == 'number') {
      object[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumberic(menu);
console.log(menu);