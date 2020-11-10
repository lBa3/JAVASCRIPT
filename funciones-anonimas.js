
'use stric'

//funcion anonima

var pelicula = function (nombre){
	return "La pelicula es "+ nombre;
}

//callback -> funcion dentro de otra

// forma clasica console.log ( "la suma es ="+sumame (2, 4) );
// function sumame (n1, n2){
// 	var sum = n1 + n2;
// 	return sum;
// }



//forma con callback + funcion anonima

function sumame (n1, n2, sumaYimprime, duplicar)
{
	var sum = n1 + n2;
	sumaYimprime(sum);
    duplicar(sum);
    return sum;
}

sumame(2,2,function(dato){
  console.log ("la suma es = " +dato );
},function (dato){
  console.log ("la multiplica de los dos es = ", (dato * 2) );
  }
);




