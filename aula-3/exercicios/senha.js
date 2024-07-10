let usuario = prompt("Digite seu usuario:")
let senha = prompt("Digite sua senha:")

function login(usuario,senha) {
    
    let res;

    if (usuario == "carlos" && senha == "12345") {
         res = "esta certo"
    } else {
         res = "esta errado"
    }
    return res
}

alert(`${login(usuario,senha)}`)