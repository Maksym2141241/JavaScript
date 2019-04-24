"use strict"


var arr = new Array('');

var arr2 = new Array (100);


var matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];


console.log(matrix[0][2]);


// split-----------------------


var names = 'Masha, Nadya, Marina, Natasha'; //names.split(', ', 2)

var arr = names.split(',');

console.log(arr);

//  join------------------------

var arr3 = ['Masha, Nadya, Marina, Natasha'];

var str = arr3.join(';');


console.log(arr3);


// Удаление из массива-------------------------


var arr4 = ['Masha', 'Nadya', 'Marina', 'Natasha'];

delete arr4[1];

console.log(arr4[1]);

// splice-----------------------

arr4.splice(1, 1);

console.log(arr4[1]);


arr4.splice(1, 2, 'Katya', 'Olya');

console.log(arr4);


var removed = arr4.splice(1, 2);

console.log(removed);


arr4.splice(1, 0, 'Natasha', 'Karina');


console.log(arr4);


arr4.splice(-1, 0, 3, 4);


console.log(arr4);


// slice--------------------------

var arr5 = ['Pochemu', 'nado', 'uchit\'', 'JS'];

var arr6 = arr5.slice(1, 3);

console.log(arr6);


var arr6 = arr5.slice(1);

console.log(arr6);


var arr6 = arr5.slice(-2);

console.log(arr6);


var arr6 = arr5.slice();

console.log(arr6);


// Сортировка в массиве---------

var arr7 = [1, 2, 15];

arr7.sort();

console.log(arr7);


function compareNumeric (a, b){
    if(a > b){return 1;}
    if(a < b){return -1;}
}

arr7.sort(compareNumeric);


//  reverse----------------------

var arr8 = [1, 2, 3];

arr.reverse();

console.log(arr8);


// concat------------
var arr9 = [1, 2];

var newArr = arr9.concat(arr8);

console.log(newArr);


// indexOf / lastindexOf----------------

console.log( arr9.indexOf('1') );


// Object.keys(obj)----------------------

var user = {
    name: 'Petya',
    age: 30
};

var keys = Object.keys(user);

console.log(keys);


// forEach---------


var arr10 = ["Yabloko", "Grusha", "Apelsin"];

arr10.forEach(function(item, i, arr){
    console.log(i + ': ' + item + '(massiv:' + arr + ')');
});

// filter-------------

var arr11 = [1, -1, 2, -2, 3];

var positiveArr = arr11.filter(function(number){
    return number > 0;
});


console.log(positiveArr);

// map--------------------

var names = ['HTML', 'CSS', 'JS'];

var nameLengths = names.map(function(name){
    return name.length;
});


console.log(nameLengths);

// every / some-----------------

var arr12 = [1, -1, 2, -2, 3];

function isPositive(number){
    return number > 0;
}

console.log(arr12.every(isPositive)); // false

console.log(arr12.some(isPositive)); // true


// reduce / reduceRight ----------------

var arr13 = [1, 2, 3, 4, 5];

var result = arr13.reduce(function(sum, current){
    return sum + current;
}, 0);

console.log(result);

/*  1 - sum = 0 current = 1
    2 - sum = 0+1 current = 2
    3 - sum = 0+1+2 current = 3
    4 - sum = 0+1+2+3 current = 4
    5 - sum = 0+1+2+3+4 current = 5

    return = 10 + 5
*/




// "arguments"-------------

function getPhone(name){

    for(var i = 0; i < arguments.length; i++){
            console.log(arguments[i]);
    }
}


getPhone('name', 'address', 'email');


//  



