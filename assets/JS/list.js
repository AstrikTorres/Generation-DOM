const btnAnimals = document.querySelector('#animals');
const btnComputers = document.querySelector('#computers');
const btnPeople = document.querySelector('#people');
const list = document.querySelector('#list');

const listAnimals = ['Pez', 'Jaguar', 'Lobo', 'Iguana', 'Pegelagarto', 'Ardilla', 'Canguro', 'Tlacuache', 'Ajolote']
const listComputers = ['Asus', 'Hp', 'Toshiba', 'Dell', 'Mac', 'Acer', 'Lenovo', 'Huawei', 'Alienware', 'Compaq']
const listPeople = ['Carlos Eduardo', 'Edgar Rodrigo', 'Pedro Angel', 'Cesar Eduardo', 'Luis', 'Clara Itzel', 'Tania Belem', 'Felipe Jesus', 'Sharon', 'Astrik Sem', 'Gustavo Israel', 'Jaquelin']

function displayList(lists) {
    list.textContent = '';
    lists.forEach(l => {
        const item = document.createElement('li');
        item.textContent = l;
        list.appendChild(item);
    });
}

btnAnimals.addEventListener('click', () => {
   displayList(listAnimals); 
});

btnComputers.addEventListener('click', () => {
    displayList(listComputers);
});

btnPeople.addEventListener('click', () => {
    displayList(listPeople);
});

/* btnAnimals.addEventListener('click', function() {
    listAnimals.forEach(animal => {
        const li = document.createElement('li');
        // <li></li>
        li.textContent = animal;
        // li.classList.add('mi-clase-css');
        // <li>Animal</li>
        list.appendChild(li);
    });
}); */