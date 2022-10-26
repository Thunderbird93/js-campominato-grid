/*

L’utente clicca su un bottone 
che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.

*/


const play = document.querySelector(`.play`);

const grid = document.querySelector(`.s-grid`);

const celle = 100;


function generaCella(x) {
    const cella = document.createElement('div')
    cella.className = "cell";
    cella.innerText = x;
    return cella
}


play.addEventListener('click', function(){
    generaCampo(celle, grid);
    function generaCampo(max, element) {
    }
}
)







