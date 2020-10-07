
$(function(){


	var timer;//variável global

	$(window).scroll(function(){
		//Evento de quando o scroll ocorre.
	})

	$(window).resize(function(){
		//Evento de quando redimensionamos a tela.
		console.log("Minha tela está sendo redimensionada!");

        //Atualizar a página após o redimensionamento do site.
		clearTimeout(timer);
		timer = setTimeout(function(){
			location.href = "http://localhost/Curso%20WebMaster/JQuery/";//endereço da minha página!
		},1000);

	})
	
//Evento que define que nd acontecerá ao clicar no elemento
	$('a').click(function(e){
	   e.preventDefault();
	})



	$('body').click(function(){
		$('.box').css('opacity','0.1');
	})
 
 //interrompando o fluxo 
	$('.box').click(function(e){
		e.stopPropagation();
	})



	
	
});