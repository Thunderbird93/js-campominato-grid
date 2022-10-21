/*
L’utente clicca su un bottone 
che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.
*/


//seleziono la griglia (il container)
const griglia = document.getElementById('container');

//selziono il bottone
const bottone = document.getElementById('btn');

//aggiungo un'azione al bottone
bottone.addEventListener('click', function(){
    griglia.innerHTML="";
    boxClickAdd('box', 'active');
})


