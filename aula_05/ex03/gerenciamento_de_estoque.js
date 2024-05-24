const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let estoque = [];

function mostrarMenu() {
    console.log(`
    Escolha uma opção:
    1 - Cadastrar novo item
    2 - Listar itens cadastrados
    3 - Alterar quantidade de um item
    4 - Excluir um item do estoque
    5 - Sair
    `);
    rl.question('Digite o número da opção desejada: ', (opcao) => {
        switch (opcao) {
            case '1':
                cadastrarItem();
                break;
            case '2':
                listarItens();
                break;
            case '3':
                alterarQuantidade();
                break;
            case '4':
                excluirItem();
                break;
            case '5':
                rl.close();
                break;
            default:
                console.log('Opção inválida. Tente novamente.');
                mostrarMenu();
                break;
        }
    });
}

function cadastrarItem() {
    rl.question('Digite o nome do item: ', (nome) => {
        rl.question('Digite a quantidade do item: ', (quantidade) => {
            quantidade = parseInt(quantidade);
            if (isNaN(quantidade)) {
                console.log('Quantidade inválida! Por favor, insira um número válido.');
                cadastrarItem();
            } else {
                estoque.push({ nome, quantidade });
                console.log('Item cadastrado com sucesso!');
                mostrarMenu();
            }
        });
    });
}

function listarItens() {
    if (estoque.length === 0) {
        console.log('Não há itens cadastrados.');
    } else {
        console.log('Itens cadastrados:');
        estoque.forEach((item, index) => {
            console.log(`${index + 1}. Nome: ${item.nome}, Quantidade: ${item.quantidade}`);
        });
    }
    mostrarMenu();
}

function alterarQuantidade() {
    rl.question('Digite o nome do item que deseja alterar a quantidade: ', (nome) => {
        const item = estoque.find(i => i.nome === nome);
        if (!item) {
            console.log('Item não encontrado!');
            mostrarMenu();
        } else {
            rl.question('Digite a nova quantidade: ', (quantidade) => {
                quantidade = parseInt(quantidade);
                if (isNaN(quantidade)) {
                    console.log('Quantidade inválida! Por favor, insira um número válido.');
                    alterarQuantidade();
                } else {
                    item.quantidade = quantidade;
                    console.log('Quantidade alterada com sucesso!');
                    mostrarMenu();
                }
            });
        }
    });
}

function excluirItem() {
    rl.question('Digite o nome do item que deseja excluir: ', (nome) => {
        const index = estoque.findIndex(i => i.nome === nome);
        if (index === -1) {
            console.log('Item não encontrado!');
        } else {
            estoque.splice(index, 1);
            console.log('Item excluído com sucesso!');
        }
        mostrarMenu();
    });
}

mostrarMenu();

// Rodar localmente
// docker compose run --rm app node aula_05/ex03/gerenciamento_de_estoque.js