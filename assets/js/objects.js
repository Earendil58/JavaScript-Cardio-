const userChosenKeyName = 'level';


const person = {
    name: 'Carlos',
    apellido: 'Menem',
    age: 115,
    hobbies: ['rapiña', 'privatizar'],
    [userChosenKeyName]: '...',
    saludo: function () {
        console.log('Siganme, no los voy a defraudar');
    },
    1.5: 'Hola'
};


person.altura = '170 cm';

// person.saludo();

// console.log(person.altura);

// delete person.age;

console.log(person);

console.log(person['age']);

console.log(person[1.5]);

console.log(person[userChosenKeyName]);