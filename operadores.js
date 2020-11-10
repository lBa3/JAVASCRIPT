//operadores y tipos de datos

'use strict'

//operadores matematicos (+, -, *, /)
var num1 = 7;
var num2 = 12;

var operacion = num1+num2;
console.log("La suma de "+num1+" y "+num2+" es = "+operacion);
var operacion = num1-num2;
console.log("La resta de "+num1+" y "+num2+" es = "+operacion);
var operacion = num1*num2;
console.log("La multiplacacion de "+num1+" y "+num2+" es = "+operacion);
var operacion = num1%num2;
console.log("La divicion de "+num1+" y "+num2+" es = "+operacion);

//tipos de datos

var numero = 12;
var string = "HOLA la cadena de texto";
var booleano = false;

//funciones
var numcadena = "4"; // es una cadena NO un INT
var numintero = 4;
console.log (numcadena + numintero);
   // portal para parsear el string a int function Number(var string)
   var numcadena = Number (numcadena);
   var numcadena = parseInt (numcadena);
   var numcadena = parseFloat (numcadena);
console.log (numcadena + numintero);


