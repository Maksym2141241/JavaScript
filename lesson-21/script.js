"use strict"


var str="NnDFdnfkdjj";
console.log( str.charAt(0) ); // N
console.log( str.charAt(str.length-1) ); // j


console.log( str[0] ); // N


console.log( str[3].toLowerCase() );


console.log( str[4].toUpperCase() );


console.log( str.indexOf('n', 2) );


console.log( str.lastIndexOf('n', str.length) );

var target = 'n';
var pos = 0;
while(true){
    var foundPos = str.indexOf(target, pos);
    if(foundPos == -1) break;


    console.log(foundPos);
    pos = foundPos +1;
}


console.log( str.substring(0, 5) );

console.log( str.substr(2, 6) );

console.log( str.slice(2, 6) );

console.log( 'testme'.substring(-2) );

console.log( 'testme'.slice(-2) );


var str3 = '';

for(var i = 1034; i <= 1113; i++){
    str3 += String.fromCharCode(i);
}

console.log(str3);

console.log( 'Apple'.charCodeAt(0) );





var obj = {};

obj.name = 'Andrew';
obj.age = 24;


console.log(obj.name + ' ' + obj.age);

delete obj.age;

console.log(obj.age);

var obj2 = {
    'name': 'Andrew',
    'age' : '25'
};

if('name' in obj2){
    console.log('True');
}

console.log(obj2.weight);

if(obj2.weight === undefined){

}


obj2['name'] = 'Vasya';
obj2.name = 'Vasya';


console.log(obj2.name);


var key = 'name';

obj2[key] = 'Kolya';

console.log(obj2.name);

obj2['lastname'] = 'Petrov';

console.log(obj2.lastname);

var obj3 = {
    'name' : '',
    'phone' : '',
    'items' : {
        1 : {
            'name product' : 'sushi',
            'price' : '100 uah',
        },
        2 : {
            'name product' : 'huyshi',
            'price' : '200 uah',
        }
      
    },
    'time delivery' : '10:00'
}

console.log(obj3['items']['2']['price']);



var counter = 0;
for(var key in obj3){
    console.log( 'Key:' + key + ':' + obj3[key]);
    counter++;
}

var codes = {
    '7' : 'Russia',
    '38' : 'Ukraine',
    '1' : 'USA'
}; // 1 7 38 

var codes = {
    '+7' : 'Russia',
    '+38' : 'Ukraine',
    '+1' : 'USA'
}; // +7 +38 +1


var clone = {};
for (var key in codes){
    clone[key] = codes[key];
}



var arr = [];
var arr = ['Apple', 'Pineapple', 'Orange'];

console.log( arr[1]);

arr[1] = 'Lime';
arr[3] = 'Bananas';

console.log(arr.length);

console.log(arr);


var arr2 = [3, 'Vasya', {name: 'Kolya'}, true];

console.log(arr2);

arr2[1000] = 'Hello';


arr.pop(); // удалится последний элемент

arr.push('Mandarin'); // Добавит в конец элемент
arr[arr.length] = 'Mandarin'; // Добавит в конец элемент

arr.shift('Apple'); // Убирает элемент  с начала
arr.unshift('Mandarin'); // Добавит в начало элемент .unshift('Mandarin', 'Apple', 'Pineapple')

arr.age = 25; // Так делать нельзя






 


