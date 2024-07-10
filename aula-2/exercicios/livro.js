let livro = Number(prompt("quantos livros pegou?"))
let promoção = livro * 8
let sempromo = livro * 12
if (livro > 10) {
    alert(`Valor total é ${promoção}`)
} else {
    alert(`Valor total é ${sempromo}`)
}