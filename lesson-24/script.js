"use strict"

jQuery('#box').clone().appendTo('.inner');

$('#box').on('click', function(){
    alert('Hello world');
});