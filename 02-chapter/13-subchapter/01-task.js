let i = 3;

while(i) {
  console.log(i--);
} // 3, 2, 1
// Когда i == 0, 0 == false, while(false), 
// условие проверяется до выполнения тела цикла.
// Поэтому тело цикла не может быть выполнено при false в условии