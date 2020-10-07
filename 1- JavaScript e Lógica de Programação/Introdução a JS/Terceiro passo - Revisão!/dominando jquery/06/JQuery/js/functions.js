$(function(){

	//Pegamos a largua do nosso elemento.
	$('.box').width();

	//Setamos a largura.
	$('.box').css('width','900px');
	$('.box').css('height','700px');
	// Width/height = Dimensão calculada total com base no padding.
	// innerWidth/innerHeight = Dimensão calculada total INCLUINDO o padding.
	// outerWidth/outerHeight = Dimensão calculada total INCLUINDO o padding e margin(se o parametro
	// for true).

	console.log("Width: "+$('.box').width());
	console.log("Inner Width: "+$('.box').innerWidth());
	console.log("Outer Width: "+$('.box').outerWidth(true));
	

	console.log("Height: "+$('.box').height());
	console.log("Inner Height: "+$('.box').innerHeight());
	console.log("Outer Height: "+$('.box').outerHeight(true));

});