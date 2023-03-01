const user = {};
user.name = 'John';
user.surname = 'Smith';
console.log(user); // {name: 'John', surname: 'Smith'}
user.name = 'Pete';
console.log(user); // {name: 'Pete', surname: 'Smith'}
delete user.name;
console.log(user); // {surname: 'Smith'}