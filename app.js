var btnTranslate = document.querySelector('#btn-translate');
btnTranslate.addEventListener("click", clickHandler);
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector('#output');


// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
};

//for errors we have a function
function errorHandler(error) {
    console.log("error occured", error);
}

//what to dowhen we have a input or a click
function clickHandler() {
    // outputDiv.innerText = "translated " + txtInput.value;
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};
