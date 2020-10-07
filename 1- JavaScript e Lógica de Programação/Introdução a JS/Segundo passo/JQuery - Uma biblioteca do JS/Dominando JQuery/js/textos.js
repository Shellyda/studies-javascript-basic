$(function(){

//função própria do JQ - função html - modificar/criar/imprimir elementos no documento htmls


//Usando JQ é uma boa prática definir variáveis para evitar que o elemento seja repetido várias vezes, em projetos grandes onde vc precisa modificar, usar esse elemento mtas vezes pode se tornar um problema.
	var el = $('.box');
	var meutexto = 'Olá mundo!';

//Escrevendo e colocando um elemento div com classe "teste" dentro da box 
	el.html("<div class=\"teste\">"+meutexto+"</div>");//concatenando!
	el.html(el.html() + '<h1 class="texto1">Meu texto via javascript!</h1>');




//Função text tb é uma função própria do JQ - não le elementos do html, apenas textos!

	$('.box2').text("<div></div>");
	$('.box2').text($('.box2').text() + " <-- imprimindo não como um elemento div, mas como um texto. ");
    $('textarea').text("Escrevendo dentro do textarea com a função TEXT");

//A função val serve para escrevermos dentro de elementos de tipo input!
$('input[type=text].val').val("Escrevendo dentro do input com a função VAL"); 





//Essas próximas funções são comumente utilizadas para validar as respostas em fomulários!

//Quando acontecer o evento de click queremos que os dados sejam validados!
	$('input[type=button]').click(function(){
 
 //Pegando o que o usuário irá escrever no input[type=text]
		var submit = $('input[type=text].splitsrc').val(); // O QUE O USUÁRIO ESCREVER

		
/* Split - separa nossa string com base no delimitador.

       var variavel = objeto.split("DELIMITADOR"); 

*/
		var var2 = submit.split("@"); // PEGAR O QUE O USUÁRIO ESCREVEU E APLICAR A FUNÇÃO SLIP DIVIDINDO A STRING EM ARRAYS!
		console.log(var2); // IMPRIMIR A STRING SEPARADA
           



/*substr ("substring") - recorta nossa string
   
 var variavel = objeto.substr(DE ONDE DEVO COMEÇAR O CORTE, QUANTAS LETRAS DPS DO COMEÇO VC QUER QUE SEJA IMPRIMIDO);

*/
	 console.log(submit.substr(1,4));  

		var splitSUB = submit.split("@");

		if(splitSUB[1] == 'hotmail.com'){
			$('input[type=text].splitsrc').css('opacity','0');
		}else{
			console.log("A condição não bateu!");
		}

		console.log(submit);

});












});//função global 