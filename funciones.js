//funciones

'use strict'


function saludo (nombre){
	return "Hola " + nombre;
}

var nombre = "Rogelio"
console.log( saludo(nombre) );

/*-----------------------------------------------*/

function calculadora (opt, x, y){
   if (opt == "suma"){
   	var res = x + y;
   }
   document.write ("<h1>el resultado de la operacion "+opt+ " es = " +res + "</h1>");
   console.log (res);
}

var num1 = 2;
var num2 = 2;
var opt  = "suma";
calculadora (opt, num1, num2);

/*-----------------------------------------------*/

