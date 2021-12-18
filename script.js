

/** Задание 5
let a = 5;
let b = 3;
const c = sum => {
    let d = b * (a * a);
    console.log(d); 
}
c()

 */






/**Задание 4
let a = prompt('Введите первое число');
let b = prompt('Введите второе число');
function c(from, to){
    let d = from;
    let e = setInterval(function(){
        console.log(d);
        if(d == to){
            clearInterval(e);
        }
    }, 1000)
}
c(a,b)
 */




 /**Задание 3
let a = prompt('Введите первое число');
let b = prompt('Введите второе число');
let g = Number(a);
let h = Number(b);
function sum(first, second){
    let numberSum = first + second;
    console.log(numberSum)
}
sum(g, h)
 */

/** Задание 2
function prmpt(){
let a = prompt('Введите число не больше 1000');
let b = true;
for(let i = 0; i <= a; i++){
    if(a % 2 == 0){
        b = false
        console.log()
    }else if(a % 2 == 1){
        console.log(a)
    }
}
}
prmpt()
 */



/** Задание 1
function numbers(){
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = [];
let b = [];
for(let i = 0; i <= x.length; i++){
    if(i % 2 == 0){
        a.push(i)
    }else if(i % 2 == 1){
        b.push(i);
    }
}
console.log(a.length, b.length);
}
numbers()
 */