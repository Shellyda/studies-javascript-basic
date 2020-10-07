$(function(){

//Variáveis globais e intuitivas 
	var indiceAtual = 0;//Posição da img no código
	var indiceMaximo = $('.slider img').length;//Descobrir a quantidade de imagens dentro da div de classe slider
	var delay = 5000;//Setar um tempo de espera

//chamando as funções criadas abaixo
 
 initSlider();
 cliqueSlider();

	function initSlider(){
		for(var i = 0; i < indiceMaximo; i++){
		/*<span style="background: #069;"></span>
		<span></span>
		<span></span>
		*/
			if(i == 0){//"Se for o primeiro span no código"
				$('.bullets-nav').append('<span style="background:#069;"></span>');//incluindo dinamicamente o primeiro Span (bolinha)
			}else{
				$('.bullets-nav').append('<span></span>');//incluindo quantas bolinhas forem necessárias, de acordo com o número de imagens
			}
		}
		$('.slider img').eq(0).fadeIn();//fazendo a primeira img na ordem do código aparecer quando o site carregar 
		setInterval(function(){
			alternarSlider();//função para alterar a ordem das imagens
		},delay);//Setando o tempo de espera para as imagens mudarem de ordem
	}

	function cliqueSlider(){
		    $('.bullets-nav span').click(function(){
			$('.slider img').eq(indiceAtual).stop().fadeOut(2000);//stop() -> melhorar a sobre posição das animações
			indiceAtual = $(this).index();//mudando o indiceAtual 
			$('.slider img').eq(indiceAtual).stop().fadeIn(2000);
			$('.bullets-nav span').css('background-color','#ccc');
			$(this).css('background-color','#069');
		});
	}

	function alternarSlider(){
		$('.slider img').eq(indiceAtual).stop().fadeOut(2000);
		indiceAtual+=1;//add + 1 na ordem do código
		if(indiceAtual == indiceMaximo){ 
			indiceAtual = 0;
		}
		$('.bullets-nav span').css('background-color','#ccc');
		$('.bullets-nav span').eq(indiceAtual).css('background-color','#069');
		$('.slider img').eq(indiceAtual).stop().fadeIn(2000);

	}
	
});