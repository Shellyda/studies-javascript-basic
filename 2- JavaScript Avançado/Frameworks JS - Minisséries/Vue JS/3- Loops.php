<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Vue JS (3)</title>
</head>
<body>

<!-- https://vuejs.org/v2/guide/#Conditionals-and-Loops -->

<!-- construindo um loop -->
<div id="app-3">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>


<!-- Incluindo o arquivo do Framework -  https://vuejs.org/v2/guide/  -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
var app3 = new Vue({
  el: '#app-3',
  data: {
    todos: [
      { text: 'Aprender JavaScript' },
      { text: 'Aprender Vue' },
      { text: 'Construir algo legal' }
    ]
  }
})
</script>

</body>
</html>