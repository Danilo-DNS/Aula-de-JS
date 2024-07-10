let numeros = [4,20,8,26,100]

//For in
for (posicao in numeros) {
    console.log(`O valor ${numeros[posicao]} esta na posição ${posicao}`) 
}
// for of
for (let numero of numeros) {
    console.log(`O valor é ${numero}`)
    
}

const data = new Date()
console.log(data.getDay())
console.log(data.getMonth())
console.log(data.getFullYear())
console.log(data.getDate())

// Desestruturação

const pessoa = {
    nome: 'Felipe',
    idade:16
}
console.log(pessoa)

// Desestruturação pessoa

const nome = pessoa.nome
const idade = pessoa.idade
console.log(nome)

//alterando o nome da propiedade

const{idade:age} = pessoa
console.log(age)

//desestruturando arrays

const frutas = ['Banana','Melancia','Abacaxi']
const [item1, item2 ,item3] = frutas
console.log(item3)

//desestruturando funções

const frutas1 = {
    f1:"banana",
    f2:"uva",
    f3:"pitaya",
}
