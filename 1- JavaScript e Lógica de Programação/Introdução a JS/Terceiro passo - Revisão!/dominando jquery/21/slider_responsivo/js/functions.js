$(function(){

	var indiceAtual = 0;
	var indiceMaximo = $('.slider img').length;
	var delay = 5000;

	initSlider();
	cliqueSlider();

	function initSlider(){
		for(var i = 0; i < indiceMaximo; i++){
		/*<span style="background: #069;"></span>
		<span></span>
		<span></span>
		*/
			if(i == 0){
				$('.bullets-nav').append('<span style="background:#069;"></span>');
			}else{
				$('.bullets-nav').append('<span></span>');
			}
		}
		$('.slider img').eq(0).fadeIn();
		setInterval(function(){
			alternarSlider();
		},delay);
	}

	function cliqueSlider(){
		$('.bullets-nav span').click(function(){
			$('.slider img').eq(indiceAtual).stop().fadeOut(2000);
			indiceAtual = $(this).index();
			$('.slider img').eq(indiceAtual).stop().fadeIn(2000);
			$('.bullets-nav span').css('background-color','#ccc');
			$(this).css('background-color','#069');
		});
	}

	function alternarSlider(){
		$('.slider img').eq(indiceAtual).stop().fadeOut(2000);
		indiceAtual+=1;
		if(indiceAtual == indiceMaximo)
			indiceAtual = 0;
		$('.bullets-nav span').css('background-color','#ccc');
		$('.bullets-nav span').eq(indiceAtual).css('background-color','#069');
		$('.slider img').eq(indiceAtual).stop().fadeIn(2000);

	}
	
});