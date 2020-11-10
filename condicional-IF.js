//condicionales


//condicional IF
'use strict'

var edad = 160;

// mayor > que
// mejor < que
// igual =
// diferente !=
// mayo o igual  >= que


if (edad >= 18){
	console.log ("La edad que proporcionaste ["+edad+"] es mayor de edad" );
	if (edad <= 33){
		console.log ("Es un millenial" );
	}else if (edad >= 70){
		console.log ("Es un anciano" );
	}else{
		console.log ("eres un X" );
	}
}else{
	console.log ("La edad que proporcionaste ["+edad+"] es menor de edad" );
}


//operadores logicos
// && = y
// || = o


if (edad >= 18 && edad >= 70){
	console.log ("Eres mayor de edad pero no eres un viejo");
}

if (edad >= 18 || edad >= 70){
   console.log ("Eres mayor de edad y haun no cumples los 70");	
}

