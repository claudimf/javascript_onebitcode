const pessoas = [
    { id: 101, nome: "Pessoa 1", idade: 20 },
    { id: 102, nome: "Pessoa 2", idade: 30 },
    { id: 103, nome: "Pessoa 3", idade: 28 },
    { id: 104, nome: "Pessoa 4", idade: 30 },
]

const rl = readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Pesquisar o nome: ', (nome_pesquisado) => {
    
    const pessoaEncontrada = pessoas.find(function (pessoa) {
        return pessoa.nome == nome_pesquisado
    })

    console.log(pessoaEncontrada)

    rl.close();
});


// Rodar localmente
// docker compose run --rm app node aula_05/find.js