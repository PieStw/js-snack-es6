//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


function newArray(a, b, array){

    let newArray = [];

    for(let i = a; i < b + 1; i++){

        newArray.push(array[i])

    }

    return newArray;

}

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const array2 = newArray(1, 10, array);

console.log(array);
console.log(array2);
