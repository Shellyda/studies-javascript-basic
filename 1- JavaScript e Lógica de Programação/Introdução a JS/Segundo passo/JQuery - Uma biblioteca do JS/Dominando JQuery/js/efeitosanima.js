$(function(){


//fadeOut - uma animação que faz o elemento escolhido sumir da tela 
//tem 2 paramêtros:
//o primeiro pra determinar em quanto tempo, em milisegundos, deve acontecer o efeito
//o segundo para determinar o que vai acontecer dps que o efeito for aplicado.

	$('.box1').fadeOut(2000,function(){
		$('.box2').fadeIn(1000,function(){
			console.log("Terminamos nossa animação!");
		});
	});


//slideToggle - animação de slide 

	$('.box1').click(function(){
		$('.box2').slideToggle(4000,function(){
			location.href="http://www.google.com";//redirecionando o nosso site.
		});
	})
	

});