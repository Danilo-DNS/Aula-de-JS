let dolar = Number(prompt("Digite quantos dolares:"))
let real = Number(prompt("Digite quantos reias:"))

// let money = function(dolar,real) {return dolar * real}
function money(dolar, real){
    let conv = dolar * real
    return conv
}

alert(`vc tem ${money(dolar, real)}`)