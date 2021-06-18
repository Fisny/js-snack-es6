// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome,
// punti fatti,
// falli subiti.
// Nome sarà l’unica proprietà da compilare, 
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 
// nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un 
// nuovo array i cui elementi contengono solo nomi 
// e falli subiti e stampiamo tutto in console.
// Svilupparlo in ES6.

const squadreArray = [
    {
        nome: 'Sampdoria',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Inter',
        punti: 0,
        falli: 0
    },
    {
        nome: 'Juve',
        punti: 0,
        falli: 0
    }
]

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let x = 0; x < squadreArray.length; x++) {
    squadreArray[x].punti = randomNumber (0,100);
    squadreArray[x].falli = randomNumber (0,100);
}

let nuovoArray = [];

for (let x = 0; x < squadreArray.length; x++) {
    const { nome, falli} = squadreArray[x];
    nuovoArray[x]={
        falli,
        nome
    }
}

