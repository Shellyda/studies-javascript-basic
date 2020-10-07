$(function(){

//MANIPULANDO AS POSIÇÕES DENTRO DE UM ELEMENTO:

//Antes de tudo, introduzindo 4 funções novas e suas variações - append, eq, prepend e remove:

//append - add elementos HTML no fim de qualquer elemento que nós específicamos.
//eq - serve para q possamos escolher, caso tiver mais do mesmo elemento no documento HTML, como é o caso do exemplo abaixo, específicar qual deles queremos q o novo elemento apareça/seja incluido!

// 0 - o primeiro elemento
//1 - o segundo
//2 - o terceiro
//.. e por ai vai!

$('.box').eq(0).append('<h3>Esse é meu conteúdo adicionado dinamicamente!</h3>');
/* $('ESPECÍFICAR O ELEMENTO QUE QUEREMOS ATACAR').ep(QUAL DOS ELEMENTOS, CASO TENHA MAIS DO MSM).append('ELEMENTO HTML QUE QUEREMOS ADD NO FIM DO ESPECÍFICADO NO INÍCIO!'); */

//Se quiser aplicar o css enquanto faz a situação acima tb(não da para usar a função eq nesse caso.):
$('<h2>Meu conteúdo novo sendo estilizado e add no fim, simultaneamente!</h2>').appendTo($('.box')).css('color','purple');


//prepend - add elementos HTML no início de qualquer elemento que escolhermos.
$('.box').eq(2).prepend('<h2>Adicionando esse elemento h2 no início da nossa box!');


//MANIPULANDO AS POSIÇOES NO BODY, FORA DE UM ELEMENTO EPECÍFICO DO DOCUMENTO HTML:

var conteudo = '<div><p>Adicionando um elemento APÓS a nossa box!</p><div>';
$('.box').eq(1).after(conteudo); //colocar DPS do elemento escolhido.

var conteudo2 = '<div><p>Adicionando um elemento ANTES a nossa box!</p><div>';
$('.box').eq(0).before(conteudo2);//colocar BEFORE do elemento escolhido.

//Aplicando o css enquanto faz a situação acima(nesse caso não se pode usar o eq):
$(conteudo).insertAfter($('.box')).css('color','blue');
$(conteudo2).insertBefore($('.box')).css('color','green');


//REMOVENDO ELEMENTOS DO NOSSO SITE:

//setTimeout - uma função do js, tem 2 paramêtros um sendo uma função, o que tiver dentro de suas '{}' acontecerá no tempo determinado em milisegundos no segundo paramêtro. 
setTimeout(function(){

$('.box').eq(2).remove();//removendo o elemento escolhido.

},3000);// 3000ms = 3seg.







});//função global 

