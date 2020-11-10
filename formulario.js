'use strict'


window.addEventListener('load', function(){
  console.log ("Load Cargado... OK");
  var box_data = document.querySelector(".right");
  box_data.style.display = "none";


  var formulario = document.querySelector ("#form");
  formulario.addEventListener('submit', function(){
     console.log ("evento submit capturado");

     var nombre = document.querySelector("#nombre").value;
     var apellido = document.querySelector("#apellido").value;
     var edad = document.querySelector("#edad").value;


     box_data.style.display = "block";
     console.log (nombre , apellido, edad);
     var array_datos_usuario = [nombre , apellido, edad];


     var indice;
     for (indice in array_datos_usuario){
     	 var parrafo = document.createElement ("p");
         parrafo.append(array_datos_usuario[indice]);
         box_data.append(parrafo);
     }

     
  });



});

