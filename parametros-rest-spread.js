
'use strict'


//parametros REST 

function listadofrutas (fruta1, fruta2, ...masFrutas){
  document.write ("<p>fruta uno : " + fruta1 + "</p>");
  document.write ("<p>fruta dos : " + fruta2 + "</p>");
  document.write ("<p>Mas frutas : " + masFrutas + "</p>");
  document.write ("<p>***************************+++</p>");
  console.log (typeof masFrutas);

}

var a = "mango";
var b = "platano";
var c = "sandia";
var d = "naranja";
var e = "melon";
var f = "papaya";
listadofrutas(a, b, c, d, e, f);


//parametro SPREAD

function autos (g, ...h){
  
  document.write ("<p>marca auto : " + g + "</p>");
  document.write ("<p>array de autos : " + h + "</p>");
  document.write ("<p>***************************+++</p>");
}

var g = "Ford";
var h = ['audi', 'kia', 'BMW', 'mercedez'];


autos (g, ...h)
