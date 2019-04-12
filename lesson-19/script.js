"use strict"


var x = 1;
switch(x){
    case 1: 
        console.log('Верно');
        break;
    case 2:
        console.log('Неверно');
        break;
    case 3:
        console.log('Неверно');
        break;
    default:
        console.log('Поумолчанию');
        break;
}


var y = 'Собака';
switch(y){
    case 'Кот': 
        console.log('Неверно');
        break;
    case 'Хомяк':
        console.log('Неверно');
        break;
    case 'Собака':
        console.log('Верно');
        break;
    default:
        console.log('Поумолчанию');
        break;
}


var month = 1;
switch(month){
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
}


var a = 1;
var b = 0;



switch (a){
    case b + 1:
        console.log(b + 1);
        break;
    default:
        console.log('Other');
}



