$(function(){

	/*

	var timer;
	var timeOut = function(){
		$('.box2').animate({
		'width':'40%',
		'height':'500px',
		'marginLeft':'100px',
		'paddingTop':'200px'
		},2000);
	}

	$('body').click(function(){
		alert("Animação com timeout foi cancelada!");
		clearTimeout(timer);
	})

	
	$('.box1').animate({
		'width':'40%',
		'height':'500px',
		'marginLeft':'100px',
		'paddingTop':'200px'
	},2000,function(){
		timer = setTimeout(timeOut,3000);
	});

	*/

	var timer;

	$('body').click(function(){
		console.log("Intervalo cancelado");
		clearInterval(timer);
	})

	timer = setInterval(function(){
		alert('olá mundo');
	},3000);
	

});