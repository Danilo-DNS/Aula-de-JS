let anoAtual= Number(prompt("Em que ano estamos?"))
let anoNasc= Number(prompt("Em que ano estamos?"))

let idade = anoAtual - anoNasc

//alert(`A sua idade é `+idade)

if (idade >= 18) {
    alert(`Vc pode votar`)
} else if(idade > 15 && idade <18) {
    alert(`Vc voto opcional`)
} else{
    alert(`Vc não pode votar`)
}