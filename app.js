var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');

txtInput.innerText = "Enter your english sentence here!"
outputDiv.innerText = "Priya Kothalkar";


console.log(txtInput);

function clickHandler(){
    outputDiv.innerText = "translated " + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);