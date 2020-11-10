'use struct'

var nombre = prompt ("Dame el nombre");
var apellido = prompt ("Dame el apellido");

var texto =  `
  <h1>hola </h1>
  <h3>el nombre es : ${nombre}</h3>
  <h3>el apellido es : ${apellido}</h3>
`;

document.write (texto);