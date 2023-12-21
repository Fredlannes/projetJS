//  V  arrondir le résultet à 2 decimales
//  V  raffraichir le resultat au changement de l'input (onchange et onkeyup)
//  V  verifier donner (si<0)
//     stocker les resultats(cookies)
//     historique de calcul (seulement si click sur calculer)
// Imprimer le page?
//convertir en pdf ou excel??
// Animation?

const CalculGain = () => {

    //on verifie les inputs
    checkInput()
    //on recupere le formulaire
    let myForm = document.getElementById("formCalculGain");
    //on le transforme en objet formdata
    let formObj = new FormData(myForm);

    //on recupere les inputs du formulaire par leur nom
    let tauxHorraire = formObj.get("TH");
    let tauxJournalier = formObj.get("TJM");
    let extras = formObj.get("Extras");

    let qteTauxHorraire = formObj.get("qteTH");
    let qteTauxJournalier = formObj.get("qteTJM");
    let qteExtras = formObj.get("qteExtras");

    let charges = formObj.get("Charges");

    //on commence le calcul
    let gainHeure = tauxHorraire * qteTauxHorraire;
    let gainJour = tauxJournalier * qteTauxJournalier;
    let gainExtras = extras * qteExtras;

    let totalBrut = gainHeure + gainJour + gainExtras;

    
    //total - charges%
    //ChargeAdeduire - (total * (charges/100)
    let ChargeAdeduire = totalBrut * (charges/100);
    let totalNet = totalBrut - ChargeAdeduire;
    
    document.getElementById("resultatBrut").innerText = totalBrut.toFixed(2) + " €";
    document.getElementById("resultatDifference").innerText = ChargeAdeduire.toFixed(2) + " %";
    document.getElementById("resultatNet").innerText = totalNet.toFixed(2) + " €";
};

const checkInput = () => {
    let mesInputs = document.querySelectorAll("#formCalculGain input.form-control");
    mesInputs.forEach(monInput => {
        //verifier s'il vaut 0 ou +
        if(monInput.value < 0){
            monInput.value = 0;
        }
    });
};

let btn = document.getElementById("buttonValidation");
btn.addEventListener("click", CalculGain)

let mesInputs = document.querySelectorAll("#formCalculGain input.form-control");

mesInputs.forEach(monInput => {
    monInput.addEventListener("change", CalculGain);
    monInput.addEventListener("keyup", CalculGain);
    
});

