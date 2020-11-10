'use estrict'


var carro =  ['kia', 'ford', 'VW', 'nissan'];
console.log (carro);

var lenguajes = new Array ('php', 'java', 'C#', 'python');
console.log (lenguajes);
console.log (lenguajes[3]);

// calular el numero de elementos que tiene un array
var total_elemento_carro = carro.length;
console.log ("total_elemento_carro " + carro.length);
var total_elemento_lenguaje = lenguajes.length;

//obtener un elemento seleccionado del array
var numero = parseInt( prompt("¿Que elemento del array quieres?",0) );

if (numero >= total_elemento_carro){
	alert("el numero que ingresaste no existe, el array solo tiene " + total_elemento_carro + "elementos");
}
	else{
		alert(carro[numero]);
		console.log ("el elemento selecionado fue = "+carro[numero]);
}


//recorrer el array por bucle for 
document.write ("<h1>carros vendidos en el  2020</h1>");

debugger;

for (var i = 0; i < total_elemento_carro; i++) {
	document.write("<p>" + carro[i] + "</p>");
}


//recorrer el array por bulce foreach + callback
document.write ("<h1>Lenguajes de programacion </h1>");

debugger;

lenguajes.forEach( (elemento, indice, array)=>{
	console.log (array);
    document.write("<p>" + elemento +" - indice - "+ indice + "</p>");
});

