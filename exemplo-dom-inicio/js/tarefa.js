const novaTarefa = document.querySelector('[data-form-button]')
console.log(novaTarefa)

/*
agora vamos interagir com o botão,quando clicarmos
ele vai fazer algo

1-Qual evento vamos utilizar? click
2-Onde vamos colocar esse evento? novaTarefa
3-O que vai acontecer depois que clicamos neste botão? adicionar nova tarefa
*/ 

const criarTarefa = (evento) =>{
    //prevenir o comportamento da padrão de atualizar a pagina
    evento.preventDefault()
    const list = document.querySelector('[data-list]')
    //pegar o valor da lista
    const input = document.querySelector('[data-form-input]')
    //pegar o valor do input
    const valor = input.value
    //criando o elemento <li>
    const tarefa = document.createElement('li')
    //criando uma li 
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${valor}</p>`
    //em seguindo acessamos o conteudo do elemento
    tarefa.innerHTML = conteudo

    tarefa.appendChild(botaoCon())
    //aparecer o botao concluido
    tarefa.appendChild(botaoDel())
    list.appendChild(tarefa)
    //aparecer a lista q foi escrito
    //console.log(valor)
    
    input.value = ""
}

novaTarefa.addEventListener('click',(criarTarefa))

const botaoCon = () =>{
    //criar o botão
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')

    botaoConclui.innerHTML = "Concluido"

    botaoConclui.addEventListener('click',concluirTarefa)
    return botaoConclui

}

const botaoDel = () =>{
    //criar o botão

    const botaoDelete = document.createElement('button')

    botaoDelete.classList.add('check-button')

    botaoDelete.innerHTML = "Delete"

    botaoDelete.addEventListener('click',deletarTarefa)
    return botaoDelete
}
//função para concluir a tarefa
const concluirTarefa = (evento) =>{
    const botaoConclui = evento.target
    //o parentElement vai subir um nó na minha arvore
    /*<li>
    <button>concluido</button>
    </li>*/ 
    const tarefaCompleta = botaoConclui.parentElement
    // colocar o efeito de rabisco no <li>
    //o toggle vai executar a classe done a partir do momento em que eu clicar no botão
    tarefaCompleta.classList.toggle(`done`)
}

const deletarTarefa = (evento) =>{
    const botaoDelete = evento.target
    //o parentElement vai subir um nó na minha arvore
    /*<li>
    <button>Delete</button>
    </li>*/ 
    const tarefaDeletada = botaoDelete.parentElement
    // colocar o efeito de rabisco no <li>
    //o toggle vai executar a classe done a partir do momento em que eu clicar no botão
    tarefaDeletada.remove()
    console.log("Não")
    
}