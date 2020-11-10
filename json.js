'use strict'


window.addEventListener('load', function(){
	//declaracion de JSON
	var JSON_pelicula = {
					titulo: 'batman vs superman',
					year: 2017,
					pais: 'EEUA'
	}

	console.log(JSON_pelicula);
	console.log(JSON_pelicula.titulo);


	var JSON_ARRAY_peliculas = [{
	                 titulo: "Spiderman", 
	                 year: 2020, 
	                 pais: "Francia"},
	                 JSON_pelicula
	];

	console.log(JSON_ARRAY_peliculas);

	var caja_pelis = document.querySelector("#peliculas");
	var indice;
	for (indice in JSON_ARRAY_peliculas){
		var p = document.createElement("p");
		p.append(JSON_ARRAY_peliculas[indice].titulo + " - " + " AÑO " + JSON_ARRAY_peliculas[indice].year);
		caja_pelis.append(p);
	}

});
