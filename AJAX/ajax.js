
//on recupere le numero de page et on continue
// function showUsers() {
//     const nbPage = document.getElementById("numberPageUser").value;
//     getUsers(nbPage)
    
// }
const loader = '<div class="lds-ripple"><div></div><div></div></div>'
//on fait l'appel ajax et on continue

//pour faire une requete get :
function getUsers(numeroPage){
    document.getElementById("allUtilisateurs").innerHTML = loader
    document.getElementById("pagination").innerHTML = ""
    const xhr = new XMLHttpRequest();
    const url = "https://reqres.in/api/users?page=" + numeroPage;
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


 //--------------------creation user en methode xmlhttprequest---------------------//


function createUser (){
    //on doit faire une requete post
    const xhr = new XMLHttpRequest();
    const url = "https://reqres.in/api/users";
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4){
            if(xhr.status === 201){
                //on gere le retour de notre appel ajax
                //console.log("Response = " + xhr.response);
                const object = JSON.parse(xhr.response);
                console.log(object)
            }
            else if(xhr.status == 404){
                alert("impossible de trouver l'url de la page")
            }
            else {
                alert("Une erreur est survenue");
            }
        }
    })

    let myForm = new FormData();
    myForm.append('name','fred');
    myForm.append('job','developper');
    //conversion de l'objet en Json
    let json = convertToJson(myForm)
    xhr.send(json);
}

 // --------------------meme code avec fetch je trouve mieux a faire ------------//

function convertToJson(data){
    let object = {};
    data.forEach((value, key) => object[key] = value);
    return JSON.stringify(object);
}


let btn = document.getElementById("afficherUser")
    btn.addEventListener("click", () => {
        createUserFetch()
    })

let btn2 = document.getElementById("effacerUser");
btn2.addEventListener("click", () => {
    deleteUser();
});
let btn3 = document.getElementById("modifierUser");
btn3.addEventListener("click", () => {
    editUser();
});

function createUserFetch(){
    fetch("https://reqres.in/api/users",{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            job: document.getElementById('job').value,
        })
    })
        .then(r => {   //r pour response on aurait pu ecrire response à la place
            return r.json()
            }
        )
        .then(r => {
            alert(r)
            console.log(r)
        })
        .catch(e => {   //e pour error on aurait pu ecrire error à la place
            alert('Une erreur est survenue', e)
    })
}

function deleteUser(){
    fetch("https://reqres.in/api/users/2",{
        method: 'DELETE',
        headers: {},
    })
        .then(r => {
            if(r.status == 204){
                alert("L'utilisateur à bien été supprimé");
            }
            else{
                alert("impossible de supprimer l'utilisateur");
            }
        })
        .catch(e => {   //e pour error on aurait pu ecrire error à la place
            alert('Une erreur est survenue', e)
    })
}

function editUser(){
    fetch("https://reqres.in/api/users/2",{
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            job: document.getElementById('job').value,
        })
    })
        .then(r => {   //r pour response on aurait pu ecrire response à la place
            return r.json()
            }
        )
        .then(r => {
            alert(r)
            console.log(r)
        })
        .catch(e => {   //e pour error on aurait pu ecrire error à la place
            alert('Une erreur est survenue', e)
    })
}
