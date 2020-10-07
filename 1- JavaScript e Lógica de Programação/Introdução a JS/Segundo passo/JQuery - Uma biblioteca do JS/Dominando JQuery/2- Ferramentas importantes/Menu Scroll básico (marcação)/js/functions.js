$(function(){

//obs: deixar sempre fora elementos que não variam dos loops criados - otimização do site
	$(window).scroll(function(){
		//ELEMENTOS QUE NÃO MUDAM E NÃO PRECISAM ESTAR DENTRO DO LOOP:
		var windowOffY = $(window).scrollTop();//Posição atual da scroll barra no site 
		var windowHeight = $(window).height();//Altura da janela
		
		//LOOP DE VERIFICAÇÃO SE OS ELEMENTOS ESTÃO NA TELA OU NÃO:
		
		$('.sessao').each(function(){//Função each promove um laço de repetição
			var elOffY = $(this).offset().top;//A distância da scroll barra para o topo da página
		
		//"Se a distância da scroll barra para o topo do site(+ 30px do padding que adicionamos em cada div de classe sessão) for menor que soma das medidas da posição atual da scroll e altura da janela"
			if(elOffY+30 < (windowOffY + windowHeight) && //"e verifique se ao msm tempo..."
				
				elOffY+30+$(this).height() > windowOffY){//"...a distância da scroll barra para o topo + os 30px do padding de cada sessão é maior que a altura(medida) da posição atual da scroll barra"
					
					$('a').css('border-bottom','0');//Aplicando estilo nos links do menu quando a scroll barra passar do primeiro elemento div de classe sessão que, no caso, é a com o atributo com nome de target home
					
					var target = $(this).attr('target');//criando uma variável para pegar os atributos com nome de target - this fazendo referência a todos os elementos menos o primeiro, o qual já tinha sido estilizado no style.css inicialmente
                    
                 //"Quando a próxima sessão do site aparecer na tela aplicar estilo abaixo sobre o elemento correspondente no menu:"

                //Expressão criada para apontar para as classes dos links no menu -> target como variável da função definida acima irá pegar o valor do atributo target 'linkados'(target="VALOR") ao this, então, ele vai pegar o valor do atributo target de todos os elementos menos do primeiro elemento  
					$('.'+target).css('border-bottom','2px solid #333');//Dessa forma, é como se estivessimos escrevendo a classe de um dos elementos (NÃO O PRIMEIRO) do menu
					return;
			}
		});
	})



});