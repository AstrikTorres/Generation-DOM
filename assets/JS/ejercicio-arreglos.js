let animales = ['Gato', 'Perro', 'Elefante', 'Cocodrilo', 'Ratón', 'Cerdo', 'Pollo', 'Iguana', 'Rana', 'Lagartiga' ]
let computadoras = ['HP', 'DELL', 'Alienware', 'Apple', 'Acer', 'Lenovo', 'Toshiba', 'Asus', 'Samsumg', 'MSI']
let companeros = ['Diego', 'Gustavo', 'Eduardo', 'Luis', 'Rodrigo', 'Luz', 'tania', 'Yanni', 'Javier', 'Tamara']

let button_animales = document.querySelector('#animales')
let button_computadoras = document.querySelector('#computadoras')
let button_companeros = document.querySelector('#companeros')

const lista = document.querySelector('#list')

button_animales.addEventListener('click', function(){
    
    lista.textContent = ' ';
    animales.forEach(function(animal){
        let item = document.createElement('li'); //Crea elementos li para la lista
        item.textContent = animal; // Se asigna el valor
        list.appendChild(item); // Se le agrega un subelemento a uno más grande del HTML
    })

});

button_computadoras.addEventListener('click', function(){
    
    lista.textContent = ' ';
    computadoras.forEach(function(computadora){
        let item = document.createElement('li');
        item.textContent = computadora;
        list.appendChild(item);
    })

});

button_companeros.addEventListener('click', function(){
    
    lista.textContent = ' ';
    companeros.forEach(function(companeros){
        let item = document.createElement('li');
        item.textContent = companeros;
        list.appendChild(item);
    })

});