$(function(){

	/*
	var el = $('.box');

	var meutexto = 'Olá mundo!';
	el.html("<div class=\"teste\">"+meutexto+"</div>");
	el.html(el.html() + '<h1 class="texto1">Meu texto via javascript!</h1>');


	$('.box2').text("<div></div>");
	$('.box2').text($('.box2').text() + "Ola mundo!");

	$('input[type=text]').val("Olá mundo!");

	$('textarea').text("Olá mundo");
	*/

	$('input[type=button]').click(function(){
		var str = $('input[type=text]').val();
		//Split separa nossa string com base no delimitador.
		//var var2 = v.split("@");
		//console.log(var2);

		//substr recorta nossa string
		//console.log(str.substr(1,4));

		/*

		var splitstr = str.split("@");

		if(splitstr[1] == 'hotmail.com'){
			$('input[type=text]').css('opacity','0');
		}else{
			console.log("A condição não bateu!");
		}

		*/

		console.log(str);

	})

});