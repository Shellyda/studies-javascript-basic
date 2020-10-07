<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Vue JS (4)</title>
</head>
<body>

<div id="app-4">
	<p>{{msg}}</p>
	<button v-on:click="mostrarAlerta">Mostrar Alerta!</button>
	<button v-on:click="outroMetodo">Trocar o background-color da página!</button>
</div>

<script src="jquery.js"></script>
<!-- Incluindo o arquivo do Framework -  https://vuejs.org/v2/guide/  -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
var app4 = new Vue({
  el: '#app-4',
  data: {
     msg: 'Olá mundo!'
  },
  //Chamando a propriedade que abriga todos os métodos!
   methods:{
   	mostrarAlerta: function(){
   		alert("Olá Mundo novamente :)");
   	},
   	outroMetodo: function(){
   		$('body').css('backgroundColor','pink');
   	}
   }
})

	
</script>

</body>
</html>