"use strict"
console.log('-------------------LESSON 20-----------------');

var params = 'age, name';
var code = 'console.log(age + " - " + name);';
var sum = new Function(params, code);

sum(25, 'Valera');

console.log(sum);



var x = 2;
var n = 10;
function pow(x , n){
    if (n != 1){
        return x * pow(x, n - 1);
    } else{
        return x;
    }
}

console.log( pow (x, n) );

// 2 * pow (2, 4 - 1); 8 = 16;
// 2 * pow (2, 3 - 1); 4 = 8;
// 2 * pow (2, 2 - 1); 2 = 4;
// 2;


var f = function(name){};

f = function sayHi(name){};


var f = function factorial (n){
    return n ? n * factorial(n - 1) : 1;
}

console.log( f (5) );


var g = f;
f = null;

console.log( g (5) );


console.log('Hello world'.length);

console.log('victor'.toUpperCase());


var n = 200.335;
console.log(n.toFixed(2) );


console.log(isNaN(0/0)); 


console.log(isFinite(123123));


function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n); // Проверка на число
}


var n = 255;
console.log( n.toString(16) );



Math.floor(3.1); // 3
Math.ceil(3.1); // 4
Math.round(3.1); // 3


n = 3.456
console.log(Math.round( n * 100 ) / 100 ); // 3.456 = 345.6. = 346 = 3.46



n = 12.34663;

console.log( +n.toFixed(3) );



var result = 0.112312 + 0.21231222222222;
console.log( +result.toFixed(5) );


alert( 9999999999999999 ) ;


console.log( Math.random() );

function randomThis(a, b){
    return ((b - a)*Math.random() + a).toFixed();
};

console.log(randomThis(0, 100));


/*



\b - backspace
\n - перенос чистой строки
\r - абзац
\t - Tab




*/

console.log('Hello,\tAndrew!');


console.log('/u13e6 ');


var str = 'KJLKHKFHSDLHFHSDKL';
console.log(str.charAt(3));

console.log(str[8]);
