'use strict'


window.addEventListener('load', function(){
//consumo servicio REST con FETCH (AJAX)

var box_usuarios = document.querySelector("#listado_usuarios");
var box_usuario  = document.querySelector("#usuario2");
var box_profesor = document.querySelector("#profesor");

    getUsuarios()
                .then( data => data.json())
	            .then( users => {
			         console.log (users.data);
			         listado_user(users.data);

		    return getUsuario2();	         
	    })
	            .then(data => data.json())
	            .then(usuario2 => {
	            	console.log (usuario2.data);
	            	mostrar_user(usuario2.data);

	        return getInfo();
	   })       
	            .then(data => {
	            	console.log (data);
	            	mostrar_profesor (data) //esto es un string de un json
    });

    function getUsuarios(){
    	return fetch('https://reqres.in/api/users');
    }



    function getUsuario2(){
    	return fetch('https://reqres.in/api/users/3');
    }


	function listado_user(usuarios){
		usuarios.map((user, i) => {

         	let nombre = document.createElement('h2');
         	nombre.innerHTML = i + ".- "+ user.first_name + " " + user.last_name;
         	box_usuarios.appendChild(nombre);

         	var img = document.createElement('img'); 
            img.src = user.avatar; 
            box_usuarios.appendChild(img);

            document.querySelector(".loading").style.display='none';

         });
	}

	function mostrar_user(usuario2){

		    let user_select = document.createElement('h1');
		    user_select.innerHTML =  "usuario selecionado  ID --> " + usuario2.id;
		    box_usuario.appendChild(user_select);

         	let nombre = document.createElement('h2');
         	nombre.innerHTML =  usuario2.first_name + " " + usuario2.last_name;
         	box_usuario.appendChild(nombre);

         	var img = document.createElement('img'); 
            img.src = usuario2.avatar; 
            box_usuario.appendChild(img);

            document.querySelector("#usuario2 .loading").style.display='none';
        
	}

//creando una promesa
	function getInfo (){
			//JSON
			var profesor = {
					         nombre : "rogelio",
					         apellido: "batres",
					         url:"www.lbatres.com"
			};

			//promesa
			return new Promise((resolve, reject) => {
		       var profesor_string = JSON.stringify(profesor);

		       if(typeof profesor_string != 'string' ){
		           return reject ('error');
		       }else{
		       	   return resolve (profesor_string);

		       }
			});
	}

	function mostrar_profesor (profesore){
		 var json_profe = JSON.parse(profesore); //string to json
		 let profe = document.createElement('h1');
		 profe.innerHTML =  "El profesor es  --> " + json_profe.nombre;
		 box_profesor.appendChild(profe);
		 document.querySelector("#profesor .loading").style.display='none';

	}


});