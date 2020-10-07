<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Vue JS (1)</title>
</head>
<body>

<!-- Como os últimos 2 frameworks introduzidos até então, esse tb precisa de um elemento principal! -->
<div id="app">
   <h2>{{msg}}</h2>
   <h3>{{outro_obj}}</h3>
</div>

<!-- Lembrando que incluir arquivos de maneira local é bem melhor pq garante maior rápidez no carregamento desses no site. Mas pra função de teste estaremos incluindo de maneira externa! -->

<!-- Incluindo o arquivo do Framework -  https://vuejs.org/v2/guide/  -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
	var app = new Vue({
		el: '#app', //Elemento pai
		//Criando objetos
		data: {
			msg: 'Olá mundo com o Vue JS!',
			outro_obj: 'Objeto criado e incluído dinamicamente através do Vue JS'
		}
	})
	
</script>

</body>
</html>