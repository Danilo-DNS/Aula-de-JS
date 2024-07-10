let conta = 0
//.toLowerCase() é para diminuir a fonte
//.toUpperCase() é para aumentar a fonte
let p1 =  prompt("telefonou para a vitima?:").toLowerCase()

if (p1 == "sim") {
    conta+=1
}

let p2 = prompt("Esteve no local do crime?:").toLowerCase()

if (p2 == "sim") {
    conta+=1
}

let p3 = prompt("Mora perto da vitima?:").toLowerCase()

if (p3 == "sim") {
    conta+=1
}

let p4 = prompt("Devia para a vitima?:").toLowerCase()

if (p4 == "sim") {
    conta+=1
}

let p5 = prompt("Já trabalhou com a vitima?:").toLowerCase()

if (p5 == "sim") {
    conta+=1
}

if (conta == 2 ) {
    alert(`Suspeito`)
} else if (conta == 3 || conta == 4) {
    alert(`Cumplice`)
} else if (conta == 5) {
    alert(`Assassino`)
} else {
    alert(`Inocente`)
} 

