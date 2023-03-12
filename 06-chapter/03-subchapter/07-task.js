function makeArmy() {
  let shooters = [];

  for (let id = 0; id < 10; id++) {
    let shooter = function() {
      console.log(id);
    }
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 0
army[5](); // у 5-го стрелка будет номер 5