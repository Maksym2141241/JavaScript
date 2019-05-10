"use strict"


var list = new Array(10).fill().map((a, b, arr) => ({ self: list }) );

list.forEach(el => el.self = list);

console.log(list);   


var list = new Array(1000)
.fill()
.map(function () {
    return { self: list};
});

list.forEach(function (element){
    element.self = list;
});

/////////////////////// list = list2///////////////////
var list2 = [];

for (var i = 0; i < 1000; i+= 1){
    list.push({ self: list2 });
}

