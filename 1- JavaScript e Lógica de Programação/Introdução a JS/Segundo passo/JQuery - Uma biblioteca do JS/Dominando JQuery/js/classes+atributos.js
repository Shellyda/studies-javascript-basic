$(function(){

//Adicionando uma classe ao meu elemento via JS:
$('.box1').addClass('MinhaClasse');



$('.box1').addClass('MinhaClasse2');
//Removendo uma classe do nosso elemento add via JS:
$('.box1').removeClass('MinhaClasse2');




//Achar elementos diretamento dentro de outros:

var find = $('.box').find('.child').find('.child2');

find.css('color', 'green').css('background-color', 'black');



//Manipulando atributos através do JS:
$('minhatag').attr('meuattr','Mudando o valor do meu atributo via JS no segundo paramêtro da função attr!');

console.log($('minhatag').attr('meuattr'));//imprimindo o valor do meu atributo no console.















});//função global