function toKebabCase(str) {
    return str.split(" ").join("-").toLowerCase()
}

function removerLi(id){
    liParaRemover = document.getElementById(id)
    liParaRemover.remove()
}

function adicionarLi(jogo){
    const liElement = document.createElement("li")

    liElement.id = toKebabCase(jogo.nome)
    liElement.textContent = `Nome: ${jogo.nome} | Ano: ${jogo.ano} | Genero: ${jogo.genero}`

    const btnRemover = document.createElement("button")
    btnRemover.innerText = "Remover Jogo"
    btnRemover.addEventListener("click", function() {removerLi(liElement.id)})

    liElement.appendChild(btnRemover)
    document.getElementById("listaDeJogos").appendChild(liElement)
}

const form = document.getElementById("cadastrarJogo")

form.addEventListener("submit", function(evento){
    evento.preventDefault()
    
    const inputNome = document.getElementById("nome")
    const inputAno = document.getElementById("ano")
    const inputGenero = document.getElementById("genero")

    // const nome = inputNome.value
    // const ano = inputAno.value
    // const genero = inputGenero.value
    // console.log({nome, ano, genero})
    
    const jogo = {}
    jogo.nome = inputNome.value
    jogo.ano = inputAno.value
    jogo.genero = inputGenero.value

    adicionarLi(jogo)
    
    // inputNome.value = ""
    // inputAno.value = ""
    // inputGenero.value = ""

    evento.target.reset()
})