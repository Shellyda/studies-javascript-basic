

//Estrutura de uma função no JQ
$(function(){

//Podemos usar todas as propriedades do css e utilizando a msm linha de pensamento para fazer a manutenção do estilo no site.

/*

$('CLASSE E/OU ID DO ELEMENTO').css('QUALQUER PROPRIEDADE DO CSS', 'O VALOR DA PROPRIEDADE');


*/

//Aplicando várias propriedades em um elemento:

$('#exemplo.teste').css('padding','30px').css('border','1px solid black').css('margin','100px auto').css('width','50%');

/* Uma das desvantagens de usar JQ para modificar o css 
   é que não podemos setar, em várias propriedades, a estilização de uma só vez, em uma linha de código.
   Por exemplo, padding: top right bottom left; temos sempre que específicar o que queremos estilizar.

   $('#exemplo.teste').css('padding-top','30px').css);
    $('#exemplo.teste').css('padding-right','30px').css);
     $('#exemplo.teste').css('padding-bottom','30px').css);
      $('#exemplo.teste').css('padding-left','30px').css);

*/


//Podemos setar o que queremos(estilizar) e/ou podemos pegar o valor da propriedade css.

//Setando o valor
$('#exemplo.teste > p').css('color','purple');

//Pegando o valor
console.log($('#exemplo.teste > p').css('color'));//Dessa forma, o console irá retornar o valor da cor em rgb ou rgba. A msm ideia vale para saber o valor do background-color.

})