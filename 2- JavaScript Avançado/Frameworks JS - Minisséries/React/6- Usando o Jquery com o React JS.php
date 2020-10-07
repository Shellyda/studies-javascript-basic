<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>React (6)</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
<!-- Incluindo os arquivos do Framework - https://pt-br.reactjs.org/docs/getting-started.html  -->
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<!-- O atributo 'crossorigin' serve para evitar problemas de conflito de arquivos! -->
<script src="https://unpkg.com/babel-standalone@6.26.0/babel.min.js"></script><!-- Inicializando o React, convertendo a linguagem do React para que o navegador possa entender. Para isso vc precisa ter o arquivo em PHP e, assim, só consigirá abrir ele em um servidor online ou local, como o Xampp. -->

<!--Estilizando um elemento dentro de um método no arquivo babel -->
<style>
.form input[type=submit]{
	position: absolute; 
	left: 50%; 
	top: 50%; 
	transform: translate(-50%, -50%); 
	color: white; 
	background-color:purple; 
	height: 60px; 
	width: 200px;
	cursor: pointer;
	border: 2px solid pink;

}
</style>
</head>
<body>

<!-- Assim como o Angular funciona com um container principal! -->
	<div id="main"></div>

<!-- Manipulando os elementos com JQ  e React -->
<script src="jquery.js"></script>
<script src="file5.babel" type="text/babel"></script>
</body>
</html>