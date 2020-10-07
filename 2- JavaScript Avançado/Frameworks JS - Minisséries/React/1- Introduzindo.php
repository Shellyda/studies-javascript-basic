<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>React (1)</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
<!-- Lembrando que incluir arquivos de maneira local é bem melhor pq garante maior rápidez no carregamento desses no site. Mas pra função de teste estaremos incluindo de maneira externa! -->
<!-- Incluindo os arquivos do Framework - https://pt-br.reactjs.org/docs/getting-started.html  -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<!-- O atributo 'crossorigin' serve para evitar problemas de conflito de arquivos! -->
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script><!-- Inicializando o React, convertendo a linguagem do React para que o navegador possa entender. Para isso vc precisa ter o arquivo em PHP e, assim, só consigirá abrir ele em um servidor online ou local, como o Xampp. 

https://babeljs.io/en/setup/
-->
</head>
<body>
	<!-- Assim como o Angular funciona com um container principal! -->
	<div id="main"></div>
	<!-- Fazendo o Babel traduzir a linguagem do React, perceba que nem o seu editor de texto, o sublime, consegue entender o que o código abaixo significa. -->
    <script type="text/babel">
    	var container = document.getElementById('main');
    	ReactDOM.render(<h1>Olá Mundo!</h1>,container);
    </script>
</body>
</html>

<!-- Para fazer o seu editor de texto entender a linguagem do React vc vai precisar baixar algum plugin para isso. 
     Para entender como fazer isso pelo Sublime text: https://medium.com/@adrianmcli/setting-up-sublime-text-3-for-reactjs-3bf6baceb73a
--> 