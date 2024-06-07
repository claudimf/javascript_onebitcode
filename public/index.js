// async function executar() {
//     const resposta = await fetch("http://localhost:3000", { method: "GET" })
//     const textoHtml = await resposta.text()

//     console.log(textoHtml)
//     console.log(resposta)
// }
// // fetch("http://localhost:3000").then(function (resposta) {
// //     const PromiseDoBody = resposta.text()
// //     return PromiseDoBody
// // }).then(function (body){
// //     console.log(body)
// // })

// executar()


// async function executar2() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// }

// executar2()

async function executar3() {
    const postList = document.getElementById("postsList")
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts")
    const dados = await resposta.json()
    
    console.log(dados)

    dados.forEach(function (post) {
        const postElement = document.createElement("article")
        
        const postTitle = document.createElement("h2")
        postTitle.textContent = post.title

        const postAuthor = document.createElement("span")
        postAuthor.textContent = `Autor:${post.useId}`

        const postContent = document.createElement("p")
        postContent.textContent = post.body

        postElement.append(postTitle, postAuthor, postContent, document.createElement("hr"))
        postList.appendChild(postElement)
    })
}

executar3()