function disBonjour(){
    alert("Bonjour Fred");
}
function disAurevoir(){
    alert("Bye Fred");
}


function RemplaceText(){
    //recuperer le texte de l'input
    let textImput = document.getElementById("leTexteARecuperer").value

    //recuperer le noeud <p id="leTexteARemplacer">
    let monParagraphe = document.querySelector("#leTexteARemplacer")

    //mettre le texte de l'imput dans le noeud

    monParagraphe.textContent = textImput
}