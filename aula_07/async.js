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

async function somaAsync(a, b) {
    const numA = parseFloat(a)
    const numB = parseFloat(b)

    if (isNaN(numA) || isNaN(numB)){
        return Promise.reject("Números inválidos")
    }

    return numA + numB
}

somaAsync(3, "aaaa").then(function(resultado){
    console.log(resultado)
}).catch(function(motivo){
    console.log(motivo)
})

// Rodar localmente
// docker compose run --rm app node aula_07/async.js