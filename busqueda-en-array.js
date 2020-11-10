'use strcit'


var flores = ['rosas', 'gira soles', 'vugambilia', 'noche buena'];

var buscar_flor = flores.find( flores => flores == "vugambilia");
document.write ("<p>Si existe ->" + buscar_flor+ "</p>");

var buscar_flor = flores.findIndex( flores => flores == "vugambilia");
document.write ("<p>esta en la posicion  ->" + buscar_flor +"</p>");

//comparar valores numericos

var numeros= ['10','23', '60', '-10'];

var buscar_numero = numeros.some( numero => numero >= 11);
document.write ("<p>->" + buscar_numero +"</p>");