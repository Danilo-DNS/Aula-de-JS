let salario = Number(prompt("Digiti seu salario:"))

if (salario >= 0 && salario <= 400) {
    alert(`Novo salario:${salario + (salario * 0.15)}\nReajuste ganho:${salario * 0.15}\nEm percentual:15%`)
} else if(salario >= 400.01 && salario <= 800) {
    alert(`Novo salario:${salario (salario * 0.12)}\nReajuste ganho:${salario * 0.12}\nEm percentual:12%`)
}else if(salario >= 800.01 && salario <= 1200) {
    alert(`Novo salario:${salario (salario * 0.1)}\nReajuste ganho:${salario * 0.1}\nEm percentual:10%`)
}else if(salario >= 1200.01 && salario <= 2000) {
    alert(`Novo salario:${salario (salario * 0.07)}\nReajuste ganho:${salario * 0.07}\nEm percentual:7%`)
}else{
    alert(`Novo salario:${salario (salario * 0.04)}\nReajuste ganho:${salario * 0.04}\nEm percentual:4%`)
}