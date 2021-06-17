// 1.- Manipulando los elementos por clase con la propiedad especìfica de clase

var parrafos = document.getElementsByClassName("parrafos");

console.log(parrafos);

// 2.- Manipulando cada elemento del arreglo con la clase "parrafos" y cambiando su contenido.

document.getElementsByClassName('parrafos')[0].textContent = 'Nuevo texto de parrafo por clase, arreglo con textContent y getElementsByClassName';

document.getElementsByClassName('parrafos')[1].innerHTML = 'Nuevo texto de parrafo por clase, arreglo con innerHTML y getElementsByClassName';

// 3.- Manipulando cada elemento por identificador con la propiedad especifica y la general, cambiando su contenido

document.querySelector('#parrafo3').textContent = 'Nuevo texto de parrafo por identificador, textContent y querySelector';
// usamos '#', que viene siendo el sustituto de 'getElementById'; Ya que 'querySelector' toma un elemento general y dentro del argumento, tiene que especificarse la notación del tipo de elemento.

document.getElementById('parrafo4').innerHTML = "Nuevo texto de parrafo por identificador, innerHTML y getElementById";

// 4.- Asignando variables de elementos manipulados por propiedades generales.

var parrafo1 = document.querySelectorAll('.parrafos')[0];

var parrafo2 = document.querySelector('#parrafo2');

// 5.- Imprimiendo las propiedades de document.

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);