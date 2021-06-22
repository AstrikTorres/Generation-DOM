let nameInput = document.querySelector('#nameInput');
let button = document.querySelector('#button')

nameInput.addEventListener('keydown', function() {
    console.log(nameInput.value);
    /* console.log(event.target.value) */
});

button.addEventListener('click', () => {
    let nameHeader = document.querySelector('#nameH');
    nameHeader.textContent = nameInput.value;
});
