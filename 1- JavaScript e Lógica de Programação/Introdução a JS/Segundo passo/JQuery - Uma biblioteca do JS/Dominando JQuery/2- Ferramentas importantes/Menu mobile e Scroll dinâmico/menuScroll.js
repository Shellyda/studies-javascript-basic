$(function(){

menuScroll();

function menuScroll{
('.servicos-descricao a').click(function(){
var href = $(this).attr('href');//valor do atributo href do link
var offSetTop = $(href).offSet().top;//o valor da posição desse elemento em relação ao topo


$('html,body').animate({
	'scrollTop':offSetTop
});

return false;//como é link é necessário sair dessa função para impedir q a tela atualize
});

}


});


//pojeto 3 e 4 e 5(home e venda-single)