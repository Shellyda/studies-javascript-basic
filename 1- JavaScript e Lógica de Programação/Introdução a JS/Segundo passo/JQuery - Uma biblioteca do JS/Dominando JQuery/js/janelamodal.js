$(function(){


//Expressões regulares!

//validando formulários!! (exemplo)
	var frase = 'guilherme@hotmail.com';
    //pegar tudo q tiver antes do @ e dps dele:
	var verifica = frase.match(/^(.*?)(@)(.*?)$/);

	if(verifica != null){
		console.log("Encontramos algo!");
		console.log(verifica[1]); //guilherme
		console.log(verifica[2]);//@
		console.log(verifica[3]);//hotmail.com
	}else{
		console.log("Não encontramos nada");
	}

// variavel.match(/^$/); ^ <- início e $ <- fim
    
//////




//Funções de abrir e fechar formulário

//chamando as funções!
abrirJanela();
verificarCliqueFechar();

	function abrirJanela(){
		$('.button').click(function(e){ 
			 e.stopPropagation();//Determinando que ao clicarmos no botão o display do background continue block.
			$('.background').fadeIn();// show(); 
		});
	}

	function verificarCliqueFechar(){
     //Ao clicarmos na body ou no closeBtn, o display do background voltará a ser none.
		var el = $('body,.closeBtn');

		el.click(function(){
			$('.background').fadeOut();// hide();
		});

     //Definindo para que quando o usuário clicar no formulário ele n feche,já que esse por está dentro do body ,seguindo a determinação acima, tb fecharia caso alguém clicasse. 
		$('.form').click(function(e){
			e.stopPropagation();
		});

	}




//Eventos do formulário
	
//Enviando ele
	$('form#form1').submit(function(e){
		//e.preventDefault();

		//valores que o usuário escrever nos campos:
		var nome = $('input[name=nome]').val();
		var telefone = $('input[name=telefone]').val();
		var email = $('input[name=email]').val();
        
        //Se o valores acima não sigam com as nossas condições de validação
		if(verificarNome(nome) == false){
			aplicarCampoInvalido($('input[name=nome]'));
			return false;
		}else if(verificarTelefone(telefone) == false){
			aplicarCampoInvalido($('input[name=telefone]'));
			return false;
		}else if(verificarEmail(email) == false){
			aplicarCampoInvalido($('input[name=email]'));
			return false;
		}else{
			alert("Formulário enviado com sucesso!");
		}


		//Se chegou até o final é por que está tudo okay!
	})


//Caso os valores não sigam as condições de validação e forem corrigir após o evento de 'Campo inválido!' resetar o campo para que o usuário possa corrigir o erro
	$('input[type=text]').focus(function(){
		resetarCampoInvalido($(this)); //this faz referência ao próprio input 
	})


//Funções para estilizar o campo do formulário

//em caso de erro nos campos
	function aplicarCampoInvalido(el){
			el.css('color','red');		
			el.css('border','2px solid red');
			el.val('Campo Inválido!');
			//el.data('invalido','true');
	}

	function resetarCampoInvalido(el){
			el.css('color','#ccc');		
			el.css('border','1px solid #ccc');
			el.val('');
	}




//Funções para verificar nossos campos

function verificarNome(nome){
        //Contando a quantidade de espaços e os respectivos valores.
		
	//Se o campo estiver vazio retorne a falso.
		if(nome == ''){
			return false;
		}
		
		//amount = quantidade 
		var amount = nome.split(' ').length;
		var splitStr = nome.split(' ');//separando as strings por espaço dado!
		
		//Se a quantidade de espaços for pelomenos 2 continue a verificação
		if(amount >= 2){

		//ter o controle e noção de quantas palavras nosso usuário escreveu
			for(var i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){//definindo que a primeira letra das strings escritas pelo usuário tem que ser todas maiúscula e o resto da palavra minúscula.
					
				}else{
					return false;
				}
			}
		}else{
			return false; //se caso o número de espaços for 1
		}
	}

function verificarTelefone(telefone){
		if(telefone == ''){
			return false;
		}
         
 //formato:(DD)XXXX-XXXX       (DD)       XXXX  - XXXX
		if(telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
			return false;
		}

	}

function verificarEmail(email){
		if(email == '')
			return false
  //definindo o que erá aceito antes e dps do @
		if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
			return false;
		}
	}




});//função global



