function somaAssincrona(a, b){
    return new Promise(function (resolve, reject){
        const numA = parseFloat(a)
        const numB = parseFloat(b)

        if (isNaN(numA) || isNaN(numB)){
            reject("Números inválidos")
        } else {
            resolve(numA + numB)
        }
    })
}

somaAssincrona(3,7).then(function(resultado){
    console.log(resultado)
})

somaAssincrona(3,"teste").then(function(resultado){
    console.log(resultado)
}).catch(function(motivo){
    console.log(motivo)
}).finally(function(){
    console.log("Promise finalizada")
})

// Rodar localmente
// docker compose run --rm app node aula_07/promise_exemplo.js