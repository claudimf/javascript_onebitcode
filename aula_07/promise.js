console.log("Iniciado")

const minhaPromise = new Promise(function(resolve, reject){
    
    reject('Promise rejeitada')

    setTimeout(function(){
        console.log("Executando a Promise...")
        resolve("Promise resolvida")
    }, 3 * 1000)
    
})

minhaPromise.then(function(resultado){
    console.log(resultado)
})

minhaPromise.catch(function(motivo){
    console.log(motivo)
})

console.log(minhaPromise)

console.log("Finalizado")

// Rodar localmente
// docker compose run --rm app node aula_07/promise.js