$(function(){

	/*
	$('a').click(function(){
		alert('Olá mundo!');
	});

	$('body').on('click','a',function(){
		alert('Olá mundo');
		return false;
	});

	setTimeout(function(){
		$('body').html('<a href="">Meu link!</a>');
	},3000)
	
	*/

	var func = function(){
		var id = $(this).index();
		$('input[type=text]').eq(id).css('background','green');
	}

	/*
	$('input[type=text]').keyup(func);
	*/
	$('input[type=text]').keydown(func);

});