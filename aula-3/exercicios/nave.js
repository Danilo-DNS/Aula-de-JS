let velocidade = 0
let nome = prompt("Digite o nome da nave:")
let opcao = true
while(opcao){
    let menu = prompt("1 - Acelerar em 5km \n2 - Desacelerar em 5km \n3 - Imprimir dados \n4 - Sair \n")

    if (menu == 1) {
        alert(`Acelerarando em 5km`)
        velocidade+=5
    } else if (menu == 2 && velocidade<0) {
        alert(`Desacelerando em 5km`)
        velocidade-=5
    } else if (menu == 3) {
        alert(`Imprimindo\nO nome da Nave é ${nome}\nA velocidade da nave é ${velocidade}/h`)
    } else if (menu == 4) {
        alert(`tamo junto`)
        opcao = false
    } else{
        alert(`Opção invalida`)
    }
}