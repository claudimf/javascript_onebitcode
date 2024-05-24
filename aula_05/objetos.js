// Declarar objetos
let pessoa = {
    idade: 28,
    nome: "Fulano",
    endereco: { rua: "rua 1", numero: "123" }
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.endereco)
console.log(pessoa.endereco.rua)

pessoa.nome = "Outro nome"

console.log(pessoa)

pessoa.telefone = "987654321"
console.log(pessoa)

let pessoa2 = {
    idade: 28,
    nome: "Fuilano",
    ola: function () {
        console.log(`Ola, mundo aqui é o ${this.nome}`)
    }
}

console.log(pessoa2.ola())

pessoa2.nome = "beltrano"
console.log(pessoa2.ola())


let calculadora = {
    x:5,
    y:9,
    somar: function() { console.log(this.x + this.y)}
}

console.log(calculadora.somar())

calculadora.x = 50
console.log(calculadora.somar())

// Rodar localmente
// docker compose run --rm app node aula_05/objetos.js