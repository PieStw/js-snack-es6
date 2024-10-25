//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


let lista = [];

for(let i = 0; i < 10; i++){

    const squadre = {nome:`squadra: ${i}`, punti: 0, falli: 0};
    lista.push(squadre);

}


for(let i = 0; i < lista.length; i++){

    lista[i].punti = Math.floor(Math.random() * 100 + 1);
    lista[i].falli = Math.floor(Math.random() * 100 + 1);

}

console.log(lista);

let lista2 = [];

for(let i = 0; i < lista.length; i++){

    const newSquadre = {nome: lista[i].nome, falli: lista[i].falli};
    lista2.push(newSquadre);

}

console.log(lista2);