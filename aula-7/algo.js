/*function on() {
    document.querySelector("#lamp").src ="img/acessa.png"
}
function off() {
    document.querySelector("#lamp").src ="img/desligada.png"
}*/

function trocar(arquivo,nome) {
    document.querySelector('#personagem').setAttribute('src','img/'+arquivo)
    document.querySelector('#personagem').setAttribute('data-personagem',nome)
}

function pegar() {
    let personagem = document.querySelector('#personagem').getAttribute("data-personagem")
    alert("O personagem é "+personagem)
}