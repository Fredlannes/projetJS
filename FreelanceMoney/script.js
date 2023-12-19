function calculGain(){
    let myForm = document.getElementById("formCalculGain");
    let formObjet = new FormData(myForm);

    let tauxHorraire = formObjet.get("TH");
    let tauxJournalier = formObjet.get("TJM");
    let extras = formObjet.get("Extras");

    let qteTauxHorraire = formObjet.get("qteTH");
    let qteTauxJournalier = formObjet.get("qteTJM");
    let qteExtras = formObjet.get("qteExtras");

    let charges = formObjet.get('Charges')
}