//arrondir le résultet à 2 decimales
//raffraichir le resultat au changement de l'input (onchange et onkeyup)
// verifier donner (si<0)
// stocker les resultats(cookies)
//historique de calcul (seulement si click sur calculer)
// Imprimer le page?
//convertir en pdf ou excel??
// Animation?

const CalculGain = () => {
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
    
    document.getElementById("resultatBrut").innerText = totalBrut + " €";
    document.getElementById("resultatDifference").innerText = charges + " %";
    document.getElementById("resultatNet").innerText = totalNet + " €";
};
