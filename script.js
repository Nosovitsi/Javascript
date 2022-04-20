"use strict";
// let age = prompt("Сколько тебе лет?");
// alert("тебе " + age + " лет");

// let a = confirm("How are you?");
// alert(a);

// let a = prompt("Назови свое имя", "Например, Вася");
// let age = prompt("Сколько тебе лет?", 50);
// alert(a + " тебе " + age + " лет ");

//"use strict";

// let num1 = prompt("Введите первое число", 0);
// let num2 = prompt("Введите второе число", 0);
// let action = prompt("Выберите действие", "Например + - * /");
// if (action == "+") {
//     alert(Number(num1) + Number(num2));
// } else if (action == "-") {
//     alert(Number(num1) - Number(num2));
// } else if (action == "*") {
//     alert(Number(num1) * Number(num2));
// } else if (action == "/") {
//     alert(Number(num1) / Number(num2));
// } else {
//     alert("Вы не выбрали действие");
// }

// let a = prompt("Назови свое имя", "Например, Вася");
// let age = prompt("Сколько тебе лет?", 50);
// alert(`${a} тебе ${age} лет `);

// let a = prompt("введите первое число", 0);
// let b = prompt("введите второе число", 0);
// alert(`${a} - ${b}`);

// let a = Number(prompt("введите первое число", 0));
// let b = Number(prompt("введите второе число", 0));
// alert(`${a + b}`);

// let a = prompt("введите первое число", 0);
// let b = prompt("введите второе число", 0);
// alert(`${Number(a + b)}`);

// let a = prompt("введите первое число", 0);
// let b = Number(prompt("введите второе число", 0));
// let y = Number(a + b);
// alert(y + b + a);

// let a = prompt("введите первое число", 0);
// let b = prompt("введите второе число", 0);
// let y = prompt(`${a + b}`);
// alert(y + a);

// let a = prompt("введите первое число", 0);
// let b = prompt("введите второе число", 0);
// let y = prompt(`${"Придумай новое число"}`);
// alert(y + a);

// let a = Number(prompt("введите первое число", 0));
// let b = Number(prompt("введите второе число", 0));
// alert(`${a-b}`);

// let a = prompt("введите первое число", 0);
// let b = prompt("введите второе число", 0);
// alert(`${Number(a)-Number(b)}`);


// let login = prompt("Введите свой логин");
// let password = prompt("Введите свой пароль");
// if ((login === "gleb") && (password === "123")) { // || - означают ИЛИ;   && - означает И;
//     alert("Вход выполнен!")
// } else { alert("Проверьте введенные данные") }

// МАССИВ //

// let cars = ["Мазда", "Тойота", "Ниссан", "Лексус", "БМВ"];
// let car = cars[3];
// alert(car + " " + cars[2]);

// let cars = ["Мазда", "Тойота", "Ниссан", "Лексус", "БМВ"];
// let car = cars[3];
// alert(cars[3] + ", " + cars[1] + ", " + cars[4] + ", " + cars[0] + ", " + cars[2]);

// let cars = ["Мазда", "Тойота", "Ниссан", "Лексус", "БМВ"];
// let car = cars[3];
// let sortedCars = [];
// let костян = "молодец";
// alert(cars[3] + ", " + cars[1] + ", " + cars[4] + ", " + cars[0] + ", " + cars[2]);
// alert(костян);

// let cars = ["Мазда", "Тойота", "Ниссан", "Лексус", "БМВ"];
// let car = cars[3];
// let sortedCars = [];
// let cars0 = cars[0];
// let cars1 = cars[1];
// let cars2 = cars[2];
// let cars3 = cars[3];
// let cars4 = cars[4];
// sortedCars = [cars4, cars1, cars[2], cars3, cars0, " Мерседес"];
// for (let q = 6; q > 0; q--) {
//     alert(q);
//     // alert(sortedCars[q]);
// };

// let cars = ["Мазда", "Тойота", "Ниссан", "Лексус", "БМВ"];
// let car = cars[3];
// let sortedCars = [];
// let cars0 = cars[0];
// let cars1 = cars[1];
// let cars2 = cars[2];
// let cars3 = cars[3];
// let cars4 = cars[4];
// sortedCars = [cars4, cars1, cars[2], cars3, cars0, " Мерседес"];
// for (let q = 4; q < 10; q--) {
//     alert(q);
// }

let a = "тойота";
let b = "ниссан";
let c = "мерседес";
let d = "порше";
alert("назовите самую быструю машину")
alert("a) тойота" + "б) ниссан")
let answer = prompt("введите свой ответ");
if (answer == "d") { alert("вы правы") } else { alert("вы проиграли") }