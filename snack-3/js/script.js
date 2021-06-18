// Snack 3
// Abbiamo sempre un array di squadre, con:
// nome
// punti fatti
// falli subiti
// Stampare in html (in forma tabellare!!! i 
// dati relativi alle squadre evidenziando 
// in giallo la riga corrispondente alla squadra
// con più falli subiti.

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

let squadraGialla = {
    nome: "",
    punti: 0,
    falli: 0,
}

for (let x = 0; x < squadreArray.length; x++) {
    squadreArray[x].punti = randomNumber (0,100);
    squadreArray[x].falli = randomNumber (0,100);
    
    if(squadreArray[x].falli > squadraGialla.falli) {
        squadraGialla.nome = squadreArray[x].nome;
        squadraGialla.falli = squadreArray[x].falli;
        squadraGialla.punti = squadreArray[x].punti;
    }
}

for (let x = 0; x < squadreArray.length; x++) {
    const { nome, punti, falli} = squadreArray[x];
  if(squadraGialla.falli > squadreArray) {
    const ul = "<ul style=background:yellow></ul>"
  } else {
    const ul = `<ul> <li> ${nome} </li> <li> ${punti} </li> <li> ${falli} </li> </ul>`
    document.getElementById('table-container').innerHTML += ul
  }
   
}

