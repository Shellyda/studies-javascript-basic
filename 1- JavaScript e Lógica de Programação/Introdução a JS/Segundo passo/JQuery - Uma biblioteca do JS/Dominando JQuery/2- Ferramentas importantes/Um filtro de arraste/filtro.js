$(function(){

//Variáveis globais e intuitivas:
        var currentValue = 0;
        var isDrag = false;
        var preco_maximo = 70000;
        var preco_atual = 0;

//OBS:
/* Os nossos navegadores não compreendem o arraste do mouse, não conseguem diferenciar o
arraste do mouse sendo selecionado sobre algum texto, por isso, precisamos fazer alguns ajustes para
evitar que os 2 eventos não sejam confundidos, assim, abrindo a possibilidade de um bug
ocorrer no nosso site! */
         
//No JQ não temos funções para o arraste do mouse, justamente pq nossos navegadores não o reconhecem!
//Então, estou usando abaixo 2 funções para o mouse quando é selecionado sobre um texto e 1 para guardarmos a posição do nosso mouse. 
//mousedown(selecionado), mouseup(não selecionado), mousemove(se movendo).

        $('.pointer-barra').mousedown(function(){//"Se o mouse estiver selecionado é true"
        	isDrag = true; 
        });

        $(document).mouseup(function(){//"Se o mouse NÃO estiver selecionado é false"
        	isDrag = false;
        	
                //Evitando o bug!
                enableTextSelection();//Permitir que o mouse volte a ter sua função de seleção sobre textos.
        });                           //Quando o usuário deixar de arrastar o mouse no filtro.

        $('.barra-preco').mousemove(function(e){ // o 'e' como paramêtro de uma função permite que nós temos acesso a todas as propriedades dentro dessa determinada função.
        	
                if(isDrag == true){ //"Se o mouse estiver selecionado faça isso:"
                
                //Evitando o bug!
        	disableTextSelection();//Não permitir que o usuário possa selecionar textos com o mouse enquanto arrasta ele sobre o filtro.
        		

                  /*PREENCHIMENTO DO FILTRO */

                //Falando da div '.barra-preco-fill' seria o preenchimento do nosso filtro:

                        var elBase = $(this);//A base, A estrutura é a div '.barra-preco'
        	    
                    //O quanto o mouse pode se mover na horizontal sobre o filtro (DEFININDO A MEDIDA DA ESTRUTURA):
                        var mouseX = e.pageX - elBase.offset().left;//O valor da medida total da posição da div '.barra-preco', que seria a estrutura do nosso filtro, na horizontal em relação ao comprimento total da página. 
                    
        		
                        if(mouseX < 0){//"Se a posição do preenchimento do filtro ficar < 0 não quero que ultrapasse a medida da estrutura do filtro. faça isso:"
        			mouseX = 0; //Setando a posição do nosso preenchimento(div '.barra-preco-fill') para 0, ou seja, início da nossa estrutura(div '.barra-preco').
                        }

        		if(mouseX > elBase.width()){//"Se a largura do nosso preenchimento for > que a da nossa base não quero que ultrapasse ela. faça isso:"
        			mouseX = elBase.width();//Setando a largura para smp ser a msm da base caso vier, ameaçar a passar do tamanho horizontal da estrutura do filtro.
                        }
                   
                   /***/

                   /* BOLINHA DO FILTRO */

                   //Sobre o pointer - o elemento por onde nosso usuário poderar arrastar e fazer a pesquisa no filtro.
        	     
                     //Posição inicial da bolinha - ela fica 13pxs afastada da estrutura da base a esquerda, dando a impressão de passar um pouco na msm.
                        $('.pointer-barra').css('left',(mouseX-13)+'px');//Setando o valor da propriedade left da bolinha, para criar o efeito de que ela passa um pouco da estrutura do filtro, como a diferença entre o resultado relação vista acima (comprimento pág - posição base) e 13pxs(que seria o valor para centralizar esse elemento bolinha, já que suas dimensões são 26x26 pxs)
                     
                     //O valor do quanto poderemos arrastar a barrinha completa(preenchimento e bolinha) ,em porcentagem, sobre o filtro:
        		currentValue = (mouseX / elBase.width()) * 100;// [(cmp pág - posição base) / (largura da base)]*100 = currentValue --> valor que podemos assumir sobre o filtro! (valor por conta da multiplição por 100 assumi forma de porcentagem)

        		$('.barra-preco-fill').css('width',currentValue+'%');//Esse valor agr será setado como largura do preenchimento do filtro. 
                       /***/
                   
        
         /* O QUE VAI SER IMPRESSO NA PÁGINA */

        	preco_atual = (currentValue/100) * preco_maximo;//por exemplo -> preco_atual = (50/100)*70000 = 35000(A METADE!), dessa forma que funciona essa expressão!
            preco_atual = formatarPreco(preco_atual);
            $('.preco_pesquisa').html('R$'+preco_atual);//O que vai ser impresso, de fato, na página!
        	}
        });

        // Ajustar o formato do preço!
           function formatarPreco(preco_atual){
            preco_atual = preco_atual.toFixed(2);//Definindo q o máximo de números pós o ponto '.' só podem ser 2.
            preco_arr = preco_atual.split('.');//preco_arr -> um array que separa o preço atual pelo '.' no número formado.

            var novo_preco = formatarTotal(preco_arr);

            return novo_preco;

        }

        function formatarTotal(preco_arr){
         //antes do ponto preco_arr[0] / dps do ponto preco_arr[1]
            if(preco_arr[0] < 1000){
                return preco_arr[0]+','+preco_arr[1];
            }else if(preco_arr[0] < 10000){// preco_arr[0][0] -> um array dentro do array --- por exemplo: var a = '[]'; a = 104; a[0][0] = 1; a[0][1] = 0;  a[0][2] = 4;
                return preco_arr[0][0]+'.'+preco_arr[0].substr(1,preco_arr[0].length)+
                ','+preco_arr[1];
            }else{
                return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2,preco_arr[0].length)+
                ','+preco_arr[1];
            }
        
        }


                /***/

        //Para evitar o bug de reconhecimento dos nossos navegadores vamos criar 2 funções
        //Uma que vai desabilitar a função de selecionar textos 
        //E outra que vai habilitar novamente essa função!
        
        //Desabilitar - usada quando o mouse estiver sendo arrastado sobre o filtro!
        function disableTextSelection(){
	          $("body").css("-webkit-user-select","none");
	          $("body").css("-moz-user-select","none");
	          $("body").css("-ms-user-select","none");
	          $("body").css("-o-user-select","none");
	          $("body").css("user-select","none");
        }
        
        //Habilitar - usada quando o mouse NÃO estiver sendo arrastado sobre o filtro!
        function enableTextSelection(){
	          $("body").css("-webkit-user-select","auto");
	          $("body").css("-moz-user-select","auto");
	          $("body").css("-ms-user-select","auto");
	          $("body").css("-o-user-select","auto");
	          $("body").css("user-select","auto");
        }

});