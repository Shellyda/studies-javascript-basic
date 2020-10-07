<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Vue JS (2)</title>
</head>
<body>

<!-- https://vuejs.org/v2/guide/#Conditionals-and-Loops -->

<!-- Para passarmos valores em HTML com o Vue JS  é preciso colocar o atributo 'v-html="NOMEDAVARIAVEL"' -->
<div id="app-2" v-html="outra_variavel">
   {{outra_variavel}}
</div>

<!-- propriedade if -->
 <div id="app-2">
  <span v-if="seen"><h1>Se vc consegue ver esse elemento quer dizer que a condição é verdadeira!</h1></span>
</div>

<!-- Incluindo o arquivo do Framework -  https://vuejs.org/v2/guide/  -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
	var app3 = new Vue({
  el: '#app-2',
  data: {
    seen: true,
    outra_variavel: '<h2>Elemento adicionado com a tag HTML "h2" dinamicamente!</h2>'
  }
})

	
</script>

</body>
</html>