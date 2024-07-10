let nome = prompt("Digite seu nome:")
let salario = Number(prompt("Digite seu salario:"))
let venda = Number(prompt("Digite quanto você vendeu:"))

let comissao = venda * 0.15

let ganho = salario + comissao

alert(ganho.toFixed(2))