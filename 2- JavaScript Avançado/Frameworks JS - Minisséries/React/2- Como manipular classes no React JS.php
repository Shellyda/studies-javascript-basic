<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>React (2)</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
<!-- Incluindo os arquivos do Framework - https://pt-br.reactjs.org/docs/getting-started.html  -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<!-- O atributo 'crossorigin' serve para evitar problemas de conflito de arquivos! -->
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script><!-- Inicializando o React, convertendo a linguagem do React para que o navegador possa entender. Para isso vc precisa ter o arquivo em PHP e, assim, só consigirá abrir ele em um servidor online ou local, como o Xampp. -->
</head>
<body>

<!-- Assim como o Angular funciona com um container principal! -->
	<div id="main"></div>

<!-- Dps de ter baixado o Plugin para que o Sublime text 3 entenda os código em React, podemos começar a fazer arquivos do tipo Babel! e importar eles para o documento em PHP. Dessa forma:      -->
<script src="file.babel" type="text/babel"></script>
</body>
</html>