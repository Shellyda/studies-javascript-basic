//Introduzindo eventos e usando pseudo-classes no JQ.

$(function(){

//estilizando o elemento teste
$('.teste').css('padding','50px').css('border', '1px solid purple');


function clickehover(){

//Evento de click
$('.botao').click(function(){

$('.teste').css('background-color','pink');//ao clicar no botão o usuário muda a cor de fundo do elemento.

});

//Evento hover
$('.teste').hover(function(){

$('.teste').css('border','3px solid black');


}, function(){ //Ação que irá acontecer dps que o evento de cima.
    $('.teste').css('border','1px solid purple');
});

}

function focuseblur(){

//Evento focus 
$('.box').focus(function(){
	$('.box').css('background-color', '#ccc');
	console.log('Testando o evento focus.');
});

//Evento blur - evento que acontece dps que saimos do evento focus.
$('.box').blur(function(){
   $('.box').css('background-color', 'rgb(150,150,150)');
	console.log('Estou fora do evento focus.');
});


//Podemos excutar as 2 propriedades assim:

$('.text').focus(function(){
	$('.text').css('background-color', 'blue');
	console.log('Testando o evento focus na text area.');
}).blur(function(){
    $('.text').css('background-color', 'gray');
    console.log('retiramos o focus!')
});

}


function validarformulario(){

//Evento Change
$('select').change(function(){
	console.log("Meu select foi alterado!");
});


}

//chamando as funções acima
clickehover();
focuseblur();
validarformulario(); 

});




