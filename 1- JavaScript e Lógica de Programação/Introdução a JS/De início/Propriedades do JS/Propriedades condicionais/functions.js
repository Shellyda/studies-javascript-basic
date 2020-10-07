
//Operadores no js

/* 

 === -> Faz uma comparação entre valores, levando em consideração tb o tipo da variável, ou seja elas precisam ser idênticas. (Identidade)
 ==  -> Faz uma comparação entre valores, apenas o valor precisa ser igual.(Igualdade)
 >=  -> maior ou igual.
 <=  -> menor ou igual.
 >
 <
 !=  -> Diferente
 !== -> Faz uma comparação entre valores, levando em consideração tb o tipo da variável, ou seja elas precisam ser completamente diferentes. 

*/

// EXEMPLOS 
window.onload = function(){

//IDENTIDADE 
	var num1, num2;
      
      num1 = '24'; //tipo string

      num2 = 24; //tipo number 

	if(num1 === 24){
      console.log("verdadeiro");
	}else{
		console.log("falso");
	}

//IGUALDADE 
     var a, b;

     a = '30';//tipo string
     b = 30;//tipo number 

    if(a == b){
    	console.log('true');
    }else{
    	console.log('false');
    }

//DIFERENTE 
    var exemplo1, exemplo2;

    exemplo1 = 100;
    exemplo2 = "100";

    if(exemplo1 != exemplo2){
    	console.log('vdd');
    }else{
    	console.log('mentira');
    }

// Totalmente diferente 

  var exemplo1, exemplo2;

    exemplo1 = 100;
    exemplo2 = "100";

    if(exemplo1 !== exemplo2){
    	console.log('vdd');
    }else{
    	console.log('mentira');
    }
}