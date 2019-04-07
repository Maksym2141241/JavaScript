"use strict"


console.log('Б' > 'А');

console.log('2' > 1);

console.log( 0 == false);

console.log('' == false);

console.log(0  === false);

console.log( 0 !== false);

console.log( null == undefined );

console.log( null == 0);

console.log( null > 0); //false

console.log( null >= 0); //true

console.log( null <= 0); //true

alert('Hello');

var result = prompt('Введите привет');

console.log(result);

result = confirm('Сейчас 2019??');

console.log(result);

var year = prompt('какой сейчас год?');

if(year != 2019) {
    alert('Не верно');
}

if(year = 2019){
    alert('YES');

}else{
    alert('NO');
}

if(year < 2019){

}else if(year > 2019){

}else{
    console.log('Верно');
}



var age = 101;

var access = (age > 14) ? 'yes' : 'no';



var message = (age < 3) ? 'Привет, малыш' :
(age < 18) ? 'Привет':
(age < 100) ? 'Привет, старый':
'Какой большой возраст';
console.log(message);


console.log(true || true);
console.log(true || false);
console.log(false || false);

if(age < 3 || age > 100){

}

if(age < 3 || age > 100 || age > 80 || age < 45){

}else{

}



var x;
true || (x = 1);
console.log(x);


var x;
false || (x = 1);
console.log(x);


console.log(true && true);
console.log(true && false);
console.log(false && false);

var hours = 12,
    minute = 30;

    if(hours == 12 && minute == 30 ){
        console.log('Время 12:30');
    }


console.log(1 && 5 && 15);

var value = true;
var result = !value;

console.log(result);

if(!value){

}

console.log( !! 'Hello');

console.log( !! null);



var number1 = '10';
Number(number1);


number1 = +number1;


console.log(+' \n 123 \n   \n   ');


console.log( +true);

console.log( '\n' == false);

console.log( '1' == true);



//------------------------------------------//


var i = 0;
while( i < 3){
    console.log(i);
    i++;
}


var i = 3;
while(i) {
    console.log(i);
    i--;
}


var i = 0;
do {
    console.log(i);
    i++

} while( i < 3);

console.log('________________');


for(var i = 0; i < 3; i ++){
    console.log(i);
}



var sum = 0;
while (true){
    var value = +prompt('Введите значение', '');

    if (!value) {break;}

    sum += value;

}

console.log('Сумма:' + sum);

console.log('________________');

for(var i = 0; i < 10; i++){    
    if (i % 2 == 0){
        continue
    }
    console.log(i);
}



console.log('________________');






