//tester l'appel ajax
const urlApi = 'https://dtw.azurewebsites.net/api'
const urlApiLinks = urlApi + '/links'
//const urlApi = 'https://reqres.in/api/users'
function getLinks(){
    const headers = new Headers();
    headers.append("content-type", "application/json")


    const init = {
        method : 'GET',
        headers: headers,
    };

    fetch(urlApiLinks, init)
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            alert(error)
        })
}