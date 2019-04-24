"use strict"


var now = new Date();

console.log(now);


var jan02_1970 = new Date(3600 * 24 * 1000);

console.log(jan02_1970);


var date1 = new Date(2011, 0, 1, 0, 0, 0, 0);

console.log(date1);


var fullDate = new Date();

var fullDate = fullDate.getFullYear();

console.log(fullDate);


// getMonth() - 0 - 11
// getDate() - 1 do 31
// getHours() \ getMinutes \ getSeconds()  \  getMilliseconds()


// getDay() - // 19


// getDate() - от 0 до 6 День недели
// 0 - Восскресенье - 6 Суббота



var date2 = new Date();
console.log( date2.getHours() );
console.log( date2.getUTCHours() );

console.log( date2.getTime() );

console.log( date2.getTimezoneOffset() );


// Установка компонентов даты
date2.setFullYear(2000) // year, month, date

console.log( date2.getFullYear() );


/*

setMonth(month, date);
setDate(date);
setHours(hours, min, sec, ms);
setMinutes(min, sec, ms);
setSeconds(sec, ms);
setMilliseconds(ms);
setTime(milliseconds);

Все варианты имеют аналогичные функции с приставкой UTC после set

*/


var date3 = new Date(2023, 0, 32);

console.log(date3);

date3.setDate(date3.getDate() + 3);

console.log( date3 );

date1.setDate(1); // 1 число месяца

date3.setDate(0); // последнее число предыдущего месяца

console.log( +new Date );


console.log(+new Date - date3);



var option = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'

};

console.log( date3.toLocaleString('ru-US', option ) )


// YYYY-MM-DDTHH:mm:ss.sssZ
// 2012-01-26T13:51:50.435Z
// 2012-01-26T13:51:50.435+03:00

var date4 = Date.now();
console.log(date4);



var a = 5;
console.log( window.a );

function func(name){
    var arr = name;

}
func('Vasya');

console.log( window.func);

var phrase = 'Hello';

function sayHi(name){
    console.log(phrase+ ', ' + name);
}

sayHi('Vasya');

phrase = 'Bye';

sayHi('Vasya');


function sayHiBye(firstName, lastName){
    console.log('Hello ' + getFullName());
    console.log('Bye ' + getFullName());

   function  getFullName(){
       return firstName + ' ' + lastName;
   }
}

sayHiBye('Vasya', 'Petrov');





function makeCounter(){
    var currentCount = 1;


return function(){
    return currentCount++;
    }
}

var counter = makeCounter(); // (+)



console.log( counter() );
console.log( counter() );
console.log( counter() );








