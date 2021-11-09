/*Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// 1. Genereare 5 numeri casuali tutti diversi
// 1.1 stampare i numeri in pagina
// 2. memorizzarei i numeri 
// 3. dopo 30 secondi chiedere all'utente per5 volte di scrivere un numero
// 4. il softwere confronterà i numeri inseriti con quelli genereati
// 4.1 stampare gli eventuali numeri uguali 

let numeriRandom = [];

const containerNumeri = document.getElementById("numeri-pc");
let numeriUser = document.getElementById("numeri-utente");

for ( let i = 0; i < 5; i++) {
    let randNum = Math.floor(Math.random() * 99) + 1;
    if (numeriRandom.includes(randNum) === false) { 
        numeriRandom.push(randNum);
        containerNumeri.innerHTML += randNum + ",";
    }
}
console.log(numeriRandom);


let numeriUtente = [];

// setTimeout(promptUtente, 3000)

// function promptUtente(){

//     for ( let i = 0; i < 5; i++){
//         const numero = prompt("scrivi un numero che hai visto in precendeza");
//         numeriUtente.push(numero);
//     } 
// }
// console.log(numeriUtente)

// numeriUtente.forEach((element) => {
    
//     if(numeriRandom.includes(element) === true) {
//         numeriUt.innerHTML += element + ","; 
//     }
// });


setTimeout(promptUtente, 3000)

function promptUtente(){
    for (let i = 0; i < 5; i++){
        const numRichiesto = parseInt(prompt("scrivi un numero che hai visto in precendeza"));

        if (numRichiesto === numeriRandom[i]){
            numeriUtente.push(numRichiesto);

            numeriUser.innerHTML += numRichiesto + ",";
        };
    }
}