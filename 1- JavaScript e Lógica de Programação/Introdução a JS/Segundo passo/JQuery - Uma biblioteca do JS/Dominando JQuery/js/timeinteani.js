$(function(){

//criando uma variável global:
	var timer;

//função animate:
 $('.box1').animate({
		'width':'40%',
		'height':'500px',
		'marginLeft':'100px',
		'paddingTop':'200px'
	},2000,function(){
		timer = setTimeout(timeOut,3000);//Usando a variável criada abaixo e determinando que ela acontecerá em 3 seg.
	});

//fazendo a variável timeOut como uma função para que a box2 sofra o msm efeito que a box1 sofreu:
  var timeOut = function(){
		$('.box2').animate({
		'width':'40%',
		'height':'500px',
		'marginLeft':'100px',
		'paddingTop':'200px'
		},2000);
	}

//cancelando a animação da box2:
	$('body').click(function(){
		alert("Animação com timeout foi cancelada!");
		clearTimeout(timer);
	});











//Gerando outra variável global:
var timer2;

//função setInterval
	interval = setInterval(function(){
		alert('olá mundo');
	},3000);//A cada 3 seg irá aparecer um alerta na tela!
	
//cancelando o setInterval:  
	$('body').click(function(){
		console.log("Intervalo cancelado");
		clearInterval(timer2);
	});




});