// let btn = document.getElementById("afficherUser")
// btn.addEventListener("click", () => {
//     showUsers()
// })

//on recupere le numero de page et on continue
// function showUsers() {
//     const nbPage = document.getElementById("numberPageUser").value;
//     getUsers(nbPage)
    
// }
const loader = '<div class="lds-ripple"><div></div><div></div></div>'
//on fait l'appel ajax et on continue

function getUsers(numeroPage){
    document.getElementById("allUtilisateurs").innerHTML = loader
    document.getElementById("pagination").innerHTML = ""
    const xhr = new XMLHttpRequest();
    const url = "https://reqres.in/api/users?delay=0.5&page=" + numeroPage;
    xhr.open('GET', url);

    //je veux attrapper le retour de ma requette
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                //on gere le retour de notre appel ajax
                //console.log("Response = " + xhr.response);
                const object = JSON.parse(xhr.response);
                setUsersInPage(object)
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

 //on affiche le resultat de l'appel ajax dans la page
function setUsersInPage(listUsers){
    // on ajoute la liste des utilisateurs
    let myhtml = "";
    listUsers.data.forEach(element => {
        myhtml += '<div><img src="'+element.avatar+'"/><p>'+ element.first_name +' '+ element.last_name +' </p></div>';
    });
    document.getElementById("allUtilisateurs").innerHTML = myhtml;

    //on crée la pagination
    let nbPage = listUsers.total_pages;
    let currentPage = listUsers.page;

    let htmlPagination = ""
    for(let i=1; i<=nbPage; i++){
        if(i == currentPage){
            htmlPagination += '<button class="btn active" disabled> '+i+' </button>'
            
        }else{
            htmlPagination += '<button class="btn" onclick="getUsers('+i+')"> '+i+' </button>'

        }
    }

    document.getElementById("pagination").innerHTML = htmlPagination;
}

document.addEventListener("DOMContentLoaded", () => {
    getUsers(1)
})
