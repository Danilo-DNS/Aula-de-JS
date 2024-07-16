const novaCasa = document.querySelector('[data-button]')
console.log(novaCasa)

const criarCasa = () =>{
    const casa = document.querySelector('[data-casa]')
    const area = document.querySelector('[data-area]')
    const numero = document.querySelector('[data-numero]')
    const bairro = document.querySelector('[data-bairro]')
    const cidade = document.querySelector('[data-cidade]')
    const vArea = area.value
    const vNumero = numero.value
    const vBairro = bairro.value
    const vCidade = cidade.value
    const lista = document.createElement('li')
    const conteudo = `<p>${vArea} m², numero ${vNumero} (${vBairro} - ${vCidade})</p>`
    lista.innerHTML = conteudo


    lista.appendChild(botaoDel())
    casa.appendChild(lista)
   
    area.value = ""
    numero.value =   ""
    bairro.value = ""
    cidade.value = ""
}

novaCasa.addEventListener('click',(criarCasa))

const botaoDel = () =>{

    const botaoDelete = document.createElement('button')

    botaoDelete.innerHTML = "Delete"

    botaoDelete.addEventListener('click',deletarCasa)
    return botaoDelete
}

const deletarCasa = (evento) =>{
    const botaoDelete = evento.target
    const CasaDeletada = botaoDelete.parentElement
    CasaDeletada.remove()
    
}