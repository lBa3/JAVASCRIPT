'use stric'

//seleccionar todos los elementos div de mi html

var todos_los_div = document.getElementsByTagName("div");
console.log (todos_los_div);

todos_los_div[2].style.background = "red";

todos_los_div[3].style.background = "blue";

todos_los_div[5].style.background = "pink";



//pasar el contenido de elementos div a un objeto de tipo array

var seccion = document.querySelector('#mysection');
var hr = document.createElement('hr');

var valor;
for(valor in todos_los_div){
	if (typeof todos_los_div[valor].textContent == 'string'){
       var parrafo = document.createElement("p");
       var texto    = document.createTextNode (todos_los_div[valor].textContent);
       parrafo.append(texto);
       seccion.append(parrafo);
	}
}

seccion.append(hr);
  
