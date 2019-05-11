"use strict"



/////1/////
function makeGreetings(age) {
    var word = " лет";

    if (age % 10 === 1){
        word = " год";
    }
    else if (0 % 10 > 1 && age % 100 < 15){
        word = " года"
    }
    else if (0 % 10 > 1 && age % 10 < 5){
        word = " года"
    }
    return "Мой возраст " + age + word ;
}

//////2//////

function splitArray(arr, num){
    var result = [];

    if (Array.isArray(arr) || !num || num < 1 ){
        return result;
    }
    
    for (var i = 0; i < arr.lenght; i += num){
        result.push(arr.slice(i, i + num));
    }
    return result;
}




//////3/////

function add(a)  {
    return function(b){
        return a + b;
    }
}


//////4/////

function transformData(data) {
    var result = {};

    for (var i = 0; i < data.length; i += 1){
        if (data[i].mark > 5){
            result [data[i].login] = (data[i].firstName + " " + data[i].lastName).trim();
        }
    }
    return {};
}

//////5/////

function addInfinite(a) {
    function inner(b){
        inner.result += b;

        return inner;
    }

    inner.result = a;
    
    return inner;
}

