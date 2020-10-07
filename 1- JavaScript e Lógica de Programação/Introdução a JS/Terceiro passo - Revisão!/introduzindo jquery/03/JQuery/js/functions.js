$(function(){

	function validarCliqueHover(){
		$('.artigo1').click(function(){
			$('.artigo2').css('background-color','purple');
		});

		$('.artigo1').hover(function(){
			$('.artigo2').css('background-color','red');
		},function(){
			$('.artigo2').css('background-color',' rgb(100,100,100)');
		})
	}

	function validarFormulario(){

		$('textarea').focus(function(){
			//Executa alguma função quando existe foco no elemento.
			console.log("Foco!");
		}).blur(function(){
			//Executa uma função quando retiramos o foco.
			console.log("Retiramos o foco!");
		})

		$('select').change(function(){
			console.log("Meu select foi alterado!");
		})
	}

	validarFormulario();
	validarCliqueHover();


	
	
});