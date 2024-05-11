import { valor_dobrado, soma, subtracao } from "./funcoes.js";

// Criamos algumas funções auxiliares para cada parte do programa
function mostrarMenu() {
    const opcao = prompt(`Escolha uma operação:\n1. Dobro de um número\n2. Somar dois números\n3. Subtrair dois números\n4. Sair`)
    return parseInt(opcao)
}

function calcularDobro() {
    let numero = parseFloat(prompt("Digite um número:"));

    if (!isNaN(numero)) {
        let resultado = valor_dobrado(numero);
        alert(`O dobro de ${numero} é ${resultado}`);
    } else {
        alert("Por favor, insira um número válido.");
    }
}

function calcularSoma() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (!isNaN(numero1) && !isNaN(numero2)) {
        let resultado = soma(numero1, numero2);
        alert(`A soma de ${numero1} e ${numero2} é ${resultado}`);
    } else {
        alert("Por favor, insira números válidos.");
    }
}

function calcularSubtracao() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (!isNaN(numero1) && !isNaN(numero2)) {
        let resultado = subtracao(numero1, numero2);
        alert(`A subtração de ${numero1} e ${numero2} é ${resultado}`);
    } else {
        alert("Por favor, insira números válidos.");
    }
}


// Criamos uma variável no escopo externo para salvar a opção escolhida
let escolha;

do {
    escolha = mostrarMenu();

    // Usamos um switch para executar uma função diferente para cada caso
    switch (escolha) {
        case 1:
            calcularDobro();
            break;
        case 2:
            calcularSoma();
            break;
        case 3:
            calcularSubtracao();
            break;
        case 4:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
    }
} while (escolha !== 4); // Tudo isso enquanto a escolha for diferente de "4. Sair"