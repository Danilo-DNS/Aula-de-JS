function trocar(arquivo) {
    document.querySelector('#genero').setAttribute('src','img/'+arquivo)
}


let altura = parseFloat(document.getElementById('altura')).value
let peso = parseFloat(document.getElementById('peso')).value
let imc = peso / (altura * altura )


console.log(imc)



function calculo() {
    alert(imc)
    
}
