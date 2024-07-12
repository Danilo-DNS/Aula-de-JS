function menu() {
    let tamanho = document.querySelector('#menu-area')

    if (tamanho.style.width == "0px") {
        tamanho.style.width = "170px"
    } else {
        tamanho.style.width = "0px"
    }
}