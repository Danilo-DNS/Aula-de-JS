let n1 = Number(prompt("Digite um numero:"))
let n2 = Number(prompt("Digite outro numero:"))

function maior(n1,n2){
    
    let res;

    if (n1>n2) {
         res = n1
    } else {
         res = n2
    }
    return res
}

alert(`${maior(n1, n2)}`)