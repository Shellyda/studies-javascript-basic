//Listinha de compras dinâmica!
var app = angular.module("myShoppingList", []);//Dando início a aplicação

//O controlador abaixo adiciona um array denominado products ao $scope atual.
app.controller("controlador", function($scope) {
//No HTML, usamos a diretiva ng-repeat para exibir uma lista usando os itens do array. Criamos um loop!
 
  $scope.products = ["Milk", "Bread", "Cheese"];
  
  //Adicionando itens a lista - função chamada addItem, usa o valor do campo de entrada addMe para adicionar um item à matriz de produtos.
  $scope.addItem = function () {
    $scope.errortext = "";
    if (!$scope.addMe) {return;}//Objeto que pega o valor escrito pelo usuário
    if ($scope.products.indexOf($scope.addMe) == -1) {
      $scope.products.push($scope.addMe);//Push função própria do JS que add elementos no documento HTML
    } else {
      $scope.errortext = "Esse item já se encontra no seu carrinho de compras.";//Msg de erro
/*
O aplicativo apresenta alguns erros, como se você tentar adicionar o mesmo item duas vezes, o aplicativo trava. Além disso, não deve ser permitido adicionar itens vazios.

Vamos consertar isso verificando o valor antes de adicionar novos itens.

No HTML, adicionaremos um contêiner para mensagens de erro e escreveremos uma mensagem de erro quando alguém tentar adicionar um item existente.

*/ 
    }
  }

//Removendo os itens da lista - Essa função pega o índice do item que você deseja remover, como parâmetro.
  $scope.removeItem = function (x) {
    $scope.errortext = "";
    $scope.products.splice(x, 1);
  }

});