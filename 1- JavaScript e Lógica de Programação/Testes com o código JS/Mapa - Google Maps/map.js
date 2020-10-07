//Configurando o google maps no site - é necessário adiquirir a chave para o projeto e ativar o faturamento na plataforma da Google CLoud


window.onload = function(){

//Determinando a estrutura do mapa 
var map;

function iniciar(){

//As propriedades da estrutura do nosso mapa 
	var mapProp = {
// new serve para criarmos um novo objeto, fazemos uma função se comportar como um objeto, esse novo objeto abaixo está dentro do arquivo que estamos importando do google
		center: new google.maps.LatLng(-8.11389, -35.2915),//latitude , longitude
		scrollWheel: false,
		zoom: 12,//o tanto de zoom que mapa vai ter no site 
		mapTypeId: 'roadmap' //tipo do mapa - pode ser feito dessa maneira tb: google.maps.MapTypeId.ROADMAP <-- mudando essa terminação, podemos mudar o estilo do mapa no site. 
	}

//configurando a variável 'map' como novo objeto para chamar o mapa no id que queremos e específicando que deve ser usado as propriedades que definimos acima.
	map = new google.maps.Map(document.getElementById("mapa"), mapProp);


}/* fim da função iniciar */

//chamando a função da estrutura do mapa 
iniciar();



//Configurando o marcador e a box de informações no mapa 

//latitude, longitude, icone do marcador(imagem), conteúdo(a box e o que está escrito dentro dela), Define se o evento do click vai ou não ser aplicado no projeto, facilitando a manutenção.
	function addMarker(lat,long,icon,content,click){
		
		var LatLng = {'lat':lat,'lng':long};//coordenadas de latitute e longitude, já determinadas pelo novo objeto LatLng definido no código das propriedades da estrutura do mapa.
     
      // o marcador
		var marker = new google.maps.Marker(
		
		{
			position:LatLng,//posição definida pelo novo objeto LatLng definido acima.
			map:map,//a estrutura do mapa
			icon:icon
		}

		);
     
     //box de informação
		var infoWindow = new google.maps.InfoWindow(
		
		{
			content:content,//o que será escrito dentro da box
			maxWidth:200,//máxima largura da box
			pixelOffset: new google.maps.Size(0,20)//tamanho da box
		}

		);
        
 //caso o paramêtro de click for true faça o evento abaixo acontecer. 
 if(click == true){
     
     //definindo um evento de click, quando o usuário clicar no icone do marcador no mapa a box de informações irá abrir 
        google.maps.event.addListener(marker,'click',function(){
          
     //fazendo o código retornar a estrutura do mapa que fizemos antes usando a variável 'map' e utilizar as propriedades definidas acima. 
		infoWindow.open(map,marker);
        
        });

}else { //caso o paramêtro for definido não for definido como true, deixe a box já aberta assim que a página carregar.
	    infoWindow.open(map,marker);
}

}/* fim da função addMarker */


//chamando o marcador e a box de informação para o mapa 
var conteudo ='<p style="color:black; padding: 10px 5px; font-size: 16px;">A descrição da minha box!</p>';//dentro do paramêtro 'content' podemos usar qualquer código em html e/ou css.
addMarker(-8.11389, -35.2915,'',conteudo,true);//podemos replicar quantas vezes for preciso essa função, adionando quantos icones de marcadores quisermos no mapa com diferentes coordenadas e propriedades(se caso mudar os paramêtros).


//

//setTimeout uma função do js, tem 2 paramêtros um sendo uma função, o que tiver dentro de suas '{}' acontecerá no tempo determinado em milisegundos no segundo paramêtro. 
setTimeout(function(){

map.panTo({'lat': -23.550520, 'lng': -46.633309});//código para definir a localização do mapa
map.setZoom(8);//código para definir o zoom do mapa


}, 4000); // 4000ms = 4seg.













}


