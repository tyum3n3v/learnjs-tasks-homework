const ADMIN_USERNAME = "Админ";
const ADMIN_PASSWORD = "Я главный";
const ADMIN_GREETING = "Здравствуйте";

const CANCELED = "Отменено";
const WRONG_PASSWORD = "Неверный пароль";
const UNKNOWN_USER = "Я вас не знаю";

let currentUserName = prompt("Ваш логин?", "");
let notification = new String();

if(currentUserName === ADMIN_USERNAME) {
    let password = prompt("Ваш пароль?");
    notification = (password === ADMIN_PASSWORD) ? ADMIN_GREETING : 
        (password === "" || password === null) ? CANCELED : WRONG_PASSWORD;
} else if(currentUserName === "" || currentUserName === null) {
    notification = CANCELED;
} else {
    notification = UNKNOWN_USER;
}
alert(notification);