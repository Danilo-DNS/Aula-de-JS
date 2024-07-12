function verificar() {


        let select = document.querySelector('select').value

        if (select == "Desabilitado") {
            document.querySelector("input").disabled = true

            let pElemt = document.querySelector("#messagem")

            pElemt.innerText = "Desabilitado"
            textos.style.backgroundColor = "blue"
            textos.style.color = "White"
        } else {
          
            document.querySelector("input").disabled = false
            let pElemt = document.querySelector("#messagem")

            pElemt.innerText = ""
            textos.style.backgroundColor = "black"
            textos.style.color = "transparent"
    
        }
        
}
