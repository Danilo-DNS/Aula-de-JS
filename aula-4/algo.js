/*variavel
let nome = "Wandebas"

//constante

const idade = 1

//objeto

let pessoa = {
    nome:'Jose',
    idade: 29,
    altura: 1.72,
    temGato: true
}

let serie = {
    nome:'House of Dragon',
    ano: 2023,
    altura: 1.72,
    temporada: 2,
    genero:'fantasia'
}

console.log(pessoa)
console.log(serie.nome) */

//lista em js
/*
let listaCompras = ['cafe','carne','bolacha','pão']
console.log(listaCompras.length)
console.log(listaCompras[2])

*/
/*
const redesSociais = ["youtube","x","face","insta"]

redesSociais.forEach((redesSociais) => {
    console.log(redesSociais)
})
*/

let filmes = ['interestelar','whiplash','o menino e a garça']
//adiciona
filmes.push("Vingadores")
filmes.push("Wonka")

console.log(filmes)
//remove o ultimo
filmes.pop()
console.log(filmes)

//remove o primeiro
filmes.shift()
console.log(filmes)

//adiciona no inicio
filmes.unshift("happu feet")
console.log(filmes)

//mescalar
let acresentar = filmes.join('.')
console.log(filmes)

//mostra o indice do arry na lista

console.log(filmes.indexOf('o menino e a garça'))
console.log(filmes)

console.log(filmes.indexOf('oppenheimer'))

let exemplo = "Senac SAD"
//conta a letra
let exemplo2 = exemplo.indexOf("SAD")
console.log(exemplo2)

//metodo map

const nuns = [1,2,3,4,5]
let resul = nuns.map(function(valor){
return valor * 2
})

console.log(resul)

// método filter
let lista = [1,6,100,4,12]
let lista2 = []

lista2 = lista.filter(function (item) {
    if (item < 20) {
        return true
    } else {
        return false
    }
})
console.log(lista2)