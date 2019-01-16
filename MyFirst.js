'use strict';
/*console.log(leftBorderWidt);
var leftBorderWidth = 1;
var number = 5;
var string = "Hello";
var sym = Simbol();
var boolean = true;
null;
undefined;
var obj = {};

{
    let second = 2;
}
const pi = 3.1415926;*/
let person = {
    name: "John",
    adge: 20,
    isMarried: false
};
console.log(person.name);
console.log(person["name"]);
let arr = ['plum.png', 'orange.jpeg', 'apple.bmp'];

console.log(arr[2]);

alert("Hello");

let answer = confirm("A you here?");
console.log(answer);

answer = prompt("Есть ли Вам 18?", "Да");

console.log(typeof (arr));

console.log(4 + " - object");

answer = +prompt("Есть ли Вам 18?", "Да");
console.log(typeof (answer));

let incr = 10,
    decr = 10;

incr++;
decr--;
console.log(incr);
console.log(decr);

console.log(++incr);
console.log(--decr);

console.log(incr++);
console.log(decr--);

console.log(5 % 2);

console.log("2" == 2);

console.log("2" === 2);

let isChecked = true,
    isClose = false;

console.log(isChecked && isClose);
console.log(isChecked || isClose);
console.log(isChecked || !isClose);