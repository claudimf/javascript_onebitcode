const numeros = [1, 2, 3, 4, 5]

// numeros.forEach(
//     function (elementoAtual, indiceAtual, arrayCompleto) {
//         console.log(`o elemento no índice ${indiceAtual} é ${elementoAtual}`)
//     }
// )

// for (let i = 0; i < numeros.length; i++) {
//     console.log(`o elemento no índice ${i} é ${numeros[i]}`)
// }

function mostrarElementos(elementoAtual, indiceAtual, arrayCompleto) {
    console.log(`o elemento no índice ${indiceAtual} é ${elementoAtual}`)
}
// numeros.forEach(mostrarElementos)


function paraCada(array, funcaoParaExecutar) {
    for (let i = 0; i < array.length; i++) {
        funcaoParaExecutar(array[i], i, array)
    }
}

paraCada(numeros, function (elementoAtual, indiceAtual, arrayCompleto){
    console.log(`o elemento no índice ${indiceAtual} é ${elementoAtual}`)
})

paraCada(numeros, mostrarElementos)

// Rodar localmente
// docker compose run --rm app node aula_05/forEach.js