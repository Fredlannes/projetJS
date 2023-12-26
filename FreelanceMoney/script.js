//  V  arrondir le résultet à 2 decimales
//  V  raffraichir le resultat au changement de l'input (onchange et onkeyup)
//  V  verifier donner (si<0)
//  V  stocker les resultats(cookies)
//     historique de calcul (seulement si click sur calculer)
//      Animation?
//      Je veux créer une classe calculdata
//  Le constructeur récupère un objet formdata en parametre
//  et il sera similaire à l'objet Object ci-dessous


const CalculGain = () => {

    //on verifie les inputs
    checkInput()
    //on recupere le formulaire
    let myForm = document.getElementById("formCalculGain");
    //on le transforme en objet formdata
    let formObj = new FormData(myForm);

    //on recupere les inputs du formulaire par leur nom
    let myCalculDatas = {

        tauxHorraire : formObj.get("TH"),
        tauxJournalier : formObj.get("TJM"),
        extras : formObj.get("Extras"),
        qteTauxHorraire : formObj.get("qteTH"),
        qteTauxJournalier : formObj.get("qteTJM"),
        qteExtras : formObj.get("qteExtras"),
        charges : formObj.get("Charges"),

        gainHeure: function(){
            return this.tauxHorraire * this.qteTauxHorraire
        },
        gainJour : function(){
            return this.tauxJournalier * this.qteTauxJournalier
        },
        gainExtras : function(){
            return this.extras * this.qteExtras
        },
        totalBrut : function(){
            return this.gainHeure() + this.gainJour() + this.gainExtras()
        },
        ChargeAdeduire :function(){
            return (this.totalBrut() * (this.charges/100))
        },
        totalNet :function(){
            return this.totalBrut() - this.ChargeAdeduire()
        },
    };


    //animer le resultat du brut
    animateCompteur("resultatBrut", myCalculDatas.totalBrut())
    animateCompteur("resultatDifference", myCalculDatas.ChargeAdeduire())
    animateCompteur("resultatNet", myCalculDatas.totalNet())

};

const animateCompteur = async(idARemplacer, total) => {
    let cpt = 0;
    let animationDuration = 70;
    let monElementHtmlDeResultat = document.getElementById(idARemplacer);

    
    if(monElementHtmlDeResultat.innerText != total.toFixed(2) + " €"){
        let increment = Math.round(total / 10)
        if(increment === 0){
            increment = 1;
        }
        while(cpt <= total){
            monElementHtmlDeResultat.innerText = cpt.toFixed(2) + " €";
            await timer(animationDuration)
            cpt += increment;
        }
        monElementHtmlDeResultat.innerText = total.toFixed(2) + " €";
    }
}

const timer = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const checkInput = () => {
    let mesInputs = document.querySelectorAll("#formCalculGain input.form-control");
    mesInputs.forEach(monInput => {
        //verifier s'il vaut 0 ou +
        if(monInput.value < 0){
            monInput.value = 0;
        }
        saveElementCookies(monInput)
    });
};

const saveElementCookies= (input) => {
    document.cookie = input.name + ' = ' +input.value;
}

//recuperer les cookies 
const getCookie = (input) => {
    let mesCookies = document.cookie;

    const name = input.name + "=";
    const cookieTab = mesCookies.split("; ");
    let valeurCookie = null;
    cookieTab.forEach(cookie => {
        if(cookie.indexOf(name) === 0){
            valeurCookie = cookie.substring(name.length)
        }
    });
    return valeurCookie
}
//mettre les valeurs dans les input

let btn = document.getElementById("buttonValidation");
btn.addEventListener("click", CalculGain)

let mesInputs = document.querySelectorAll("#formCalculGain input.form-control");

mesInputs.forEach(monInput => {
    //s'il a une valeur en cookie lui donner
    let cookie = getCookie(monInput);
    if (cookie != undefined && cookie != null) {
        monInput.value = cookie
    }

    getCookie(monInput);
    monInput.addEventListener("change", CalculGain);
    monInput.addEventListener("keyup", CalculGain);
    
});

CalculGain()
