/**
 * 
 * @param {string} str for checking for spam
 * @returns {boolean}; true - if str includes spam, false - if string not includes spam 
 */
function checkSpam(str) {
  let forbiddenWords = ['viagra', 'xxx']
  let checkString = str.toLowerCase();
  let flag = false;

  for (let i = 0; i < forbiddenWords.length; i++) {
    let forbiddenWord = forbiddenWords[i];
    if (checkString.includes(forbiddenWord)) {
      flag = true;
    }
  }
  return flag;
}
console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );