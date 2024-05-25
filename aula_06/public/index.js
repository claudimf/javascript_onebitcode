// alert("Ola!!!!")

// document.addEventListener("click", function() {
//     alert("Voce clicou no documento")
// })

const titulo = document.getElementById("titulo")

// console.log(titulo)

// titulo.addEventListener("click", function(){
//     alert("Voce clicou no titulo")
// })

// titulo.addEventListener("mouseover", function(){
//     alert("Voce passou com o mouse")
// })


// const titulos = document.querySelectorAll("h1")
// console.log(titulos)


titulo.addEventListener("click", function(){
    this.innerText = "Ola mundo! <em>Estamos usando o DOM</em>"
    const id = this.getAttribute("id")
    console.log(id)
    this.classList.toggle("bg-blue")
})

function toKebabCase(str) {
    return str.split(" ").join("-").toLowerCase()
}

function removerLi(id){
    liParaRemover = document.getElementById(id)
    liParaRemover.remove()
}

function adicionarLi(){
    const jogo = prompt("Insira o nome do jogo que quer adicionar:")
    
    const liElement = document.createElement("li")
    liElement.innerText = jogo
    liElement.id = toKebabCase(jogo)

    const btnRemover = document.createElement("button")
    btnRemover.innerText = "Remover Jogo"
    btnRemover.addEventListener("click", function() {removerLi(liElement.id)})

    liElement.appendChild(btnRemover)
    const ulElement = document.getElementById("listaDeJogos")
    
    ulElement.appendChild(liElement)
}

document.getElementById("adicionarJogo").addEventListener("click", adicionarLi)