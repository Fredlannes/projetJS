let btn = document.getElementById("afficherUser")
btn.addEventListener("click", () => {
    showUsers()
})

function showUsers() {

    //initialise ma requete
    // je mets ma lettre dans mon enveloppe

    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://reqres.in/api/users?page=1");

    //je veux attrapper le retour de ma requette
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                //on gere le retour de notre appel ajax
                //console.log("Response = " + xhr.response);
                const object = JSON.parse(xhr.response);

                let myhtml = "";
                object.data.forEach(element => {
                    myhtml += "<div><p>"+ element.first_name +" "+ element.last_name +" </p></div>";
                });
                document.getElementById("allUtilisateurs").innerHTML = myhtml;
            }
            else if(xhr.status == 404){
                alert("impossible de trouver l'url de la page")
            }
            else {
                alert("Une erreur est survenue");
            }
        }
    })
    xhr.send();
}

