'use strict'


function sumar (n1, n2, imprime, duplicar){
	var sum = n1+n2;
	imprime (sum);
	duplicar(sum);
	return sum;
}


sumar (2, 2, dato =>{
    console.log ("la suma es = " + dato);
},dato2 =>{
      console.log ("el dupluo es = ", (dato2 * 2) );
   });