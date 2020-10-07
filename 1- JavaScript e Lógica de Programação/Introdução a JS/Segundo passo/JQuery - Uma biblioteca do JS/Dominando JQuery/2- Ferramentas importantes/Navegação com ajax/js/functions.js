$(function(){

//Estudando a documentação do ajax e algumas propriedades 		
	verificarCliqueMenu();

	function verificarCliqueMenu(){
		$('a').click(function(){
			var href = $(this).attr('href');
			$.ajax({
				'beforeSend': function(){
					console.log("Estamos chamando o beforesend!");
				},
				'timeout': 10000, //determinando tempo máximo de loading da pág! (propriedade utilizada para servidores externos!)
				'url':href,
				'error':function(jqXHR,textStatus,errorThrown){
					if(jqXHR.statusText == 'Not Found'){
						console.log("Página não encontrada.");
					}
				},
				'success':function(data){
					//$('#container').html(data); //$('CLASSE E/OU ID DO ELEMENTO').html(data); -> a documentação html por trás do elemento, mostrar suas marcações e elementos html
					$('container').html('');
					$(data).appendTo('#container').fadeIn(); //fazendo um efeito de carregamento -> é necessário q os elementos tenham o display como none!
				}
			});
			return false;
		});
	}



});