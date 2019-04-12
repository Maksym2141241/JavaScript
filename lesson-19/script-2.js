"use strict"

var message = ''; // глобальная переменная


function showMessage(){
    message = 'Привет, Мир!';

    console.log(message);
}

showMessage();



var userName = 'Вася';

function showMessage2(){
    userName = 'Петя';

    var message = 'Привет, я ' + userName;

    console.log(message);

}


showMessage2();

/*
alert(userName);
*/





function showMessage3 (from, text){
    
    from = '**' + from + '**';

    console.log(from +  ':' + text);

}


var from = 'Миша';

showMessage3(from, 'Привет');


console.log(from);




function calculate(num1, num2){

    if(num1 === undefined){
        num1 = 1;
    }

    num2 = num2 || 'текст не передан';




    var a = +num1 * +num2;
    console.log(a);

}


calculate(20, 10);


function calcD(a, b, c){
    if(b>2){
        return b+b-4+a*c;
    }else{
    return b+b+4+a*c;
    }
}


var test = calcD(-4, 2, 1);

console.log(test);


var funcCalc = calcD;

console.log(funcCalc);


calcD = null;


var text2 = funcCalc(-4, 2, 1);
console.log(text2);



var calcD2 = function(a, b, c){ //Функциональное выражение

    if(b>2){
        return;
    }else{
    return b+b+4+a*c;
    }
};
//---------------------------------------------



sayHi('Вася');

function sayHi(name){
    console.log(name);
}
//---------------------------------------------
sayHi('Вася');

var sayHi = function(name){
    console.log(name);
};

//---------------------------------------------


var age = prompt('Сколько Вам лет?');

var sayHi;

if (age >= 18){
    sayHi = function (){
        alert('Заходите')
    };
}else{
    sayHi = function (){
        alert('до 18 нельзя')
};
}
sayHi();


//---------------------------------------------


var age = prompt('Сколько Вам лет?');


if (age >= 18){
    sayHi = sayHi (){
        alert('Заходите')
    }
}else{
     function sayHi(){
        alert('до 18 нельзя')
    }
}
sayHi();