'use strict'

//eventos de mouse

var boton = document.querySelector("#boton1");
function cambia_color (){
	alert("vas a cambia el color del boton");
	var bg = boton.style.background;
	if(bg == "green"){
		boton.style.background="red";
	}else{
		boton.style.background="green";
	}

	return true;
}


///// esta es mas eficiente eficiente
var boton2 = document.querySelector("#boton2");

boton2.addEventListener('click', function(){
	cambia_color2();
});

function cambia_color2 (){
	alert("vas a cambia el color del boton");
	var bg = boton2.style.background;
	if(bg == "pink"){
		boton2.style.background="blue";
	}else{
		boton2.style.background="pink";
	}
	return true;
}



// mouse over

var boton3 = document.querySelector("#boton3");

boton3.addEventListener('mouseover', function(){
	cambia_color3();
});

function cambia_color3 (){
	alert("vas a cambia el color del boton");
	var bg = boton3.style.background;
	if(bg == "black"){
		boton3.style.background="gray";
		boton3.style.color="#fff";
	}else{
		boton3.style.background="black";
		boton3.style.color="#fff";
	}
	return true;
}

//focus
var input_1 = document.querySelector("#txt_nombre");
input_1.addEventListener('focus', function(){
	console.log ("estas haciedo [focus] en el campo de nombre");
});

//blur

var input_2 = document.querySelector("#txt_telefono");
input_2.addEventListener('blur', function(){
	console.log ("estas saliendo [blur] del campo de telefono");
});

//keydown
var input_3 = document.querySelector("#txt_email");
input_3.addEventListener('keydown', function(event){
	console.log ("estas ingresando una tecla [keydown] del campo de email ---> ", String.fromCharCode(event.keyCode));
});

//Keypress
var input_4 = document.querySelector("#txt_texto");
input_4.addEventListener('keypress', function(event){
	console.log ("precionaste una tecla [keypress] del campo de texto ---> ", String.fromCharCode(event.keyCode));
});

//Keyup
var input_5 = document.querySelector("#txt_texto2");
input_5.addEventListener('keyup', function(event){
	console.log ("precionaste una tecla [keyup] del campo de texto ---> ", String.fromCharCode(event.keyCode));
});







