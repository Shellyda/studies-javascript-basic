//Funções de carregamento usando JQuery 

//no JS anteriomente usamos a função essencial window.onload = function(){}


//Agr com a inclusão da biblioteca JQ podemos usar essas:


//Com essa função fica determinado que quando a página terminar de carregar o evento definido entre os parêntese irá acontecer 
$(document).ready(function(){
	alert("Meu primeiro código usando a biblioteca de JS, JQuery!");
})

//Com essa função abaixo é definido que o evento dentro dos parênteses só vai acontecer quando TODOS os componentes do site, imagens, textos, vídeos..., carregarem. 
$(window).on('load', function(){
    console.log("Olá mundo!");
})

//Estrutura de uma função usando JQ:
$(function(){
	alert("Olá mundo!");
})


