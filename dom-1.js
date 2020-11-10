'use strict'

var caja = document.getElementById ("caja");
console.log (caja);

// forma 2

var caja2 = document.querySelector("#caja2");
console.log (caja2);


var texto_caja = document.getElementById ("caja").innerHTML;
console.log (texto_caja);



//remplazar contenido de un div
var caja = document.getElementById ("caja");
caja.innerHTML = "remplazar TEXTO";

//agregar styles a un elemento
caja.style.background = "red";
caja.style.border = "1px solid blue";


//agrear una clase de CSS
caja.className = "div_perron";
