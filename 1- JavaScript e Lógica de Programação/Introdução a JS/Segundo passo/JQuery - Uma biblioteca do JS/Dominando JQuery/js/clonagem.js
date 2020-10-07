$(function(){

//Fazendo um clone do meu elemento:
var clone = $('.box').clone();

//pegando esse clone e movendo para dentro de outro elemento:
$('.container').html(clone);


//levando o meu elemento original para dentro de outro:
$('.box').appendTo('.container');










});//função global