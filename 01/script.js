//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.




let lista = [];

for(let i = 0; i < 10; i++){

    const bici = {nome:`bici: ${i}`, peso: Math.floor(Math.random() * 100 + 1)};
    lista.push(bici);

}

let minPeso = 1000;
let posizione = 0;


lista.forEach((element, index) => {
    if(element.peso <= minPeso){
        minPeso = element.peso;
        posizione = index;
    }
});

console.log(lista);
console.log(`La bici più leggera è ${lista[posizione].nome} con un peso di ${minPeso}`);