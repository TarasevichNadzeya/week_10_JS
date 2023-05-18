//задание 1//
function sayHi() {
    console.log('Я учу JavaScript!')
}
sayHi()

//задание 2//
function cheerUp() {
    document.getElementById("img").src = "./imgs/IMG_6887.JPG";
}
let btn_prev = document.getElementById("btn_prev");
btn_prev.addEventListener("click", cheerUp);

function click() {
    document.getElementById("img").src = "./imgs/IMG_0942.JPG";
}
let btn_next = document.getElementById("btn_next");
btn_next.addEventListener("click", click);


//задание *//
// Шаг 1: Если год делится на 4 равномерно, перейдите к шагу 2. В противном случае    перейдите к шагу 5.
// Шаг 2: Если год делится на 100 равномерно, перейдите к шагу 3. В противном случае   перейдите к шагу 4.
// Шаг 3: Если год делится на 400 равномерно, перейдите к шагу 4. В противном случае перейдите к шагу 5.
// Шаг 4: Год является високосным (366 дней).
// Шаг 5: Год не високосный (у него 365 дней).

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return `${year} это високосный год`;
            } else {
                return `${year} это  не високосный год`;
            }
        } else {
            return `${year} это високосный год`;
        }
    } else {
        return `${year} это  не високосный год`;
    }
}
console.log(isLeap(2000));
