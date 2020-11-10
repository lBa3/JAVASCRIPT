'use estrict'

var productos = ['camisas', 'pantalones', 'zapatos', 'gorras'];
var categorias = ['casuales', 'deportivas', 'fit', 'classic'];

var tienda = [productos, categorias];
console.log (tienda);

//acceder al 1 array en el parametro 3
console.log (tienda[0][3]);
//acceder al 2 array en el parametro 2
console.log (tienda[1][2]);


// añadir un elemto a un array
 //productos.push ("Sudaderas");
 debugger;
do{
	var nuevo_producto = prompt ("dame un producto");
	productos.push (nuevo_producto);
	console.log ("Añadiste un nuevo elemento de productos ->> " +nuevo_producto );
}
while ( nuevo_producto != "TERMINA")
document.write (productos)
console.log(productos);


// obtener el ulitmo elemento de un array y eliminarlo
var ultimo_elemento_producto = productos.pop();
console.log ("El ultimo elemento es -> " + ultimo_elemento_producto);
console.log (productos);

// array a texto

var texto_array = productos.join();
document.write("<h1>"+texto_array+"</h1>");

 