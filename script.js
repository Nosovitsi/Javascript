//let age = prompt("Сколько тебе лет?");
//alert("тебе " + age + " лет");

//let a = confirm("How are you?");
//alert(a);

//let a = prompt("Назови свое имя", "Например, Вася");
//let age = prompt("Сколько тебе лет?", 50);
//alert(`${a} тебе ${age} лет `);

//"use strict";

let num1 = prompt("Введите первое число", 0);
let num2 = prompt("Введите второе число", 0);
let action = prompt("Выберите действие", "Например + - * /");
if (action == "+") {
    alert(Number(num1) + Number(num2));
} else if (action == "-") {
    alert(Number(num1) - Number(num2));
} else if (action == "*") {
    alert(Number(num1) * Number(num2));
} else if (action == "/") {
    alert(Number(num1) / Number(num2));
} else {
    alert("Вы не выбрали действие");
}