
function RefrechWysiwyg(){
    let textTitre = document.getElementById("titreWysiwyg").value;
    document.querySelector("#titreWysiwygResultat").textContent = textTitre
    
    let contentText = document.getElementById("contentWysiwyg").value;
    document.querySelector("#contentWysiwygResultat").textContent = contentText
    
    let imgTitre = document.getElementById("imgWysiwyg").value;
    document.getElementById("imgWysiwygResultat").src = imgTitre
}

let btn = document.getElementById("btnGenererWysiwyg");
btn.addEventListener('click', RefrechWysiwyg);

// let inputTitre = document.querySelector("#titreWysiwyg");
// inputTitre.addEventListener('keyup', RefrechWysiwyg)
// inputTitre.addEventListener('change', RefrechWysiwyg)

let mesInputsWithEvent = document.querySelectorAll(".onChangeRefrechWysiwyg");

mesInputsWithEvent.forEach(elements => {
    elements.addEventListener('keyup', RefrechWysiwyg);
    elements.addEventListener('change', RefrechWysiwyg);

})