function User(name) {
  this.name = name;
}

let user = new User('Admin');
let anotherUser = new user.constructor('User');

console.log(user.name);
console.log(anotherUser.name);


function Team(label) {
  this.label = label;
}

Team.prototype = {};

let whiteTeam = new Team('white');
let blackTeam = new whiteTeam.constructor('black');

console.log(whiteTeam.label);
console.log(blackTeam.label);