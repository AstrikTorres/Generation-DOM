let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('far');
let kelvin = document.getElementById('kelvin');
let button = document.getElementById('button');

button.addEventListener('click', convertir)

function convertir() {
    let conversion_farenheit = 1.8 * parseInt(celsius.value) + 32;
    let conversion_kelvin = parseInt(celsius.value) + 273.15;
    fahrenheit.innerHTML = (conversion_farenheit + ' Farenheit ') + (conversion_kelvin + ' Kelvin');
}
