"use strict";
// il nostro primo file TS!
console.log('HELLO TYPESCRIPT!');
let x = 10;
console.log('UN ALTRO CONSOLELOG');
// TS è JS + tipizzazione
// TIPI DI DATO PRIMITIVI IN TS
// string
// number
// boolean
// undefined, null
// any
// i : permettono di assegnare IL TIPO ad una variabile
let student = 'Mario';
student = 'Stefano';
student = 'Valerio';
let myNum = 100;
// myNum = 'Stefano' // <-- myNum è nato come number e morirà come number
// provare ad assegnargli un valore di stringa rompe la compilazione
// quest capacità di TS di AUTO-DETERMINARE il tipo di una variabile grazie
// al suo valore iniziale si chiama "TYPE INFERENCE"
let canDrive = true;
// canDrive = 100
// student = true
let qualsiasi = true;
// il tipo di any SPEGNE il controllo della tipizzazione di TS
// ... a quel punto, tanto vale scrivere JS :)
// dando a qualsiasi il tipo di any, la riga dopo raggiungerebbe il browser!
// -> esplosioni
// qualsiasi.map((el) => console.log(el))
// a cosa serve avere un editor perfettamente consapevole del tipo di ogni dato? :)
// TS è un altro paio di occhi che ad ogni step verifica il tipo del dato
// e vi restituisce quando mettete il "." tutti i metodi e le proprietà valide
// per quel tipo di dato
const arr = ['uno', 'due', 'tre'];
const rMaiuscolo = arr.slice(1, 3)[1].split('')[1].toUpperCase();
console.log(rMaiuscolo);
const giveMeANumber = () => {
    return Math.floor(Math.random() * 11);
};
// TS ha capito che giveMeANumber torna SEMPRE un numero => number
console.log(giveMeANumber()); // numero tra 0 e 10
// const additionInJS = (num1, num2) => {
//   if (typeof num1 === 'number' && typeof num2 === 'number') {
//     return num1 + num2
//   } else {
//     return 'Non sono stati forniti 2 numeri'
//   }
// }
// console.log(additionInJS(5, 6))
const additionInTS = (num1, num2) => {
    return num1 + num2;
};
// console.log(additionInTS('5', '6')) // <-- non compila! :)
console.log(additionInTS(7, 8));
// console.log(additionInTS(10))
const addition = (num1, num2) => {
    if (!num2) {
        return 0;
    }
    else {
        return num1 + num2;
    }
};
console.log(addition(3, 4));
console.log(addition(4));
console.log(addition(4));
// TYPE UNION
let test = 50;
test = 'Stefano';
test = 100;
let test2 = 'ciao';
test2 = undefined;
let test3 = undefined;
test3 = ['ciao', 'array', 'di', 'stringhe'];
// STRUTTURE DATI COMPLESSE
// ARRAY
let arrayofNames = ['Antonio', 'Alessio', 'Sara'];
let arrayOfNumbers = [2, 6, 78, 34];
let mixedArray = [true, 'ciao', 100]; // si usano poco
let arr1 = ['uno', 'ciao'];
let arr2 = ['due', 'arrivederci'];
// due modi per dichiarare un array di stringhe
// il secondo utilizza le <> -> TYPE ARGUMENT
let arr3 = [undefined, 'ciao', ['1', '2'], 'aldo', ['aldo']];
arr1.push('100');
// newArrayOfNames sarà ottenuto filtrando arrayOfNames per solamente i nomi
// che cominciano con la lettera 'a', maiuscola o minuscola
const newArrayofNames = arrayofNames.filter((name) => {
    return name.charAt(0).toLowerCase() === 'a';
});
console.log(newArrayofNames); // ['Antonio', 'Alessio']
newArrayofNames.forEach((name) => console.log(name.toUpperCase()));
// TUPLE
// una Tupla è un tipo per un array in cui si specificano anche le posizioni
let mixed1 = [50, 23, 45, 'ciao', 'aldo', 100];
let tuple1 = ['ciao', 'stefano', 34, ''];
// OGGETTI
const teacher = {
    firstName: 'Stefano',
    lastName: 'Casasola',
    modules: ['U3'],
};
teacher.firstName = 'Dario';
teacher.lastName = 'Del Giudice';
teacher.modules = ['U1'];
// teacher.firstName = 100 // :)
console.log(teacher.modules.length); // 1
const teacher1 = {
    firstName: 'Dario',
    lastName: 'Del Giudice',
    modules: ['U1'],
};
const teacher2 = {
    firstName: 'Stefano',
    lastName: 'Casasola',
    modules: ['U3'],
    region: 'FVG',
};
// in alternativa si potrebbe aggiungere region successivamente
// teacher2.region: 'FVG',
const arrayOfTeachers = [];
arrayOfTeachers.push(teacher1, teacher2);
arrayOfTeachers.forEach((t) => {
    console.log(t.lastName.length);
});
const gigio = {
    height: 170,
    eyeColor: 'azure',
    feetNumber: 2,
    languagesKnown: ['JS', 'TS'],
};
const address1 = {
    cityName: 'Roma',
    street: 'Via del Campidoglio',
    civicNumber: 10,
    zipCode: '00142',
    area: 'Lazio',
};
const address2 = {
    cityName: 'Westerville',
    street: '1st St',
    civicNumber: 0,
    zipCode: '68814',
    area: {
        state: 'NE',
        country: 'USA',
    },
};
const address3 = {
    cityName: 'Westerville',
    street: '1st St',
    civicNumber: 0,
    zipCode: '68814',
    area: {
        state: 'NE',
        neighborhood: 'USA',
    },
};
