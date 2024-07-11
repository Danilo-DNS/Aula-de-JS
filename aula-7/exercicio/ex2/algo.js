function lista() {

let nomes = document.querySelector('.name').value

const paragrafo = document.createElement("p")

paragrafo.innerText = nomes

document.body.appendChild(paragrafo)


}


