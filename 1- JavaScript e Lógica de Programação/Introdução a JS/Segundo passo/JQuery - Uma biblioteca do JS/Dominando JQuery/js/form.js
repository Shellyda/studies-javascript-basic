$(function(){

//O evento submit:

	$('.form_contato').submit(function(){
		
		var container = $('.container');
		var content = "Nome: " + $('input[name=nome]').val() +
		'<hr>E-mail: '+ $('input[name=email]').val() +
		'<hr>Telefone:' + $('input[name=telefone]').val();

		container.html(content);//Imprimindo os valores dos inputs, na ordem determinada acima, na div de classe container.
		return false;//impedindo que a página atualize!
	})

});