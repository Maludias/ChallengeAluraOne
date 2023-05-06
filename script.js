const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function btnCripto(){
    const textCripto = criptografar(textArea.value);
    mensagem.value = textCripto;
   
}

function criptografar(stringCripto){
    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringCripto = stringCripto.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCripto.includes(matrizCodigo[i][0])){
            stringCripto=stringCripto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCripto;
}

function btnDesCripto(){
    const textDesCripto = descriptografar(textArea.value);
    mensagem.value = textDesCripto;
   
    
}

function descriptografar(stringDesCripto){
    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesCripto = stringDesCripto.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesCripto.includes(matrizCodigo[i][0])){
            stringDesCripto=stringDesCripto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesCripto;
}

function isNullArea() {
    let textCripto = document.getElementById("textAreaCrip");
    if (textCripto.value === "") {
     
      text.value = "Nenhuma Mensagem Encontrada! Digite um texto para criptografar ou descriptografar.";
      return false;
    }
    return true;
  }

function copyCripto(){
    var textForDescrip = document.getElementById("text");
    textForDescrip.select();
    document.execCommand("copy");
    textForDescrip.value = "";
}

const textarea = document.getElementById('text');

function removeImage() {
  if (textarea.value.length > 0) {
    textarea.style.backgroundImage = "none";
  } else {
    textarea.style.backgroundImage = "";
  }
}

