'use stric'

//te permite cargar primero el JS antes de los objetos de tipo html
window.addEventListener('load', () => {

    var botonload = document.querySelector("#boton_load");

	botonload.addEventListener('click', function(){
		alertame();
	});

	function alertame(){
		alert("el load esta trabajando");
		return true;
	}

});
