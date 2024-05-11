function ola() {
    console.log('Olá, mundo')
}

ola()

function ola2(arg) {
    console.log('Olá, mundo2')
    console.log(arg)
}

ola2('Fulano')

function subtrair(x, y, nome = "Sem Nome") {
    console.log(`${x} - ${y} = ${x - y}`)
    console.log(`O nome é: ${nome}`)
}

subtrair(5, 10, 'Fulano')

subtrair(10, 7)


function subtrair2(x, y, nome = "Sem Nome") {
    let resultado = x - y
    console.log(`${x} - ${y} = ${x - y}`)
    console.log(`O nome é: ${nome}`)

    return resultado
}

const resultado = subtrair2(5, 7, 'Fulano')

console.log(resultado)


const subtrair3 = function (x, y) {
    let resultado = x - y
    console.log(`${x} - ${y} = ${x - y}`)

    return resultado
}

console.log(subtrair3(3,4))

// Rodar localmente
// docker compose run --rm app node aula_04/funcoes.js