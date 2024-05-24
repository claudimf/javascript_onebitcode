const numeros = [1, 2, 3, 4, 5]

const dobroDosNumeros = numeros.map(function (elementoAtual, indiceAtual, arrayOriginal) {
    console.log( `indice: ${indiceAtual} | valor: ${elementoAtual}`)
    
    // return elementoAtual * 2
    return {dobro: elementoAtual * 2, metade: elementoAtual/2, valorOriginal: elementoAtual}
})

console.log(dobroDosNumeros)

// Rodar localmente
// docker compose run --rm app node aula_05/map.js