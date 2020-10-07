$(function(){

//Evento ON:

//Incluindo dinamicamente o link
	$('.link').html('<a href="">Meu link!</a>');

//Implementando uma ação de click 
	$('a').click(function(){
		alert('Olá mundo!');
	});

//Por ter incluido dinamicamente o link, preciso usar o evento ON para aplicar a ação ,nesse exemplo determinada acima, sobre esse elemento.
	$('body').on('click','a',function(){
		alert('Olá mundo');
		return false; //Impedir que o site atualize e esse elemento suma.
	});




//O evento index, this, keyup, keydown e keypress:

//index - mostra no console do nosso navegador a ordem númerica do elemento no site.
//this - faz smp referência ao elemento, a qual foi 'linkado' no documento JS. Por exemplo, existem várias div com a msm classe mas só aquela que tiver o this atribuido no arquivo JS, sofrerá tal ação.
//keyup() - o evento ocorre quando a tecla retorna à posição original no teclado (i.e. quando você solta a mesma).
//keydown() - o evento ocorre quando a tecla é pressionada.
//keypress() - o evento ocorre quando a tecla está pressionada.

//A diferença entre keydown() e keypress() - o segundo não é capturado quando as teclas Ctrl, Alt ou Shift são pressionadas.


//criando uma função a partir de uma variável:
var func = function(){
	var id = $(this).index();//this fazendo referência a qualquer elemento, para qual esta função for chamada e o index responsável por retornar a ordem númera do msm elemento no console.
		$('input[type=text]').eq(id).css('background','green');//Determinando a ação da nossa função!
	}


$('input[name=input0]').keyup(func);//aplicando o evento determinado pela função chamada, func, quando a tecla VOLTA  a sua posição inicial.

$('input[type=text]').keydown(func);//aplicando o evento determinado pela função chamada, func, quando o tecla É pressionada!

$('input[name=input1]').keypress(func);//aplicando o evento determinado pela função chamada, func, quando o tecla ESTÁ pressionada!




});//função global