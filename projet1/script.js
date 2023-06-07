
function RefrechWysiwyg(){
    let textTitre = document.getElementById("titreWysiwyg").value;
    document.querySelector("#titreWysiwygResultat").textContent = textTitre

    let colorTitle = document.getElementById("colorTitleWysiwyg").value;
    document.querySelector("#titreWysiwygResultat").style.color = colorTitle
    
    let sizeTitle = document.getElementById("sizeTitleWysiwyg").value;
    document.querySelector("#titreWysiwygResultat").style.fontSize = `${sizeTitle}px`
    
    let contentText = document.getElementById("contentWysiwyg").value;
    document.querySelector("#contentWysiwygResultat").textContent = contentText
    
    let imgTitre = document.getElementById("imgWysiwyg").value;
    document.getElementById("imgWysiwygResultat").src = imgTitre

    let imgMaxWidth = document.getElementById("imgMaxWidthWysiwyg").value;
    document.getElementById("imgWysiwygResultat").style.width = ''+imgMaxWidth+'px'

}

function transformFieldsetIn(){
    let tousImput = document.querySelectorAll("input");
    tousImput.forEach(myInput => {
        myInput.style.padding = '5px'
    })
}

function transformFieldsetOut(){
    let tousImput = document.querySelectorAll("input");
    tousImput.forEach(myInput => {
        myInput.style.padding = 'inherit'
    })
}

const btn = document.getElementById("btnGenererWysiwyg");
btn.addEventListener('click', RefrechWysiwyg);
const mesInputsWithEvent = document.querySelectorAll(".onChangeRefrechWysiwyg");

mesInputsWithEvent.forEach(monImput => {
    monImput.addEventListener('keyup', RefrechWysiwyg);
    monImput.addEventListener('change', RefrechWysiwyg);
    
    monImput.addEventListener('mouseover', transformFieldsetIn);
    monImput.addEventListener('mouseleave', transformFieldsetOut);

})