"use strict"

!function func(){

console.log('Hello');
}();



var car = {
    'name': 'Ford',
    'model': 'Mustang',
    'engine': 2.3,
    'wheels': 4,
    'getSpeed': function(){
        console.log('200 mm/h');
    },
    'setRotateRight': function(deg){
        console.log('Повернуть в право на ' + deg + ' градусов');
    },
    'getMaxSpeed': function(){
        console.log(this.engine*this.wheels * 1000);
    }


};

car.setRotateRight(45);


car.getFuel = function(){
    console.log('80%');
};

car.getFuel();

car.getMaxSpeed();


var user = {
    'name': 'Vasya',
    sayHi: function(){
        console.log(this.name);
    }
}

var admin = user;

user = null;

admin.sayHi();

var user2 = {
    name: 'Vasya',

    sayHi: function(){

        showName(this);
    }
}

function showName(namedObj){

    console.log(namedObj.name);
}

user2.sayHi();


/*function func(name, age){
    alert('Hello' + name + age);
}

//setTimeout(func, 2000);

//setTimeout(func, 2000, 'Vasya', '20 years');


//setTimeout('alert("Hello")');



var i = 0;

var timerId3 = setInterval(function(){
    console.log(i++);
}, 1000)


setTimeout(function(){
    clearInterval(timerId3);
    console.log('STOP');
}, 5000);

*/


var timerId4 = setTimeout(function tick(){
    console.log('Tik');
    timerId4 = setTimeout(tick, 2000);
}, 2000);


