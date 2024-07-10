let salario = [1200,1500,800]

for (let index = 0; index < salario.length; index++) {
    if (salario[index] < 1500) {
        salario[index] += salario[index]*0.10
    }  else{
        salario[index]
    }
    console.log(salario[index])
}