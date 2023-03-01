function pow(x, n) {
    let result = x;
  
    for (let expCounter = 1; expCounter < n; expCounter++) {
      result *= x;
    }
    return result;
}
    
let x = prompt("Какое число Вы хотите возвести в степень: x?", "");
let n = prompt("В какую степень Вы хотите возвевести число x: n?", "");

if(n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert(pow(x, n));
}