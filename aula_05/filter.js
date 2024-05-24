// const numeros = [1, 2, 3, 4, 5]

// const pares = numeros.filter(function (elementoAtual) {
//     return elementoAtual % 2 === 0
// })

// const impares = numeros.filter(function (elementoAtual) {
//     return elementoAtual % 2 !== 0
// })

// console.log(numeros)
// console.log(pares)
// console.log(impares)

const pessoas = [
    { id: 101, nome: "Pessoa 1", idade: 20 },
    { id: 102, nome: "Pessoa 1", idade: 30 },
    { id: 103, nome: "Pessoa 1", idade: 28 },
    { id: 104, nome: "Pessoa 1", idade: 30 },
]

const rl = readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Escolha uma idade máxima para filtrar: ', (numero) => {
    let idadeMaxima = parseFloat(numero);
    
    const pessoaDentroLimite = pessoas.filter(function (pessoa) {
        return pessoa.idade <= idadeMaxima
    })

    console.log(pessoaDentroLimite)

    rl.close();
});


// Rodar localmente
// docker compose run --rm app node aula_05/filter.js