'use strict'

//transformacion de cadenas de texto

var num = 5693200111;
var tex = "hola como estas, como te fue, como te hablo?";
var tex2 = "YEA! HAY VAMOS";

var numero_to_string = num.toString();
console.log (numero_to_string);

//cambiar a mayusculas toUpperCase
var tex_mayus = tex.toUpperCase();
console.log (tex_mayus);

//cambiar a mayusculas toUpperCase
var tex_minus = tex2.toLowerCase();
console.log (tex_minus);

//calcular longitd de un texto
var longitd_text =tex.length;
console.log ("la palabra ["+tex+"] tiene una longitd de letras = "+ longitd_text)

//concatenacion de textos
var cadena_final = tex+" -> "+tex2;
console.log(cadena_final);
//----
var cadena_final = tex.concat(" -> " +tex2);
console.log(cadena_final);

// buscar una palabra dentro de un string
var palabra = "como";
var resultado = tex.indexOf(palabra);
console.log ("la palabra -> ["+palabra+"] esta en la posicion num " +resultado);
// obtener la ultima posicion de la palabra a buscar
var resultado = tex.lastIndexOf(palabra);
console.log ("la palabra -> ["+palabra+"] esta en la utima posicion num " +resultado);
var resultado = tex.search(palabra);
console.log ("la palabra -> ["+palabra+"] la hallo en la posicion num " +resultado);
var resultado = tex.match(/como/g);
console.log ("halle tantas veces la palabra ->" +resultado);
console.log(resultado);
var resultado = tex.startsWith("ho");
console.log("encontro la palabra al incio de la cadena es -->"+ resultado);



//subtraer un fragmento del texto
var extracto = tex.substr (15,10);
console.log ("substraigo el texto que esta apartir de la letra numero 15 tomo los 10 siguientes " + extracto);
//substraer una letra de la cadena de texto
var extracto = tex.charAt (17);
console.log ("substraigo una sola letra en la posicion numero 17 " + extracto);






