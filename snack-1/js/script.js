// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa 
// con le seguenti proprietà: nome e peso. Stampare
// a schermo la bici con peso minore utilizzando
// destructuring e template literal. Risolvetelo
// prima in versione ES5, poi commentate la versione
// in ES5 e fatelo in ES6.

var listaBici = [
    {
        nome: "nike",
        peso: 25
    },
    {
        nome: "adidas",
        peso: 23
    },
    {
        nome: "puma",
        peso: 27
    }
];

var ultimaBici;
var biciPesante = 100;

for (var x = 0; x < listaBici.length; x++) {
    var pesoBici = listaBici[x].peso;
    if (typeof biciPesante === 'undefined' || pesoBici < biciPesante) {
        ultimaBici = listaBici[x];
        biciPesante = pesoBici;
    }
}

console.log(ultimaBici);


// ES6 -------------------------------------

// const listaBici = [
//     {
//         nome: "nike",
//         peso: 25
//     },
//     {
//         nome: "adidas",
//         peso: 23
//     },
//     {
//         nome: "puma",
//         peso: 27
//     }
// ];

// let ultimaBici
// let biciPesante = 0;

// for (let x = 0; x < listaBici.length; x++) {
//     const {peso} = listaBici[x].peso;
//     if (peso > biciPesante) {
//         ultimaBici = listaBici[x];
//         biciPesante = peso;
//     }
// }

// console.log(ultimaBici);

