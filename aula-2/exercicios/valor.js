let n1 = Number(prompt("Digite um numero:"))
let n2 = Number(prompt("Digite outro numero:"))
let n3 = Number(prompt("Digite outro numero:"))
let n4 = Number(prompt("Digite outro numero:"))

if (n2 > n3 && n4 >n1 && (n3 + n4) > (n1 + n2) && n3 >0 && n4 >0) {
    alert(`valorer aceitos`)
} else {
    alert(`valorer não aceitos`)
}