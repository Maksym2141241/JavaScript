"use strict"


console.log('-------1---------');
function isNumberInRange(number) {
    console.log(number > 0 && number < 10);
}

isNumberInRange(2);



console.log('-------2---------');
function isEven(even) {
    console.log(even % 2 == 0);
}

isEven(3);


console.log('-------3---------');
var value = +prompt('value', '');
switch (value) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}


console.log('-------4---------');
function min(a, b) {
    if (a < b) {
        console.log(a);
        return a;
    } else {
        console.log(b);
        return b;
    }
}

min(32, 18);