let listaDeFrutas = ["Maçã", "Laranja", "Uva"]

console.log(listaDeFrutas[0])

console.log(listaDeFrutas[1])
listaDeFrutas[1] = "teste"
console.log(listaDeFrutas[1])

listaDeFrutas.push("aaaa")
console.log(listaDeFrutas)

listaDeFrutas.pop()
console.log(listaDeFrutas)

listaDeFrutas.shift()
console.log(listaDeFrutas)

listaDeFrutas.unshift('Teste 123')
console.log(listaDeFrutas)

let listaDeNumeros = [1, 2, 3, 5, 8]

let novoArray = listaDeFrutas.concat(listaDeNumeros)
console.log(novoArray)

let listeEmTexto = novoArray.join(" + ")
console.log(listeEmTexto)

let textoEmLista = listeEmTexto.split(" + ")
console.log(textoEmLista)

let frutas = ["Maçã", "Laranja", "Uva", "Banana", "Abacaxi"]
const duasPrimeiras = frutas.slice(2, 4)

console.log(frutas)
console.log(duasPrimeiras)

frutas.splice(2, 2)
console.log(frutas)

// Rodar localmente
// docker compose run --rm app node aula_05/arrays.js