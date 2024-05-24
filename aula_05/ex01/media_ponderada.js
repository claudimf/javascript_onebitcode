// Crie um programa um programa para calcular a média ponderada que armazena uma quantidade qualquer de números e seus respectivos pesos e, no fim, mostre o resultado

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [];
let pesos = [];

function perguntePorNumeroEPeso() {
    rl.question('Digite um número (ou "sair" para calcular a média ponderada): ', (inputNumber) => {
        if (inputNumber.toLowerCase() === 'sair') {
            calcularMediaPonderada();
            return;
        }

        const number = parseFloat(inputNumber);
        if (isNaN(number)) {
            console.log('Entrada inválida! Por favor, digite um número válido.');
            perguntePorNumeroEPeso();
            return;
        }
        
        rl.question('Digite o peso para este número: ', (pesoEntrada) => {
            const peso = parseFloat(pesoEntrada);
            if (isNaN(peso)) {
                console.log('Entrada inválida! Por favor, digite um peso válido.');
                perguntePorNumeroEPeso();
                return;
            }

            numeros.push(number);
            pesos.push(peso);
            perguntePorNumeroEPeso();
        });
    });
}

function calcularMediaPonderada() {
    let sum = 0;
    let pesosSomatorio = 0;

    for (let i = 0; i < numeros.length; i++) {
        sum += numeros[i] * pesos[i];
        pesosSomatorio += pesos[i];
    }

    const mediaPonderada = sum / pesosSomatorio;
    console.log(`A média ponderada é: ${mediaPonderada.toFixed(2)}`);
    rl.close();
}

perguntePorNumeroEPeso();

// Rodar localmente
// docker compose run --rm app node aula_05/ex01/media_ponderada.js