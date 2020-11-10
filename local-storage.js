'use strict'

window.addEventListener('load', function(){
	//validar si existe el local storage del browser
	if (typeof(Storage) !== 'undefined'){
		console.log ("Local Storage disponible ");
	}else{
		console.log ("NO disponible ");
	}

	//guardar datos en el localstorage
	// en tu navegador -> applications / Storage
	localStorage.setItem("titulo", "Curso de JavaScript");

	//recupara elemento del localstorage y imprimirlo en el html
	document.querySelector("#item_local_storage").innerHTML = localStorage.getItem("titulo");

	//guardar un objeto JSON en el localStorage
	var usuario = {
				nombre: "Rogelio Batres",
				email: "lbatres@mail.com",
				web: "lbatres.com"
	};

	localStorage.setItem("usuario", JSON.stringify(usuario));

	//recuparar el objeto del JSON 
	var json_usuario = JSON.parse(localStorage.getItem('usuario'));
	console.log (json_usuario);
	document.querySelector("#json_item_local_storage").innerHTML =  json_usuario.web +" - "+ json_usuario.nombre ;


	//eliminar elementos de localstorage
	localStorage.removeItem("usuario");
	localStorage.clear();




});