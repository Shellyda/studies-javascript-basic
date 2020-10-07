$(function(){

	/*
	var timer;
	$(window).scroll(function(){
		//Evento de quando o scroll ocorre.
	})

	$(window).resize(function(){
		//Evento de quando redimensionamos a tela.
		//console.log("Minha tela está sendo redimensionada!");
		clearTimeout(timer);
		timer = setTimeout(function(){
			location.href = "http://localhost/Curso%20WebMaster/JQuery/";
		},1000);

	})
	
	$('a').click(function(e){
		//e.preventDefault();
	})

	*/

	$('body').click(function(){
		$('.box').css('opacity','0.1');
	})

	$('.box').click(function(e){
		e.stopPropagation();
	})



	
	
});