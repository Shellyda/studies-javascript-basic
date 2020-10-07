//Como criar um plugin básico:

/*Às vezes, você deseja disponibilizar uma parte da funcionalidade em todo o seu código. 
Por exemplo, talvez você queira um único método para chamar uma seleção jQuery que 
execute uma série de operações na seleção. Nesse caso, você pode escrever um plugin.
Antes de escrevermos nossos próprios plugins, nós devemos antes entender um pouco                    
sobre como o jQuery trabalha. De uma olhada nesse código:                                   */

$("a").css( "color", "red" );

/*Este é um código jQuery bastante básico, mas você sabe o que está acontecendo nos 
bastidores? Sempre que você usa a função $ para selecionar elementos, ela retorna um 
objeto jQuery. Este objeto contém todos os métodos que você está usando (.css (), 
.click () etc.) e todos os elementos que se ajustam ao seu seletor $.

$('elemento').METODOS(); 

O objeto jQuery obtém esses métodos do objeto $.fn . Esse objeto contém todos os 
métodos de objeto jQuery e, se quisermos escrever nossos próprios métodos, também será 
necessário contê-los.

//Criando um plugin básico:

Digamos que queremos criar um plugin que torne o texto dentro de um conjunto de 
elementos recuperados verde. Tudo o que precisamos fazer é adicionar uma função 
chamada greenify a $.fn e ela estará disponível como qualquer outro método de objeto 
jQuery.                                                                                    */

$.fn.greenify = function() {
    this.css( "color", "green" );
};
 
$( "a" ).greenify(); //Faz todos o links verdes.

/*Note que ao usar .css(), outro método, nós usamos this, não $( this ). Isso é porque a 
nossa função greenify é uma parte do msm objeto que .css() tb.

Encadeamento(chaining):

Isso funciona, mas há algumas coisas que precisamos fazer para que nosso plugin 
sobreviva no mundo real. Um dos recursos do jQuery é o encadeamento, quando você 
vincula cinco ou seis ações em um seletor. Isso é feito com todos os métodos de objeto 
jQuery retornando o objeto jQuery original novamente (existem algumas exceções: .width 
() chamado sem parâmetros retorna a largura do elemento selecionado e não pode ser 
encadeado). Tornar o nosso método de plugins encadeável exige uma linha de código:           */  

$.fn.greenify = function() {
    this.css( "color", "green" );
    return this;//Fazer a função retornar ao elemento selecionado.
}
 
$( ".a1" ).greenify().addClass( "greenified" );


//Protegendo o alias $ e adicionando escopo:
/*
A variável $ é muito popular entre as bibliotecas JavaScript e, se você estiver usando 
outra biblioteca com o jQuery, precisará fazer com que o jQuery não use o $ com 
jQuery.noConflict (). No entanto, isso quebrará nosso plugin, pois ele é escrito com a 
suposição de que $ é um alias para a função jQuery. Para funcionar bem com outros 
plugins e ainda usar o alias jQuery $, precisamos colocar todo o nosso código dentro 
de uma 'Expressão de Função Imediatamente Invocada' e, em seguida, passar a função 

jQuery e nomear o parâmetro $:                                                            */

(function ( $ ) {
 
    $.fn.greenify = function() {
        this.css( "color", "green" );
        return this;
    };
 
}( jQuery ));

/*
Além disso, o principal objetivo de uma função chamada imediatamente é permitir que 
tenhamos nossas próprias variáveis ​​privadas. Finja que queremos uma cor verde 
diferente e queremos armazená-la em uma variável.                                        */ 

(function ( $ ) {
 
    var shade = "#556b2f";
 
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };
 
}( jQuery ));

/*
É uma boa prática ao escrever plugins para ocupar apenas um slot em $.fn. Isso reduz a 
chance do seu plugin ser substituído e a chance do seu plugin substituir outros 
plugins. Em outras palavras, isso é ruim:                                                */

(function( $ ) {
 
    $.fn.openPopup = function() {
        // Open popup code.
    };
 
    $.fn.closePopup = function() {
        // Close popup code.
    };
 
}( jQuery ));
/*
Isso seria muito melhor ter um slot e usar parâmetros para controlar a ação que um 
slot executa:                                                                          */

(function( $ ) {
 
    $.fn.popup = function( action ) {
 
        if ( action === "open") {
            // Abrir popup code.
        }
 
        if ( action === "close" ) {
            // fechar popup code.
        }
 
    };
 
}( jQuery ));

//Usando o método each ()
/*Seu objeto jQuery típico conterá referências a qualquer número de elementos DOM, e é 
por isso que os objetos jQuery costumam ser chamados de coleções. Se você deseja 
manipular elementos específicos (por exemplo, obter um atributo de dados, calcular 
posições específicas), use .each () para percorrer os elementos.                           */

$.fn.NovoPlugin = function() {
 
    return this.each(function() {
        // Faça algo com o elemento each aqui.
    });
 
};
/*
Observe que retornamos os resultados de .each () em vez de retornar isso. Como .each 
() já é encadeado, ele retorna isso, que então retornamos. Essa é uma maneira melhor 
de manter a capacidade de cadeia do que o que estamos fazendo até agora.                  */



//Opções de aceitação:
/*
À medida que seus plugins se tornam cada vez mais complexos, é uma boa ideia tornar 
seu plugin personalizável, aceitando as opções. A maneira mais fácil de fazer isso, 
especialmente se houver muitas opções, é com um objeto literal. Vamos mudar nosso 
plugin greenify para aceitar algumas opções.                                               */

(function ( $ ) {
 
    $.fn.greenify = function( options ) {
 
        // Esse é o jeito mais fácil para ter opções padrões!
        var settings = $.extend({
            // Esses são as configurações padrões!
            color: "#556b2f",
            backgroundColor: "white",
            width: "100%"
        }, options );
 
        // Greenify a coleção com base na variável de configurações
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor,
            width: settings.width
        });
 
    };
 
}( jQuery ));

//Examplo do que o usuário pode configurar:

$( "div" ).greenify({
    color: "orange",
    backgroundColor: "pink",
    width: "50%"
});

//O valor padrão da cor # 556b2f é substituído por $.extend () para laranja, A cor de fundo se tornará rosa e sua lagura será definida
//como 50%.




//Organizando as informações:
/*Aqui está um exemplo de um pequeno plugin usando algumas das técnicas que discutimos:                */
(function( $ ) {
 
    $.fn.showLinkLocation = function() {
 
        this.filter( "a" ).each(function() {
            var link = $( this );
            link.append( " (" + link.attr( "href" ) + ")" );
        });
 
        return this;
 
    };
 
}( jQuery ));
 
// Exemplo:
$( "a" ).showLinkLocation();

/*
Esse prático plugin passa por todas as âncoras da coleção e acrescenta o atributo href 
entre parênteses.                                                                                     

<!-- Antes do plugin ser chamado: -->
<a href="page.html">Foo</a>
 
<!-- Depois do plugin ser chamado: -->
<a href="page.html">Foo (page.html)</a>
*/

//O nosso seu plugin pode ser otimizado:
(function( $ ) {
 
    $.fn.showLinkLocation = function() {
 
        this.filter( "a" ).append(function() {
            return " (" + this.href + ")";
        });
 
        return this;
 
    };
 
}( jQuery ));

//Estamos usando o recurso do método .append () para aceitar um retorno de chamada, e o valor de retorno desse retorno de chamada determinará o que é acrescentado a cada elemento da coleção. Observe também que não estamos usando o método .attr () para recuperar o atributo href, porque a API DOM nativa nos dá acesso fácil com a propriedade href apropriadamente denominada.


//FONTE: https://learn.jquery.com/plugins/basic-plugin-creation/#basic-plugin-authoring