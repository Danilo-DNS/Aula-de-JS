

function troca(arquivo){
    document.querySelector(".genero_icon").setAttribute('src', './img/'+arquivo)
}

function calculo() {
   let peso = Number(document.querySelector("#peso").value)
   let altura = Number(document.querySelector("#altura").value)


   let imc = (peso / (altura * altura)).toFixed(1)

    if ( imc < 19.5 ){
    alert("voce está abaixo do peso");
    }
    if (imc >= 19.5 && imc < 26.4){
    alert("Você está com o peso ideal");
    }
    if (imc >= 26.4  && imc < 31) {
    alert(" Você está acima do peso");
    }
    if (imc >= 31 ) {
    alert("Você está obeso");
    }
}