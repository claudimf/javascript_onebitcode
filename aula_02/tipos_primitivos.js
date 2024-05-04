// string
console.log("teste")
console.log('esse é um "texto" com aspas')
console.log('olá mundo')
console.log('teste'[2])
console.log('teste'[6])

// boolean
console.log(true)
console.log('true'==true)

// number
console.log(42)
console.log(8.5)
console.log(Number.MAX_SAFE_INTEGER)

// bigint
console.log(42n)
console.log(42n + 5n)
console.log(BigInt(Number.MAX_SAFE_INTEGER*2))
console.log(999999999999n * 44444444444n)

// Null vs undefined
console.log(null)
var texto
console.log(texto)
var texto = null
console.log(texto)

// var, let ou const
var texto = "ola, mundo"
console.log(texto)
texto = "texto 2"
console.log(texto)

let nome = "Fulano"
console.log(nome)
nome = "Beltrano"
console.log(nome)

const nome2 = "Fulano 2"
console.log(nome2)
nome2 = "Beltrano 2"
console.log(nome2)

// Rodar localmente
// docker compose run --rm app node aula_02/tipos_primitivos.js