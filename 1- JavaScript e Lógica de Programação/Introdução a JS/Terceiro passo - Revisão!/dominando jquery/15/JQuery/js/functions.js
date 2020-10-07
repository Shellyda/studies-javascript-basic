$(function(){

	
	$.ajax({
		url:'conteudo.html'
		//'url':'teste.txt',
		//'method':'post',
		//data:{'nome':'guilherme','idade':'23'}

	}).done(function(data){
		$('#container').append(data);
	});

});