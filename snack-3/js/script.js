// Snack 3
// Abbiamo sempre un array di squadre, con:
// nome
// punti fatti
// falli subiti
// Stampare in html (in forma tabellare!!! i 
// dati relativi alle squadre evidenziando 
// in giallo la riga corrispondente alla squadra
// con più falli subiti.

// const squadreArray = [
//     {
//         nome: 'Sampdoria',
//         punti: 0,
//         falli: 0
//     },
//     {
//         nome: 'Inter',
//         punti: 0,
//         falli: 0
//     },
//     {
//         nome: 'Juve',
//         punti: 0,
//         falli: 0
//     }
// ]

// const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// let squadraGialla = {
//     nome: "",
//     punti: 0,
//     falli: 0,
// }

// for (let x = 0; x < squadreArray.length; x++) {
//     squadreArray[x].punti = randomNumber (0,100);
//     squadreArray[x].falli = randomNumber (0,100);
    
//     if(squadreArray[x].falli > squadraGialla.falli) {
//         squadraGialla.nome = squadreArray[x].nome;
//         squadraGialla.falli = squadreArray[x].falli;
//         squadraGialla.punti = squadreArray[x].punti;
//     }
// }

// for (let x = 0; x < squadreArray.length; x++) {
//     const { nome, punti, falli} = squadreArray[x];
//   if(squadraGialla.falli > squadreArray) {
//     const ul = "<ul style=background:yellow></ul>"
//   } else {
//     const ul = `<ul> <li> ${nome} </li> <li> ${punti} </li> <li> ${falli} </li> </ul>`
//     document.getElementById('table-container').innerHTML += ul
//   }
   
// }

// OTTAVIO ----------------

const teams = [
    {
        nome: 'Inter',
        score: 10,
        fouls: 1
    },
    {
        nome: 'Juventus',
        score: 5,
        fouls: 7
    },
    {
        nome: 'Taranto',
        score: 7,
        fouls: 12
    }
];


const tableHTML = document.querySelector('.table-container');


// di volta in volta inserisco l'ultimo numero più elevato
// che "ho incontrato" nel ciclo, di falli subiti.
let lastHigherFouls = 0;

// inserisco l'ultima squadra con più falli subiti che ho
// incontrato negli step del ciclo
let lastHigherFoulsTeam;

for (let x = 0; x < teams.length; x++) {

    // il team attuale ha un numero maggiore di falli subiti
    // rispetto all'ultima osservazione?
    if (teams[x].fouls > lastHigherFouls) {
        lastHigherFouls = teams[x].fouls;
        lastHigherFoulsTeam = teams[x];
    }

}

// ----

for (let x = 0; x < teams.length; x++) {

    const { nome, score, fouls } = teams[x];


    let customClass = '';
    // ma se per caso...
    if (teams[x] === lastHigherFoulsTeam) {
        customClass = 'yellow';
    }

    tableHTML.innerHTML += `
        <ul class="${customClass}">
            <li>${nome}</li>
            <li>${score}</li>
            <li>${fouls}</li>
        </ul>
    `;

}