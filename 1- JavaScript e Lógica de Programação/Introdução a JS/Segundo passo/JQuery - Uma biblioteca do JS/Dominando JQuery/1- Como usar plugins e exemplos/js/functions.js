$(function(){

	//Plugin social media.
	$('#social-share').jsSocials({
    	shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
	});

	//Plugin mask
	
	//podemos escolher qualquer formato para os inputs 
	$('input[name=telefone]').mask('(99)99999-9999');
	$('input[name=data]').mask('99/99/9999');

	//Plugin FancyBox

	$('a').fancybox({
		'openEffect':'none',//efeito do click
		arrows:true//botões do evento de galeria 
	});

});