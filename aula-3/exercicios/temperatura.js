let f = Number(prompt("Digite tempetrura em fahrenheit:"))

function tempetrura(f){
    let c = f /32
    return c
}

alert(`esta ${tempetrura(f).toFixed(1)} ° celsius`)