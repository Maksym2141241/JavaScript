"use strict"
//-------------------------1---------------------------
function fib(n) {
    return n > 1 ? fib(n - 1) + fib(n - 2) : n;
}

console.log(fib(6));




//-------------------------2---------------------------
function delWhile(n) {
    var num = 0;
    while(n>50){
        num++;
        n/=2;
    }
    return num;
}


var num = delWhile(1000);

console.log(num);