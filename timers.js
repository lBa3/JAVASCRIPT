'use strict'


window.addEventListener('load', function (){
  
  //setInterval --> se ejecuta y se repite un determinado tiempo

  var tiempo = setInterval(function (){
    console.log ("setInterval ejecutando cada 3 segundos");
    document.querySelector ("h1").style.fontSize = "50px";
  }, 3000);


  //setTimeout --> se ejecuta una sola vez

  var tiempo = setTimeout(function (){
    console.log ("setTimeout se ejecuto");
    document.querySelector ("h1").style.color = "red";
  }, 5000);
  

  //clearInterval --> para la ejecucion del setInterval

  var stop = document.querySelector("#stop_interval_timer");
  stop.addEventListener("click", function (){
   alert("Has parado el setInterval");
   clearInterval(tiempo);
  });




});

