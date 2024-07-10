let idade = Number(prompt("Digite sua idade:"))
let peso = Number(prompt("Digite seu peso:"))

if (idade >= 18 && peso >= 50) {
    alert(`pode doar o sangue`)
} else {
    alert(`não pode doar o sangue`)
}